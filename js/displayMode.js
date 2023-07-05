"use strict"

console.log("Light or Dark Mode")

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
    console.log(darkMode)
    saveMode()
}

function enterLightMode(){
    let body = document.body
    let button = document.getElementById("lightButton")
    body.classList.remove("dark")
    body.classList.add("light")
    button.setAttribute("checked", "checked")
    darkMode = false
    console.log(darkMode)
    saveMode()
}

function saveMode(){
    let mode = JSON.stringify(darkMode)
    localStorage.setItem("displayMode", mode)
}

function pageLoad(){
    let storedMode = JSON.parse(localStorage.getItem("displayMode"))
    if (storedMode === null){
        console.log("null")
        return
    } else if (storedMode === false){
        console.log("light")
        enterLightMode()
    } else if (storedMode === true){
        console.log("dark")
        enterDarkMode()
    }
}

pageLoad()