"use strict"

console.log("stories js")
let savedInput = JSON.parse(localStorage.getItem("currentStoryInputs"))
console.log("current saved Inputs " + savedInput)
let savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
console.log("current location is " + savedLocation)
let storyInputsSection = document.getElementById("currentStoryInputs")
let storyDiv = document.getElementById("newStory")
let storyMainImage = savedLocation
console.log(storyMainImage + " is the location")
let  allLocations = []

function Location(name, src){
    this.name = name;
    this.src = src;
    this.selected = 0;
    allLocations.push(this);
    console.log(allLocations)
}

function pageLoad(){
    const beach = new Location("beach", "images/locations/beach.jpeg")
    const forest = new Location("forest", "images/locations/forest.jpeg")
    const park = new Location("park", "images/locations/park.jpeg")

    const h3StoryInputs = document.createElement("h3");
    h3StoryInputs.textContent = "Current story ideas"
    h3StoryInputs.setAttribute("id", "savedInput")
    const ulStoryInputs = document.createElement("ul");
    ulStoryInputs.setAttribute("id", "savedUlInput")
    storyInputsSection.appendChild(ulStoryInputs)

    const currentMainType = document.createElement("li");
    currentMainType.setAttribute("id", "savedInput")
    currentMainType.textContent = "Main Character is a " + savedInput.mainType;
    ulStoryInputs.appendChild(currentMainType)

    const currentMainName = document.createElement("li");
    currentMainName.setAttribute("id", "savedInput")
    currentMainName.textContent = "Main Character's name is " + savedInput.mainName;
    ulStoryInputs.appendChild(currentMainName)

    const friendType = document.createElement("li");
    friendType.setAttribute("id", "savedInput")
    friendType.textContent = "Friend is a " + savedInput.friendType;
    ulStoryInputs.appendChild(friendType)

    const friendName = document.createElement("li");
    friendName.setAttribute("id", "savedInput")
    friendName.textContent = "Friend's name is " + savedInput.friendName;
    ulStoryInputs.appendChild(friendName)

    const home = document.createElement("li");
    home.setAttribute("id", "savedInput")
    home.textContent = "Main Character lives in a  " + savedInput.home;
    ulStoryInputs.appendChild(home)

    const game = document.createElement("li");
    game.setAttribute("id", "savedInput")
    game.textContent = "Games they play are " + savedInput.game;
    ulStoryInputs.appendChild(game)

    const dinner = document.createElement("li");
    dinner.setAttribute("id", "savedInput")
    dinner.textContent = "Dinner can be " + savedInput.dinner;
    ulStoryInputs.appendChild(dinner)

    const dessert = document.createElement("li");
    dessert.setAttribute("id", "savedInput")
    dessert.textContent = "Dessert can be " + savedInput.dessert;
    ulStoryInputs.appendChild(dessert)

    const bedtime = document.createElement("li");
    bedtime.setAttribute("id", "savedInput")
    bedtime.textContent = "Bedtime is " + savedInput.bedtime + "pm";
    ulStoryInputs.appendChild(bedtime)

    savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
    const location = document.createElement("li");
    location.setAttribute("id", "savedLocationInput")
    location.textContent = "Location is " + savedLocation;
    ulStoryInputs.appendChild(location)
}

function renderNewStory(){
    console.log("New Story")
    const storySection = document.createElement("section")
    storySection.setAttribute("id", "storySection")
    storyDiv.appendChild(storySection)
    console.log(storySection)

    const storyTitle = document.createElement("h2")
    storyTitle.textContent = `This is a story about a ${savedInput.mainType} called ${savedInput.mainName}`
    storySection.appendChild(storyTitle)

    const storyImg = document.createElement("img")
    let storyImage
    for(let i = 0; i < allLocations.length; i++){
        if(storyMainImage === allLocations[i].name){
            console.log("they match!")
            storyImage = allLocations[i]
        }
    }
    storyImg.src = storyImage.src
    storySection.appendChild(storyImg)
    
    console.log(storyImage)
    
}
pageLoad()