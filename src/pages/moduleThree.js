const moduleThree = () => {
    const container = document.querySelector("#content")
    container.textContent = ""

    const module = document.createElement("p")
    module.textContent = "Module #3"
    module.classList.add("module")

    container.appendChild(module)
}

export { moduleThree }