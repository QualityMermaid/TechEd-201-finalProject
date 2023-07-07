"use strict"

const storyForm = document.getElementById("storyForm")
const currentStoryInputs = document.getElementById("currentStoryInputs")
let savedInput = JSON.parse(localStorage.getItem("currentStoryInputs"))
let savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
let storyInput = []
let storyLocation 
let  allLocations = []
let selectedImage
const image1 = document.getElementById("firstImg")
const image2 = document.getElementById("secondImg")

function getRandomLocation(){
    let x = Math.floor(Math.random() * allLocations.length)
    return x
}

function Location(name, src){
    this.name = name;
    this.src = src;
    allLocations.push(this);
}

function renderImages(){
    let location1 = getRandomLocation();
    let location2 = getRandomLocation();

    while(location1 === location2){
        location1 = getRandomLocation();
    }

    image1.name = allLocations[location1].name
    image1.src = allLocations[location1].src
    image2.src = allLocations[location2].src
    image2.name = allLocations[location2].name
}

function locationSelected(event){
    if(event.target === imageSelectionSection){
        alert("Please select an image for your story location")
    } else {
        locationSelected = event.target
        localStorage.setItem("currentLocation", JSON.stringify(locationSelected.name))
        selectedImage = locationSelected
        image1.classList.remove("imgSelected")
        image2.classList.remove("imgSelected")
        document.getElementById(locationSelected.id).classList.add("imgSelected")
        

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

        storyInput = newStory

        localStorage.setItem("currentStoryInputs", JSON.stringify(storyInput))

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


