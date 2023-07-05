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
let abjectiveDay = savedInput.abjectiveDay
let doorOrPhone = savedInput.randomDoorOrPhone
let abjectiveHome = savedInput.abjectiveHome

function getAbjectiveHome(){
    let x = Math.floor(Math.random() * abjectiveHome.length)
    console.log(x + " home")
    return x
}

function getPhoneOrDoor(){
    let x = Math.floor(Math.random() * doorOrPhone.length)
    console.log(x + " phone or door")
    return x
}

function getAbjectiveDay(){
    let x = Math.floor(Math.random() * abjectiveDay.length)
    console.log(x + " day")
    return x
}

function Location(name, src){
    this.name = name;
    this.src = src;
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

    let storyDayAbj = savedInput.abjectiveDay[getAbjectiveDay()]
    let storyHouseAbj = savedInput.abjectiveHome[getAbjectiveHome()]
    let storyPhoneOrDoor = savedInput.randomDoorOrPhone[getPhoneOrDoor()]

    console.log("New Story")
    const storySection = document.createElement("section")
    storySection.setAttribute("id", "storySection")
    storyDiv.appendChild(storySection)
    console.log(storySection)

    const storyDetails = document.createElement("details")
    storyDetails.setAttribute("id", "storyDetails")
    storySection.appendChild(storyDetails)

    const storySummary = document.createElement("summary")
    storySummary.setAttribute("id", "storySummary")
    storySummary.textContent = `This is a story about a ${savedInput.mainType} called ${savedInput.mainName}`
    storyDetails.appendChild(storySummary)

    const storyImg = document.createElement("img")
    let storyImage
    for(let i = 0; i < allLocations.length; i++){
        if(storyMainImage === allLocations[i].name){
            console.log("they match!")
            storyImage = allLocations[i]
        }
    }
    storyImg.src = storyImage.src
    storyDetails.appendChild(storyImg)
    
    console.log(storyImage)

    const storyParagraph1 = document.createElement("p")
    storyParagraph1.setAttribute("id", "storyParagraph")
    storyParagraph1.textContent = `Once there lived a ${savedInput.mainType} called ${savedInput.mainName}. They lived in a ${storyHouseAbj} ${savedInput.home}.`
    storyDetails.appendChild(storyParagraph1)


    const storyPrompt1 = document.createElement("p")
    storyPrompt1.setAttribute("id", "storyPrompt")
    storyPrompt1.textContent = `(Talk more about their home)`
    storyDetails.appendChild(storyPrompt1)


    const storyParagraph2 = document.createElement("p")
    storyParagraph2.setAttribute("id", "storyParagraph")
    storyParagraph2.textContent = `One day ${savedInput.mainName} decided they wanted to go to the ${storyImage.name}. Just as they were getting ready ${storyPhoneOrDoor}. It was their friend the ${savedInput.friendType} called ${savedInput.friendName}!`
    storyDetails.appendChild(storyParagraph2)


    const storyPrompt2 = document.createElement("p")
    storyPrompt2.setAttribute("id", "storyPrompt")
    storyPrompt2.textContent = `(Talk more about their friend. How long they have known each other)`
    storyDetails.appendChild(storyPrompt2)

    const storyParagraph3 = document.createElement("p")
    storyParagraph3.setAttribute("id", "storyParagraph")
    storyParagraph3.textContent = `${savedInput.mainName} asked ${savedInput.friendName} if they wanted to go with them to the ${storyImage.name}.`
    storyDetails.appendChild(storyParagraph3)


    const storyPrompt3 = document.createElement("p")
    storyPrompt3.setAttribute("id", "storyPrompt")
    storyPrompt3.textContent = `(Talk about getting ready to go to the ${storyImage.name} eg Beach - sunhats)`
    storyDetails.appendChild(storyPrompt3)    
    
    const storyParagraph4 = document.createElement("p")
    storyParagraph4.setAttribute("id", "storyParagraph")
    storyParagraph4.textContent = `When ${savedInput.mainName} and ${savedInput.friendName} got to the ${storyImage.name} they decided to play a game of ${savedInput.game}.`
    storyDetails.appendChild(storyParagraph4)


    const storyPrompt4 = document.createElement("p")
    storyPrompt4.setAttribute("id", "storyPrompt")
    storyPrompt4.textContent = `(Describe them playing ${savedInput.game})`
    storyDetails.appendChild(storyPrompt4) 

    const storyParagraph5 = document.createElement("p")
    storyParagraph5.setAttribute("id", "storyParagraph")
    storyParagraph5.textContent = `They were having such a good time that they didn't realise it was so late! ${savedInput.mainName} asked ${savedInput.friendName} if they wanted to come back to their ${savedInput.home} for dinner.`
    storyDetails.appendChild(storyParagraph5)


    const storyPrompt5 = document.createElement("p")
    storyPrompt5.setAttribute("id", "storyPrompt")
    storyPrompt5.textContent = `(Describe their journey home)`
    storyDetails.appendChild(storyPrompt5) 

    const storyParagraph6 = document.createElement("p")
    storyParagraph6.setAttribute("id", "storyParagraph")
    storyParagraph6.textContent = `When they got back to the ${savedInput.home}, ${savedInput.mainName} and ${savedInput.friendName} had ${savedInput.dinner} for dinner followed by ${savedInput.dessert}.`
    storyDetails.appendChild(storyParagraph6)

    const storyParagraph7 = document.createElement("p")
    storyParagraph7.setAttribute("id", "storyParagraph")
    storyParagraph7.textContent = `${savedInput.mainName} said goodbye to their friend ${savedInput.friendName} and got ready for bed as it was ${savedInput.bedtime}pm.`
    storyDetails.appendChild(storyParagraph7)


    const storyPrompt6 = document.createElement("p")
    storyPrompt6.setAttribute("id", "storyPrompt")
    storyPrompt6.textContent = `(Describe bedtime routine)`
    storyDetails.appendChild(storyPrompt6) 

    const storyParagraph8 = document.createElement("p")
    storyParagraph8.setAttribute("id", "storyParagraph")
    storyParagraph8.textContent = `After getting into bed ${savedInput.mainName} thought about all the ${storyDayAbj} things they had done that day with ${savedInput.friendName} and hoped that tomorrow would just just as ${storyDayAbj}`
    storyDetails.appendChild(storyParagraph8)
    
}

pageLoad()

