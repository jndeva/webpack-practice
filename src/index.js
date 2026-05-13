import "./style.css";
import { moduleOne } from "./pages/moduleOne.js"
import { moduleTwo } from "./pages/moduleTwo.js";
import { moduleThree } from "./pages/moduleThree.js";

const nav = () => {
    const modules = document.querySelectorAll("button")

    modules.forEach(module => {
        module.addEventListener("click", (e) => {
            e.target.textContent === "Module 1" ? moduleOne() :
                e.target.textContent === "Module 2" ? moduleTwo() : moduleThree()

            nav()
        })
    })
}

moduleOne()
nav()