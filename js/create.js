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

function Story(mainType, mainName,friendType, friendName, home, game, dinner, dessert, bedtime){
    this.mainType = mainType
    this.mainName = mainName;
    this.friendType = friendType;
    this.friendName = friendName;
    this.home = home;
    this.game = game;
    this.dinner = dinner;
    this.dessert = dessert;
    this.bedtime = bedtime;
    this.abjectiveHome = ["messy", "clean"]
    this.abjectiveDay = ["fun", "exciting"]
    this.randomDoorOrPhone = ["door", "phone"]

    this.render = function(){  

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

        const friendType = document.createElement("li");
        friendType.setAttribute("id", "savedInput")
        friendType.textContent = "Friend is a " + this.friendType;
        ulStoryInputs.appendChild(friendType)

        const friendName = document.createElement("li");
        friendName.setAttribute("id", "savedInput")
        friendName.textContent = "Friend's name is " + this.friendName;
        ulStoryInputs.appendChild(friendName)

        const home = document.createElement("li");
        home.setAttribute("id", "savedInput")
        home.textContent = "Main Character lives in a  " + this.home;
        ulStoryInputs.appendChild(home)

        const game = document.createElement("li");
        game.setAttribute("id", "savedInput")
        game.textContent = "Games they play are " + this.game;
        ulStoryInputs.appendChild(game)

        const dinner = document.createElement("li");
        dinner.setAttribute("id", "savedInput")
        dinner.textContent = "Dinner can be " + this.dinner;
        ulStoryInputs.appendChild(dinner)

        const dessert = document.createElement("li");
        dessert.setAttribute("id", "savedInput")
        dessert.textContent = "Dessert can be " + this.dessert;
        ulStoryInputs.appendChild(dessert)

        const bedtime = document.createElement("li");
        bedtime.setAttribute("id", "savedInput")
        bedtime.textContent = "Bedtime is " + this.bedtime + "pm";
        ulStoryInputs.appendChild(bedtime)
    }
}

storyForm.addEventListener("submit", function(event){
    console.log("New Story Inputs");
    event.preventDefault()
    const mainType = event.target.mainType.value;
    const mainName = event.target.mainName.value;
    const friendType = event.target.friendType.value;
    const friendName = event.target.friendName.value;
    const home = event.target.home.value;
    const game = event.target.game.value;
    const dinner = event.target.dinner.value;
    const dessert = event.target.dessert.value;
    const bedtime = event.target.bedtime.value;

    const newStory = new Story(mainType, mainName, friendType, friendName, home, game, dinner, dessert, bedtime)
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

        const friendType = document.createElement("li");
        friendType.setAttribute("id", "savedInput")
        friendType.textContent = "Friend is a " + this.friendType;
        ulStoryInputs.appendChild(friendType)

        const friendName = document.createElement("li");
        friendName.setAttribute("id", "savedInput")
        friendName.textContent = "Friend's name is " + this.friendName;
        ulStoryInputs.appendChild(friendName)

        const home = document.createElement("li");
        home.setAttribute("id", "savedInput")
        home.textContent = "Main Character lives in a  " + this.home;
        ulStoryInputs.appendChild(home)

        const game = document.createElement("li");
        game.setAttribute("id", "savedInput")
        game.textContent = "Games they play are " + this.game;
        ulStoryInputs.appendChild(game)

        const dinner = document.createElement("li");
        dinner.setAttribute("id", "savedInput")
        dinner.textContent = "Dinner can be " + this.dinner;
        ulStoryInputs.appendChild(dinner)

        const dessert = document.createElement("li");
        dessert.setAttribute("id", "savedInput")
        dessert.textContent = "Dessert can be " + this.dessert;
        ulStoryInputs.appendChild(dessert)

        const bedtime = document.createElement("li");
        bedtime.setAttribute("id", "savedInput")
        bedtime.textContent = "Bedtime is " + this.bedtime + "pm";
        ulStoryInputs.appendChild(bedtime)
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



