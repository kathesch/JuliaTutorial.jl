using Documenter
using JuliaTutorial
using Plots, BenchmarkTools, LinearAlgebra

makedocs(
    sitename = "JuliaTutorial.jl",
    format = Documenter.HTML(),
    modules = [JuliaTutorial],
    pages = [
        "Learning Julia" => "index.md",
        "LU Decomposition Example" => "ludecomposition.md"
        ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/kathesch/JuliaTutorial.jl.git"
)
