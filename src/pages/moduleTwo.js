const moduleTwo = () => {
    const container = document.querySelector("#content")
    container.textContent = ""

    const module = document.createElement("p")
    module.textContent = "Module #2"
    module.classList.add("module")

    container.appendChild(module)
}

export { moduleTwo }