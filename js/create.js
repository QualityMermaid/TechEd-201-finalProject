"use strict"

console.log("create js")

const storyForm = document.getElementById("storyForm")
console.log("here?")
const currentStoryInputs = document.getElementById("currentStoryInputs")
let savedInput = JSON.parse(localStorage.getItem("currentStoryInputs"))
console.log("current saved Inputs " + savedInput)
let savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
console.log("current location is " + savedLocation)

let storyInput = []
console.log("current input " + storyInput)

let storyLocation 
console.log(storyLocation + " this is the location selected")

let  allLocations = []

let selectedImage
console.log(selectedImage + " image is")

const image1 = document.getElementById("firstImg")
const image2 = document.getElementById("secondImg")

// const abjectiveHome = ["messy", "clean"]
// const abjectiveDay = ["fun", "exciting"]
// const randomDoorOrPhone = [" there was a knock at the door", "their phone rang"]

function getRandomLocation(){
    let x = Math.floor(Math.random() * allLocations.length)
    return x
}

function Location(name, src){
    this.name = name;
    this.src = src;
    allLocations.push(this);
    console.log(allLocations)
}

function renderImages(){
    let location1 = getRandomLocation();
    let location2 = getRandomLocation();



    while(location1 === location2){
        location1 = getRandomLocation();
    }
    console.log(`first is ${location1}, second is ${location2}`)

    image1.name = allLocations[location1].name
    image1.src = allLocations[location1].src
    console.log(image1)

    image2.src = allLocations[location2].src
    image2.name = allLocations[location2].name
    console.log(image2)

    console.log("rendering images")
}

function locationSelected(event){
    if(event.target === imageSelectionSection){
        alert("Please select an image for your story location")
    } else {
        locationSelected = event.target
        console.log(locationSelected)
        localStorage.setItem("currentLocation", JSON.stringify(locationSelected.name))
        selectedImage = locationSelected
        console.log("a location has been selected")

        if(document.getElementById("savedUlInput")){
            if(document.getElementById("savedLocationInput")){
                removeSavedLocation()
            }
        }
    }
}

imageSelectionSection.addEventListener("click", locationSelected)

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
    this.randomDoorOrPhone = [" there was a knock at the door", "their phone rang"]
}


storyForm.addEventListener("submit", function(event){
    console.log("New Story Inputs");
    event.preventDefault()

    if(selectedImage){
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

        storyInput = newStory

        localStorage.setItem("currentStoryInputs", JSON.stringify(storyInput))

        console.log("Your inputs are saved. Go to Stories page to see your creations")
        const alertMessage = document.getElementById("alertSave")
        alertMessage.classList.add("alert")
        alertMessage.classList.remove("saveAlert")
        storyForm.reset()

    } else {
        alert("Please select an image")
    }
})

function pageLoad(){
    const beach = new Location("beach", "images/locations/beach.jpeg")
    const forest = new Location("forest", "images/locations/forest.jpeg")
    const park = new Location("park", "images/locations/park.jpeg")
}

pageLoad()
renderImages()


