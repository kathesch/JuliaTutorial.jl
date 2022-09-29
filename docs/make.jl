using Documenter
using JuliaTutorial
using Plots, BenchmarkTools, LinearAlgebra

makedocs(
    sitename = "JuliaTutorial",
    format = Documenter.HTML(),
    modules = [JuliaTutorial]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/kathesch/JuliaTutorial.jl.git"
)
