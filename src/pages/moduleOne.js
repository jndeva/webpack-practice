const moduleOne = () => {
    const container = document.querySelector("#content")
    container.textContent = ""

    const module = document.createElement("p")
    module.textContent = "Module #1"
    module.classList.add("module")

    container.appendChild(module)
}

export { moduleOne }