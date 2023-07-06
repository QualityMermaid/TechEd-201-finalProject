"use strict"

console.log("Using Dark Mode or not")

let darkMode = false

document.getElementById("darkButton").addEventListener("click", enterDarkMode)
document.getElementById("lightButton").addEventListener("click", enterLightMode)

function enterDarkMode(){
    let body = document.body
    let button = document.getElementById("darkButton")
    body.classList.remove("light")
    body.classList.add("dark")
    button.setAttribute("checked", "checked")
    darkMode = true
    saveMode()
}

function enterLightMode(){
    let body = document.body
    let button = document.getElementById("lightButton")
    body.classList.remove("dark")
    body.classList.add("light")
    button.setAttribute("checked", "checked")
    darkMode = false
    saveMode()
}

function saveMode(){
    let mode = JSON.stringify(darkMode)
    localStorage.setItem("displayMode", mode)
}

function pageLoad(){
    let storedMode = JSON.parse(localStorage.getItem("displayMode"))
    if (storedMode === null){
        return
    } else if (storedMode === false){
        enterLightMode()
    } else if (storedMode === true){
        enterDarkMode()
    }
}

pageLoad()