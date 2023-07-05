"use strict"

console.log("create js")

const storyForm = document.getElementById("storyForm")
console.log("here?")
// const addNewStoryInputs = document.getElementById("")
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

        console.log("a location has been selected")

        if(document.getElementById("savedUlInput")){
            if(document.getElementById("savedLocationInput")){
                removeSavedLocation()
            }
            const ulStoryInputs = document.getElementById("savedUlInput")
            const location = document.createElement("li");
            location.setAttribute("id", "savedLocationInput")
            location.textContent = "Location is " + locationSelected.name;
            ulStoryInputs.appendChild(location)
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

    this.render = function(){  

        const h3StoryInputs = document.createElement("h3");
        h3StoryInputs.textContent = "Current story ideas"
        h3StoryInputs.setAttribute("id", "savedInput")
        currentStoryInputs.appendChild(h3StoryInputs)

        const ulStoryInputs = document.createElement("ul");
        ulStoryInputs.setAttribute("id", "savedUlInput")
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

        savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
        const location = document.createElement("li");
        location.setAttribute("id", "savedLocationInput")
        location.textContent = "Location is " + savedLocation;
        ulStoryInputs.appendChild(location)

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

function pageLoad(){
    const beach = new Location("beach", "images/locations/beach.jpeg")
    const forest = new Location("forest", "images/locations/forest.jpeg")
    const park = new Location("park", "images/locations/park.jpeg")

    if (savedInput){
        console.log("There is saved data")
        savedInput.render = function(){
            
            const h3StoryInputs = document.createElement("h3");
            h3StoryInputs.textContent = "Current story ideas"
            h3StoryInputs.setAttribute("id", "savedInput")
            currentStoryInputs.appendChild(h3StoryInputs)

            const ulStoryInputs = document.createElement("ul");
            ulStoryInputs.setAttribute("id", "savedUlInput")
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
        
            if(savedLocation){
                console.log("there is a saved location")
                const location = document.createElement("li");
                location.setAttribute("id", "savedLocationInput")
                location.textContent = "Location is " + savedLocation;
                ulStoryInputs.appendChild(location)
    
            }
        }
        savedInput.render()
    } 

}

pageLoad()
renderImages()

function removeSavedInput(){
    console.log("remove running")
    while(document.getElementById("savedInput")){
        document.getElementById("savedInput").remove()
        console.log("removing savedInput")
    }
}

function removeSavedLocation(){
    if(document.getElementById("savedLocationInput")){
        document.getElementById("savedLocationInput").remove()
        console.log("removing savedLocationInput")
    }
}



