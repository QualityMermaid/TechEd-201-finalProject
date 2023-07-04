"use strict"

console.log("create js")

const storyForm = document.getElementById("storyForm")
console.log("here?")
// const addNewStoryInputs = document.getElementById("")
const currentStoryInputs = document.getElementById("currentStoryInputs")
// console.log(currentStoryInputs)


const storyInput = []
// console.log(storyInput)



storyForm.addEventListener("submit", function(event){
    console.log("New Story Inputs");
    // event.preventDefault()
    const mainType = event.target.mainType.value;
    // const mainName = event.target.mainName.value;
    // const friendType = event.target.friendType.value;
    // const friendName = event.target.friendName.value;
    // const home = event.target.home.value;
    // const game = event.target.game.value;
    // const dinner = event.target.dinner.value;
    // const dessert = event.target.dessert.value;
    // const bedtime = event.target.bedtime.value;
    // console.log(event)

    const newStoryInput = new Story(mainType, mainName, friendType, friendName, home, game, dinner, dessert, bedtime)
    // console.log(newStoryInput + "Here")
    storyInput.push(newStoryInput)
    console.log(storyInput)
    storyForm.reset()
    newStoryInput.render()
    localStorage.setItem("lsStory", JSON.stringify(storyInput))

})

function Story(mainType, //mainName, friendType, friendName, home, game, dinner, dessert, bedtime
){
    console.log("Creating new story")
    this.mainType = mainType;
    // this.mainName = mainName;
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

    // this.pushStory = function(){
    //     storyInput.push[this]
    // }
    // this.pushStory()
    // console.log(storyInput)
}

// Story.prototype.render = function(){
//     const ul = document.createElement("ul")
//     currentStoryInputs.appendChild("ul")
    
//     const li = document.createElement("li")
//     ul.appendChild(li)
// }