
# Making a linear solver with LU decomposition

Let's write our first numerical algorithm!

There are many candidates for a "hello world" numerical algorithm, for instance [forward/backward euler methods for ODEs](https://en.wikipedia.org/wiki/Euler_method), but I think LU decomposition is perhaps the most fundamental and instructive.

LU decomposition, despite its modern name, has a long history. It can be thought of as simply gaussian elimination (only popularized by Gauss - Newton invented it in the Western world). This technique was first documented by Chinese mathematicians in AD 179 who used a unique form of computational tool known as [rod calculus](https://en.wikipedia.org/wiki/Rod_calculus) to execute the algorithm. This was one of the earliest formal uses of something like a computer algorithm as well as solving a linear system of equations, an ubiquitous task in scientific computing. 

Let's start from this [wikipedia](https://en.wikipedia.org/wiki/Gaussian_elimination#Example_of_the_algorithm) example of what the gaussian elimination looks like as a starting point for our algorithm. 

```@raw html
<img src="../2022-09-29-06-22-00.png" width=400/>
```

Without doing any kind of pivots in our augmented matrix (exchange of rows), our takeaway from this should be that solving a linear system looks a bit like manipulating it into a upper triangular form (forward elimination) followed by manipulating it into simultaneously lower triangular form (backward elimination) which yields an identity matrix and a solution.


More explicitly, starting from the first column of that (augmented) matrix $A_{aug}$, we apply exactly the row operations (adding and multiplying multiples of one row of a matrix to another) such that we zero out the elements below the diagonal. Do this for every column of the matrix. Then we do the same thing except in reverse starting from the last column of the matrix and above the diagonal to get our identity matrix. 


We can think of the first step as multiplying some matrix $L^{-1}$ to $A$ to form an upper triangular matrix $U$. 

$$L^{-1}A=U$$

By inverting this matrix and enforcing a uniqueness condition on $L$ such that we have as many free variables $LU$ as in $A$ ($L$ must be lower triangular and have diagonal entries equal to 1), we recover the LU decomposition. 

```math
\begin{equation}

\begin{bmatrix}
a_{11} & a_{12} & a_{13} \\
a_{21} & a_{22} & a_{23} \\
a_{31} & a_{32} & a_{33} \\
\end{bmatrix} 
=
\begin{bmatrix}
    1 & 0 & 0 \\
    l_{21} & 1 & 0 \\
    l_{31} & l_{32} & {1} \\
\end{bmatrix}
\begin{bmatrix}
u_{11} & u_{12} & u_{13} \\
0 & u_{22} & u_{23} \\
0 & 0 & u_{33} \\
\end{bmatrix} 
\end{equation}
```

There is one small issue with this scheme in that if $a_{11}$ is 0 or just very small, then $u_{11}$ must also be 0, and $LU$ no longer has the same rank as $A$ (which is defined to be a nice invertible square matrix). This presents a contradiction which is easily resolved by multiplying a permutation matrix $P$ to $A$ to get an $a_{11}$ with a nicer value. Multiplication of a permutation matrix from the left can be thought of as simply exchanging the rows of $A$, so this method is sometimes called LU with partial pivoting (only rows) or the LUP decomposition. 

!!! note "Julia's default linear solver `\`"

    In base Julia (and matlab and other languages), solving a linear system is so common, that it has its own infix operator called the left division operator `\` which solves the matrix equation Ax=b for x. Let's test it really quickly. 

    ```julia
    A = rand(5,5) #Random 5 by 5 array
    b = rand(5)
    x = A\b
    @time A*x - b #Should be approximately 0
    ```

    ```julia
    0.000025 seconds (2 allocations: 192 bytes)
    5-element Vector{Float64}:
    -1.1102230246251565e-16
    9.71445146547012e-17
    -4.440892098500626e-16
    1.942890293094024e-16
    1.6653345369377348e-16
    ```

    Under the hood, `\` is what is known as a polyalgorithm. Based off of what type of matrix you give, i.e. is it square, sparse, has certain symmetries, etc it is able to dispatch a "pretty good" algorithm for the job. 

    What algorithm is "pretty good" is actually very relative to your exact use, so you might need to make explicit choices about your algorithm by using packages such as [LinearSolve.jl](http://linearsolve.sciml.ai/stable/solvers/solvers/). Particularly for large systems, in extreme cases, algorithm choice can mean the difference between solving it in hours or seconds. 

    This is why that although you will likely never actually use your own linear solver, it can be helpful to know what different algorithms exist and have some insight as to what they are good at. For instance, that LU decomposition is fastest for small, dense matrices, singular value decomposition and qr algorithm are expensive, but can make up for it in precision, and that iterative methods are great for large systems compared to factorization methods ([from LinearSolver.jl](http://linearsolve.sciml.ai/stable/solvers/solvers/))

# Forward elimination

Our numerical scheme will have three parts. 

1. Compute L and U given A (LU decomposition)
2. Solve Ly = b for y. (forward elimination)
3. Solve Ux = y for x.  (backward elimination)

If we have $LU=A$, then solving $Ax=b$ is just solving $$LUx=b$$.
First solve for $Ux$ with $Ux = L^{-1}b$, then $x$ with $x=U^{-1}L^{-1}b$.

Let's implement forward elimination in Julia first, as it is the easiest. 

```math
\begin{equation}
\begin{bmatrix}
1  & & &\\
l_{21} & 1 & &\\
\vdots & & \ddots\\ 
l_{n1} & l_{n2} & \dots& 1 \\
\end{bmatrix} 
\begin{bmatrix}
y_{1} \\
y_{2}\\
\vdots\\
y_{n} \\
\end{bmatrix} 
=
\begin{bmatrix}
b_{1} \\
b_{2}\\
\vdots \\
b_{n} \\
\end{bmatrix} 

\end{equation}
```

Expand out the matrix multiplication:

$$l_{i1}y_{1}+\dots+l_{i,i-1}y_{i-1} + y_{i}=b_{i}$$

Solve for $y_i$. 

$$y_i = b_i -\sum\limits_{j=1}^{i-1}l_{ij}y_{j}$$

From here we can see $y_i$ is just $b_i$ minus all the previous values of $y_{i-1}$ to $y_{1}$ multiplied by $l_{i,i-1}$ to $l_{i,1}$. You can think of the range $l_{i,i-1}$:$l_{i,1}$ as being just the the values to left of the 1 on the row corresponding to $y_{i}$.

We can adapt this expression into Julia using a for loop. 

```@example 1
function forward_elimination(L,b)
    n = size(L,1)
    y = zeros(n)
    for i in 1:n
        y[i] = b[i] - sum(L[i,j] * y[j] for j=1:i-1; init=0)
    end
    return y
end
```
Breaking the this function down a little:

* `n = size(L,1)` gives us the number of rows along in $L$.
* `y = zeros(n)` initializes an array of zeros. 
* `y[i] = ...` assigns values to this array
* `sum(L[i,j] * y[j] for j=1:i-1; init=0)` uses "generator comprehension" syntax (see [for loops](https://kathesch.github.io/JuliaTutorial.jl/dev/#For-loops)) to model the summation. `init=0` is a keyword argument that tells the sum function to return `0` when its argument is empty which is the case when `i = 1` and `i-1=0`.
* `return y` outputs our filled array `y`.

Let's test the accuracy of this expression by comparing with Julia's `lu` from `LinearAlgebra.jl` and `\`.


```@example 1
using LinearAlgebra

A = rand(5,5)
b = [1.2, -2.3, 5.6, 800, 0.01] # test array ideally covers a variety of numbers
L,U = lu(A, NoPivot()) # with pivoting turned off to make it like our algorithm

L\b - forward_elimination(L,b)
```
We can see the error between `L\b` and `forward_elimination(L,b)` is as close to 0 as machine precision allows. 

When making a numerical algorithm, we go from a mathematical expression to a piece of code. Ideally, that piece of code is initially made quite close to the mathematical expression to make it easy to tweak and debug.

However, there are almost always modifications we want to make to that code to make it much faster or have other desireable design features (such as having a similar interface as other functions in our code base or work with multiple different cases.).

Let's touch up `forward elimination` to make it faster. The biggest change we can make is to remove the unnecessary `y` array. `b[i]` at the current and future iterations is the only information we need. Earlier indices of `b` are essentially just free real estate that we can assign output to. This will make the function a "mutating" one i.e. it modifies an array outside of the function scope (not initialized inside the function). 

Mutation is the source of many computer bugs and headaches in software, but it is well worth it for performance. To make it easier to identify bugs from mutation, the Julia convention is to write a `!` after the function. We therefore have `forward_elimination!`. 

```@example 1
b = [1.2, -2.3, 5.6,4.5,0.01] # hide
function forward_elimination!(L,b)
    n = size(L,1)
    for i in 1:n
        b[i] = b[i] - sum(L[i,j] * b[j] for j=1:i-1; init=0)
    end
    return b
end

L\b - forward_elimination!(L,b)
```

Which give's us the same results as non-mutating `forward_elimination`.

We need to benchmark our results to see if this was actually worth it. And as you can see below, we are getting an almost 3x improvement over Julia's `\` with`forward_elimination`. `forward_elimination!` gives us a 2x improvement on top of that (total 6x)!. 


```@example 1
using BenchmarkTools
@btime L\b
nothing # hide
```
```@example 1
@btime forward_elimination(L,b)
nothing # hide
```
```@example 1
@btime forward_elimination!(L,b)
nothing # hide
```

# Backward elimination

Here we have the backwards elimination equation. 

```math
\begin{equation}
\begin{bmatrix}
u_{11}  & u_{12} & \dots &u_{1n}\\
 & u_{22} & \dots & u_{2n}\\
 & & \ddots & \vdots\\ 
 &  & & u_{nn} \\
\end{bmatrix} 
\begin{bmatrix}
x_{1} \\
x_{2}\\
\vdots\\
x_{n} \\
\end{bmatrix} 
=
\begin{bmatrix}
y_{1} \\
y_{2}\\
\vdots \\
y_{n} \\
\end{bmatrix} 
\end{equation}
```

We can use a similar analysis as forward elimination. Here we have.


$$u_{ii}x_{i}+u_{i,i+1}+\dots+u_{in}x_{n}=y_{i}$$

Solve for $x_{i}$

$$x_i = \frac{1}{u_{ii}}\left(y_i -\sum\limits_{j=1+i}^{n}u_{ij}x_{j}\right)$$

In the expression above, the only notable difference from the previous case we can see are: 

* Because we don't have 1s all along the diagonal, solving for $x_{i}$ gives us a divisor $u_{ii}$
* Limits of the summation are now different because we must sum values along each row *to the right* instead of from the left. 

A naive modification of the forward elimination case might look like this (making the changes above and substituting a few variables to make our notation consistent).

```@example 1
function backward_elimination(U,y)
    n = size(U,1)
    x = zeros(n)
    for i in 1:n
        x[i] = 1/U[i,i]*(y[i] - sum(U[i,j] * x[j] for j=1+i:n; init=0))
    end
    return x
end
nothing # hide
```

We will need to test it to make sure we aren't forgetting anything.

```@example 1
A = rand(5,5)
y = [1.2, -2.3, 5.6,4.5,0.01]
L,U = lu(A, NoPivot())
```

```@example 1
U\y - backward_elimination(U,y)
```

Examining the error of this result from bottom to top, we see that our `backwards_elimination` starts off well, but then gets very confused. 

This is a critical lesson to learn with computational algorithms - mathematical expressions do not always contain all the information we need to translate it to a computer. 

In this case, in our for loop, we were starting from `1` instead of the `n`. Our algorithm was dutifully using our `x` array filled with 0s to compute the long sum for $x_{1}$ instead of starting from the single known case of $x_{n}$ and building up to $x_{1}$.

We can fix this problem, by calling `reverse` on our range for `i`. We could also use `n:-1:1` to do it more like python, but `reverse` is probably a little easier to read. 

```@example 1
y = [1.2, -2.3, 5.6,4.5,0.01] # hide
function backward_elimination(U,y)
    n = size(U,1)
    x = zeros(n)
    for i in reverse(1:n)
        x[i] = (1/U[i,i]) * (y[i] - sum(U[i,j]*x[j] for j=1+i:n; init=0))
    end
    return x
end
nothing #hide
```

```@example 1
y = [1.2, -2.3, 5.6,4.5,0.01] # hide
U\y - backward_elimination(U,y)
```

And let's make similar changes as `forward_elimination!` to yield `backward_elimination!`. This just means replacing `x` and `y` with `b` and removing our allocation of the `x` array. This will give a similar 2x speed improvement over `backward_elimination` and give us a common notation across all our elimination functions with just `b` instead of `x`,`y`,`b`.

```@example 1
function backward_elimination!(U,b)
    n = size(U,1)
    for i in reverse(1:n)
        b[i] = (1/U[i,i]) * (b[i] - sum(U[i,j]*b[j] for j=1+i:n; init=0))
    end
    return b
end
nothing # hide
```

Our error is just machine precision.
```@example 1
y = [1.2, -2.3, 5.6,4.5,0.01] # hide
U\y - backward_elimination!(U,y)
```

# LU decomposition

We can finally make the LU decomposition. This can be viewed as solving for the zeros of polynomial equation $LU-A=0$ with arbitrary constants $a_{ij}$. 


```math
\begin{equation}
\left(
\begin{array}{cccc}
 u_{11}-a_{11} & u_{12}-a_{12} & \dots & u_{1m}-a_{1m} \\
 l_{21} u_{11}-a_{21} & l_{21} u_{12}+u_{22}-a_{22} &  & l_{21} u_{1m}+u_{2m}-a_{2m} \\
 \vdots &  & \ddots & \vdots \\
 l_{n1} u_{11}-a_{n1} & l_{n1} u_{12}+l_{n2} u_{22}-a_{n2} & \dots & l_{n1} u_{1m}+l_{n2} u_{2m}+\dots+l_{n,m-1}u_{n-1,m} + u_{nm}-a_{nm} \\
\end{array}
\right)
\end{equation}
```

It is a little funny that one of the simplest ways of solving a general linear system is actually to first solve a polynomial system. Polynomial/nonlinear systems hiding behind "simple" algorithms is a very common theme in applied math and computer science.

One possible explanation for the flexibility and ubiquitousness of linear system solvers being at the heart of so many problems such linear regression, newton's method, physics inverse problems, etc is the solvers for them already come prepackaged with sophisticated math. 

Okay, but how do we actually solve that monster? It isn't too different from our treatment of `forward elimination` and `backward elimination`. Except instead of using 1 element that we know (either the first or last) and "growing" the solution, we use the entire first row. 


There are three parts to this system of equations.

1. The first row is very nice. We know all values $a_{ij}$ and $a_{1j} = u_{1j}$. So we now know all values $u_{1,j}$. 
2. The next easiest area is the first column. It has only one variable we don't know yet which is $l_{i1}$. Solving for it we get $l_{i1} = \frac{a_{i1}}{u_{11}}$
3. Finally, since we have the first column and the first row, we can see the only unknown in the second column is $l_{i2}$. 

This suggests it is possible to build out the matrix column-by-column from the left.

Let's write a program for this. Notice that since the only overlap of the L and U matrices is on the diagonal, and we know the diagonal values of $L$ are 1 - we lose nothing by storing all our values in the original matrix.

```@example 1
function lu_decomposition!(A)
    n = size(A,1)
    for j in 1:n #loop every column
        for i in j+1:n #every row below the jth
            A[i,j] = A[i,j]/A[j,j]
            for k in j+1:n #adding ij/jk terms to the rest of the row to the right of A[i,j]
                A[i,k] = A[i,k] - A[i,j]*A[j,k]
            end
        end
    end

    return A
end
nothing # hide
```

Testing this to see that it generates the correct behaviors.

```@example 1
A = rand(5,5)
l,u = lu(A, NoPivot())
```

```@example 1
lu_decomposition!(A)
```
# Putting it all together as a linear Solver

We have all the pieces of the puzzle for a linear solver! Since all of our functions are mutating, we just have to list them in the three steps outlined at the beginning. 

```@example 1
function linear_solve!(A,b)
    lu_decomposition!(A)
    forward_elimination!(A,b)
    backward_elimination!(A,b)

    return b
end
nothing # hide
```

```@example 1
A = rand(5,5)
b = rand(5)

# Error is just machine precision
A\b - linear_solve!(A,b)
```

```@example 1
using BenchmarkTools

@btime A\b
nothing # hide
```

```@example 1
@btime linear_solve!(A,b)
nothing # hide
```

Our solver is ~3x faster than Base Julia's! This is mostly because we don't have to check for the best algorithm and `\` must allocate some memory. Still really great though!  