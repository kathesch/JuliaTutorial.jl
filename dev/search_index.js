var documenterSearchIndex = {"docs":
[{"location":"#Numerical-methods-in-Julia-tutorial","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"","category":"section"},{"location":"#Introduction","page":"Numerical methods in Julia tutorial","title":"Introduction","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Welcome to JuliaTutorial.jl! The aim of this page is to get you quickly started with the Julia programming language.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"I think Julia is perhaps the most productive gateway to the world of numerical methods for scientific computing, and I hope this can be a self-contained resource to get you started with Julia, its ecosystem, and exploring numerical methods.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: What is Julia and why should you learn it\nJulia is a scientific programming language comparable to python, matlab, fortran, and R. It was originally created in 2012 by Jeff Bezanson, Stefan Karpinski, Viral Shah (and others) in the MIT Computational Science and Aritifical Intelligence Lab (CSAIL) as an open source project. Since then, the language has amassed 8000 officially registered packages and become a dominant language for instruction and research in applied math departments at several top research universities, notably MIT and Stanford[]. The Julia community is still small compared to python, but in its niche of numerical computing, it is already very well established. The primary purpose for creating Julia was solving the \"two language problem\". This is where a scientific programmer implementing complex algorithms in high-level/abstract languages (commonly python) must then convert or interface this code to a low-level/systems language (commonly C++/fortran) in order to get efficient performance. Practically speaking, the two language problem means scientists must use C++/fortran (with all their many headaches) to get high performance software or else hope that someone else wrote something relevant in C++/fortran and made a convenient python interface for it such as numpy or scipy.Julia has arguably solved this problem through JIT (just-in-time) compilation along with host of other design decisions which enable a python-like syntax, but with the capability of C++/fortran speeds. This means we can make, for instance, a linear algebra package in pure Julia and have it run as fast (or sometimes faster) than C++/fortran ones such as openBLAS.This does come at the cost - mostly in added precompilation time when a function is first called. But I believe it is well worth it for most use cases in scientific computing. ","category":"page"},{"location":"#Installation","page":"Numerical methods in Julia tutorial","title":"Installation","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Julia can be installed from its official download page.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"It can also be installed via homebrew (on macs) by pasting the following command into a terminal. This command will install the current stable release (currently 1.8.1).","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"brew install --cask julia","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Simply typing julia in a terminal to open a Julia REPL (read-evaluate-print-loop) session. You can use the REPL to evaluate simple Julia expression, manage Julia packages, run shell commands, and access documentation. Additionally, you can run a Julia file in you active directory by typing julia my_julia_program.jl. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Let's open a julia REPL and type print(\"hello world\").","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"~ % julia\n               _\n   _       _ _(_)_     |  Documentation: https://docs.julialang.org\n  (_)     | (_) (_)    |\n   _ _   _| |_  __ _   |  Type \"?\" for help, \"]?\" for Pkg help.\n  | | | | | | |/ _` |  |\n  | | |_| | | | (_| |  |  Version 1.8.1 (2022-09-06)\n _/ |\\__'_|_|_|\\__'_|  |  Official https://julialang.org/ release\n|__/                   |\n\njulia> print(\"hello world\")\nhello world","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"The REPL is a great interface for using Julia quickly (to make a fast plot, overview your packages, or do a small calculation), but we will need a robust IDE (Integrated Development Environment) to write more complex code. There are many IDE's for various programming languages including Julia, but the easiest and most fully featured one for Julia is VS Code which we will install in the next section. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: On Julia versions\nJulia, like most actively used software, is under a constant state of development. This means you will find various older and newer versions of Julia out in the wild. These versions are distinguished by a version number, for example, 1.8.1 or 0.7.2. This release scheme is very common in open source software (know as the semantic versioning specification). The first number indicates a major release. For Julia this was the 1.0.0 release in 2018. 1.0.0 is considered a major milestone for open source development as it typically represents a commitment to major design decisions in the software and a certain amount of stability to what its interface looks like.The following two numbers are respectively a minor release and patch number. Minor releases are usually every 4-5 months. And patches are released as needed. You can read more about Julia's release process here.Typically, Julia code written for 1.0.0 will work if run by later versions of Julia (this is known as backwards compatability). However code written for a newer Julia version cannot be assumed to run on an earlier Julia version i.e. it is not forward compatible. This is usually because it incorporates language features which are not parseable by earlier Julia versions.Practically speaking, if you keep Julia updated to the current stable release, you won't run into version issues, but if you find yourself needing to use many different versions of Julia, for instance, if you want to test the latest releases or want to use a very old package, you can use the juliaup tool to conveniently manage many different Julia versions. ","category":"page"},{"location":"#Using-Julia-in-VS-Code","page":"Numerical methods in Julia tutorial","title":"Using Julia in VS Code","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"VS Code can be installed from its official download page.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"It can also be installed via homebrew (on macs).","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"brew install --cask visual-studio-code","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"You can then open VS Code by typing code into a terminal. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"The Julia extension can be install by clicking the following extension button in the upper left of VS Code.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"(Image: )","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Search for \"julia\", and then click the blue install button. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"    <img src=\"2022-09-26-15-00-34.png\" width=200/>","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Next, let's make a .jl file to edit. Click new file.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"<img src=\"2022-09-26-15-31-34.png\" width=200/>","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"And select Julia File to initialize a blank Julia file.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"<img src=\"2022-09-26-15-37-07.png\" width=400/>","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Finally, let's open up a REPL inside of VS Code (called the integrated terminal) using the default hotkey ctrl + J + O.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Congratulations! We are now set-up for working with Julia. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"<img src=\"2022-09-26-15-43-27.png\" width=400/>","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: About VS Code\nVS Code is designed to be a highly customizable, general purpose IDE which can work with just about any programming languages. It's most powerful features for Julia programming are:An \"extension marketplace\" where you can install extensions to the IDE which give it support for various programming languages, color schemes and syntax highlighting, quality of life tools, and many others. \nGit integration which lets you quickly and seamlessly push commits to a remote git repository.\nRemote development support which lets you develop and run code on other computers with nearly exactly the same workflow as your local machine. This is very convenient for working on cloud computing tools like AWS's EC2 as well as more traditional high performance computing infrastructure.","category":"page"},{"location":"#Writing-simple-Julia-programs","page":"Numerical methods in Julia tutorial","title":"Writing simple Julia programs","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Type 1+1 into the editor window in VS Code and press shift + enter to execute the line your cursor is on (or execute multiple lines if you have them highlighted). By default, it will print an \"inline result\" next to the code as well as in the REPL session below your editor. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"(Image: )","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"This lends itself to an interactive workflow much like a jupyter notebook. This is the most basic workflow and suitable for writing scripts and exploring data, but if you are doing package development with unit tests and more complicated environments you will want to look at Revise.jl.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Resources for learning Julia syntax\nWhile this tutorial is meant to be a self-contained introduction to using the Julia language, I can't realistically guide you through all the in's and out's of its syntax. Here are a list of references in order of increasing time commitment which will be useful to you to pick up the syntax and bridge it with your existing knowledge of python. matlab-python-julia cheatsheet - Quick way to see syntax differences between python and Julia for common operations\nThe Fast Track to Julia - Overview of the Julia language in one page\nOfficial Julia languages documentation - Comprehensive overview of the entire language\nJulia for Talented Amateurs - Extensive youtube channel with tutorials on most parts of the language, data analysis, GPU computing, etc. Also, many great memes. ","category":"page"},{"location":"#The-Julia-package-manager","page":"Numerical methods in Julia tutorial","title":"The Julia package manager","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Julia packages such as DifferentialEquations.jl or Plots.jl are collections of functions which can be imported to provide additional functionality to your Julia program. They are equivalent to libraries in other languages, for instance, python's numpy and Julia's LinearAlgebra.jl provide similar functionality. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"The Julia package manager, Pkg.jl, is itself a package, and it lets us import packages from various locations on the internet and manage them. It is essentially python's pyp and conda/venv all in one. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"We can access Pkg.jl in two ways. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"This is the less common way, but it can be accessed like any Julia package by typing using Pkg in either your editor window (with shift+enter) or the REPL. You can then import other packages (here Plots.jl) by typing Pkg.add(\"Plots.jl\"). This will download Plots.jl from its official github repo to your ~/.julia/packages folder and updates your project.toml file in .julia/environments/1.8 which contains the default v1.8 environment. You can then access Plots.jl functions at any time by running using Plots.jl in Julia. \nThe more common way is using the built in REPL interface. Type ] into your REPL window. The julia> prompt will change into (@v1.8) pkg> indicating it now accepts Pkg.jl functions (use backspace to return to julia>). We can type add Plots to do the same thing we did above. In addition to add you can also remove/rm packages, list all your current packages with status/st, or run unit tests for the package test Plots.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Accessing documentation and shell commands from the REPL\nPkg.jl is not the only tool with a nice REPL interface. We can access the documentation for a function or function call by typing ? which will change julia> into a help?> prompt. Copy and paste code you want to know more about there to get its docstring, examples, and often a list of similar functions. Try pasting print(\"help me!\") into it.Shell commands can also be called from the Julia REPL by typing ; to get shell>. Typical shell commands like ls or cd work here exactly as they do in an external terminal.","category":"page"},{"location":"#Plotting","page":"Numerical methods in Julia tutorial","title":"Plotting","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Creating plots is perhaps the most fundamental thing you can do in scientific computing and it is also probably the quickest and most fun way to learn Julia.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"To make a plot in Julia, run the following. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"using Plots\nplot(sin)","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"We can also call plot on an array. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"plot([1,2,4,2,5])","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Or put one plot on top of another by calling plot!. In Julia, it is convention to put a \"!\" after a function which modifies data. In this case, plot!([1,2,4,2,5]) writes over our previous plot(sin).","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"plot(sin)\nplot!([1,2,4,2,5])","category":"page"},{"location":"#Understanding-the-plot-function-call","page":"Numerical methods in Julia tutorial","title":"Understanding the plot function call","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Let's take a minute to unpack the function call plot(sin). The function plot is explicitly exported from the \"Plots.jl\" package, so we do not need to write Plots.plot to specify it (though we would if we if we were working with several different plotting packages at once).","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"This function consists of many \"sub-functions\" known as \"methods\" which are specialized to different arguments for the function. When you call the function plot(sin), Julia sees that you called plot on a single argument sin of type Function (functions are treated as just another data type in Julia such as Int64, FLoat64, etc). It can then use a method of plot which calls the function sin on a few values (here -5 to 5) which serve as the values on the x-axis. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"In contrast, plot([1,2,4,2,5]) uses a slightly different method where it generates (x,y) coordinates based off of the index of the value in the array and the actual value of the array respectively.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"It is worth pointing out here that unlike python and many other programming languages, Julia has 1-based arrays meaning the first index is 1 not 0 which is why you see the array plotted as 1 to 5 on the x-axis. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Multiple dispatch and polymorphism\nBeing able to infer what method to call based on the types of arguments is known as \"multiple  dispatch\" and it is the core design feature of the Julia language. It let's us have a ton of flexibility in a single function call such as plot. The rough equivalent of multiple dispatch in other languages is function overloading (in C/C++) or objects in object oriented language (such as python and C++). The main purpose of multiple dispatch or object-oriented development is to create \"polymorphism\" in our program.Without using polymorphism we would be forced to write an ugly interface like plot_array and plot_function which would be extremely difficult for anyone to remember, and if we wanted to change anything about how we plot in general, we'd have to rewrite the code for every single one of such functions.","category":"page"},{"location":"#Making-animations-with-a-few-important-language-features","page":"Numerical methods in Julia tutorial","title":"Making animations with a few important language features","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"It is also possible to make simple animations in Plots.jl.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Let's make a sine wave which translates itself to the right. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"@gif for t in 0:0.5:6\n    plot(x->sin(x-t))\nend","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"There is a lot of syntax to unpack here, but I think it introduces a lot of important language features of Julia.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"@gif is a \"macro\"\nfor t in 0:0.5:6...end is a \"for loop\"\nx->sin(x-t) is an \"anonymous function\" or \"lambda\"","category":"page"},{"location":"#Macros","page":"Numerical methods in Julia tutorial","title":"Macros","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Macros can be thought of as a generalization of the idea of a function.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"A function takes arguments which are various data types for instance sin takes in types of Number such as Int64, Float64, etc and gives you a value you would associate with sin from its mathematical definition.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"But instead of taking normal data types like Int64, a macro takes a piece of Julia code as an argument. This is an example of what is known as \"metaprogramming\". In this case, @gif uses our for loop with a plot call inside as a recipe to make an animation. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"You will likely rarely write these, but you will encounter and use them everywhere in the Julia ecosystem. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"The most useful macro in Base Julia is @time which will time the code after it. Just a function, you can read the documentation for a macro by using ?@time in a REPL. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"@time sin(pi/2)\nnothing # hide","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Benchmarking\nBenchmarktools.jl has a more advanced version @btime which gives you more information than @time.julia> @btime sin(pi/2)\n1.167 ns (0 allocations: 0 bytes)BenchmarkTools.jl also allows you to profile code with @benchmark.  Here @benchmark runs code repeatedly and collects statistics on its performance. We can chain macros together, so lets add @time to check how long it to took get these statistics (you can see the @time result at the top).>julia @time @benchmark plot(sin)\n10.841423 seconds (247.36 M allocations: 5.504 GiB, 10.66% gc time, 0.31% compilation time)\nBenchmarkTools.Trial: 5812 samples with 1 evaluation.\nRange (min … max):  786.833 μs …   6.679 ms  ┊ GC (min … max): 0.00% … 80.84%\nTime  (median):     805.958 μs               ┊ GC (median):    0.00%\nTime  (mean ± σ):   858.419 μs ± 416.177 μs  ┊ GC (mean ± σ):  3.84% ±  6.87%\n\n██▆▄▃▃▂▂▁▁ ▁▁                                                 ▁\n██████████████▇▇▇▇▆▆▆▅▅▅▄▄▅▃▅▁▃▄▄▃▁▁▃▁▃▁▃▁▄▁▁▃▃▁▁▁▃▁▁▁▁▁▁▁▃▁▃ █\n787 μs        Histogram: log(frequency) by time        1.6 ms <\n\nMemory estimate: 497.41 KiB, allocs estimate: 21325.","category":"page"},{"location":"#For-loops","page":"Numerical methods in Julia tutorial","title":"For loops","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Most programming languages have constructions called \"for loops\" which allow execution of code repeatedly. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"In Julia the typical syntax is for i in Iterators...end. Note \"white space\" is not as important in Julia as it is in python for i in 1:5 end is a valid loop in Julia. This is the fastest and most flexible way of making a for loop and is therefore the most commonly used for writing numerical methods.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"i is the index variable and takes on the value of every element in \"Iterator\". Iterators are any data structure with many elements and an a ordering such as arrays, strings, and ranges. Here 1:5 is of type Range. We could also specify 1:2:5 to count by 2's or range(0,2pi,length=5) to go from 0 to 2pi in 5 steps.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"for i in 1:5\n    print(i)\nend\nnothing # hide","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Other common patterns for making for loops\nThere are 3 other patterns for making for loops you will see in Julia (and other languages). These are typically used as a convenient syntax for applying some function element-wise to an array and returning the resulting array which is normally a little awkward to do with the usual for loop syntax. A \"list comprehension\". Very often we want to use a for loop to actually return an array for us rather than just loop through something. List comprehensions provide a nice syntax for this operation.julia> [sin(i) for i in 1:3]\n3-element Vector{Float64}:\n0.8414709848078965\n0.9092974268256817\n0.1411200080598672\"Vectorized functions\" provide another fast syntax for applying a function to an iterator and returning an array. Simply put a . after the function to make it apply to every element in an array. For [infix(https://en.wikipedia.org/wiki/Infix_notation) operators] such as + you can put it before the operator such as [1:3] .+ [1:3] or .+(1:3,1:3).    sin.(1:3)\n3-element Vector{Float64}:\n0.8414709848078965\n0.9092974268256817\n0.1411200080598672The map function is yet another common way to apply a function to every element in an iterator.  julia> map(sin, 1:3)\n3-element Vector{Float64}:\n0.8414709848078965\n0.9092974268256817\n0.1411200080598672","category":"page"},{"location":"#Anonymous-functions","page":"Numerical methods in Julia tutorial","title":"Anonymous functions","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"In many cases, we will want to define small functions that are essentially only used once in a program. Rather than clutter everything up with their definitions, we can use anonymous functions also sometimes called \"lambdas\".","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"These are written like x->sin(x) or (x,t)->sin(x-t) for multiple arguments.  Compare with python lambda x: sin(x).","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"By putting them in parentheses, we can call them like a normal function. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"julia> (x->sin(x))(pi/2) == sin(pi/2)\ntrue","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"note: Piping functions with |>\nAnonymous functions are very useful if you have many functions you want to nest together. For instance, instead of writing something like:f(x,y) = plot(sin(cos(atan(y/x)+2)^2)or equivalentlyn = cos(atan(y/x)+2)^2\nb = sin(n)\np = plot(b)We can get rid of a lot of parentheses by using a pipe operator |> which sends the output of the argument before it to the argument after it. This can often be much more readable. f(x,y) = atan(y/x) |> _->cos(_+2)^2 |> sin |> plot","category":"page"},{"location":"#The-Julia-ecosystem","page":"Numerical methods in Julia tutorial","title":"The Julia ecosystem","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"The Julia ecosystem has ~8000 packages in the official registry. These can be viewed and searched on JuliaHub, and any one can be imported through Pkj.jl add. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"I think one good informal place to start to get a feel for the scope of the current Julia community and its ecosystem is by looking at the playlist of presentations for JuliaCon 2022. We can see a strong focus primarily in applied mathematics, GPU and distributed computing, physics, economics, teaching, and statistics/data science. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Here is also a lineup of some notable packages that physical chemistry people might be interested in. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Scientific Computing","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"SciML: This is a huge, unified ecosystem for doing scientific machine learning. Its documentation splash page is also a good place to discover scientific computing packages both in and outside its framework. \nDifferentialEquations.jl: The most notable member of the SciML ecosystem and probably the most comprehensive framework for numerically solving ordinary differential equations out there. \nFlux.jl: This is the main framework for machine learning in Julia and provide similar functionality to python's PyTorch. Compared to python machine learning frameworks, it is extremely lightweight and explicit. In fact, Flux.jl's documentation describes how you could have built Flux.jl yourself by simply making convenience functions for regressions using automatic differentiation. \nZygote.jl: Julia's main automatic differentiation package and is what powers Flux.jl. It has a similar lightweight/explict design philosophy. The book Numerical Methods for Scientific Computing has a great tutorial on how to build an automatic differentiation tool in Julia similar to Zygote.","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Plotting","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Plots.jl: The jack-of-all-trades standard plotting package. Has many backends and a simple syntax to make quick and dirty plots.\nMakie.jl: An extremely flexible GPU powered plotting package. Can make nice statistical plots and also interactive interfaces for \"plots\" which are borderline simple video games. \nGadfly.jl: Specialized for making really clean, composable statistical plots. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Computer Algebra Systems","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"MathLink.jl: Wolfram Mathematica has a completely free and lightly licensed version known as WolframEngine (can easily install it with brew). You can use it independently, but this is a really excellent interface in Julia that can bridge the gap between computational and analytic methods though at some performance cost. \nSymbolics.jl: The pure Julia equivalent of Mathematica. It is not as user friendly or flexible as Mathematica particuarly with symbolic integration, but it is much faster and support auto-differentiation. \nMetaTheory.jl: The backend for Symbolics.jl. You can define generic relationships between data structure in an abstract algebra-y way such as introducing an identity operation or a distributive property. It can then use Julia's metaprogramming interface and a concept known as E-graph saturation to simplify expressions of these structures. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Quantum","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Quantum Optics.jl: This is the biggest quantum package in the Julia ecosystem and similar to python's QuTip.\nOpenQuantumTools.jl: Contains performant solvers, mostly using DifferentialEquations.jl for working with open quantum systems. ","category":"page"},{"location":"#Making-a-linear-solver-with-LU-decomposition","page":"Numerical methods in Julia tutorial","title":"Making a linear solver with LU decomposition","text":"","category":"section"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"Let's write our first numerical algorithm!","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"There are many candidates for a \"hello world\" numerical algorithm, for instance forward/backward euler methods, but I think LU decomposition is perhaps the most fundamental and instructive. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"LU decomposition, despite its modern name, has a long history. It can be thought of as simply gaussian elimination (only popularized by Gauss - Newton invented it in the West). This technique was first documented by Chinese mathematicians in AD 179 who used a unique form of computational tool known as rod calculus to execute the algorithm. ","category":"page"},{"location":"","page":"Numerical methods in Julia tutorial","title":"Numerical methods in Julia tutorial","text":"This was one of the earliest formal uses of something like a computer algorithm as well as solving a linear system of equations, an ubiquitous task in scientific computing. In base Julia (and matlab and other languages), solving a linear system is so common, that it has its own infix operators called the left division operator \\ which solves the matrix equation Ax=b for x by A\\b=x. ","category":"page"}]
}
