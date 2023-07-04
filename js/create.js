"use strict"

console.log("create js")

const storyForm = document.getElementById("storyForm")
console.log("here?")
// const addNewStoryInputs = document.getElementById("")
const currentStoryInputs = document.getElementById("currentStoryInputs")
let savedInput = JSON.parse(localStorage.getItem("currentStoryInputs"))
console.log(savedInput)



let storyInput = []
console.log("current input " + storyInput)

function Story(mainType, mainName, //friendType, friendName, home, game, dinner, dessert, bedtime
){
    this.mainType = mainType
    this.mainName = mainName;
    // this.friendType = friendType;
    // this.friendName = friendName;
    // this.home = home;
    // this.game = game;
    // this.dinner = dinner;
    // this.dessert = dessert;
    // this.bedtime = bedtime;
    // this.abjectiveHome = ["messy", "clean"]
    // this.abjectiveDay = ["fun", "exciting"]
    // this.randomDoorOrPhone = ["door", "phone"]
    this.render = function(){  

        const h3StoryInputs = document.createElement("h3");
        h3StoryInputs.textContent = "Current story ideas"
        currentStoryInputs.appendChild(h3StoryInputs)

        const ulStoryInputs = document.createElement("ul");
        currentStoryInputs.appendChild(ulStoryInputs)

        const currentMainType = document.createElement("li");
        currentMainType.textContent = "Main Character is a " + this.mainType;
        ulStoryInputs.appendChild(currentMainType)

        const currentMainName = document.createElement("li");
        currentMainName.textContent = "Main Character's name is " + this.mainName;
        ulStoryInputs.appendChild(currentMainName)
    }
}

storyForm.addEventListener("submit", function(event){
    console.log("New Story Inputs");
    event.preventDefault()
    const mainType = event.target.mainType.value;
    const mainName = event.target.mainName.value;
    // const friendType = event.target.friendType.value;
    // const friendName = event.target.friendName.value;
    // const home = event.target.home.value;
    // const game = event.target.game.value;
    // const dinner = event.target.dinner.value;
    // const dessert = event.target.dessert.value;
    // const bedtime = event.target.bedtime.value;

    const newStory = new Story(mainType, mainName, //friendType, friendName, home, game, dinner, dessert, bedtime
    )
    console.log("Here" + newStory)
    removeSavedInput()

    newStory.render()

    storyInput = newStory

    localStorage.setItem("currentStoryInputs", JSON.stringify(storyInput))

})


if (savedInput){
    console.log("There is saved data")
    savedInput.render = function(){
        const h3StoryInputs = document.createElement("h3");
        h3StoryInputs.textContent = "Current story ideas"
        h3StoryInputs.setAttribute("id", "savedInput")
        currentStoryInputs.appendChild(h3StoryInputs)

        const ulStoryInputs = document.createElement("ul");
        ulStoryInputs.setAttribute("id", "savedInput")
        currentStoryInputs.appendChild(ulStoryInputs)

        const currentMainType = document.createElement("li");
        currentMainType.setAttribute("id", "savedInput")
        currentMainType.textContent = "Main Character is a " + this.mainType;
        ulStoryInputs.appendChild(currentMainType)

        const currentMainName = document.createElement("li");
        currentMainName.setAttribute("id", "savedInput")
        currentMainName.textContent = "Main Character's name is " + this.mainName;
        ulStoryInputs.appendChild(currentMainName)
    }
    savedInput.render()
} 

function removeSavedInput(){
    console.log("remove running")
    while(document.getElementById("savedInput")){
        document.getElementById("savedInput").remove()
        console.log("removing savedInput")
    }
}

// removeSavedInput()


