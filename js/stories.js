"use strict"

console.log("stories js")
let savedInput = JSON.parse(localStorage.getItem("currentStoryInputs"))
let savedLocation = JSON.parse(localStorage.getItem("currentLocation"))
let storyInputsSection = document.getElementById("currentStoryInputs")
let storyDiv = document.getElementById("newStory")
let storyMainImage = savedLocation
let  allLocations = []


let createdMainType = []
let createdMainName =  []
let createdFriendType =  []
let createdFriendName =  []
let createdHome =  []
let createdGame =  []
let createdDinner =  []
let createdDessert =  []
let createdBedtime =  []
let createdAbjectiveHome = []
let createdAbjectiveDay = []
let createdPhoneOrDoor = []



let saveThisStory

function Location(name, src){
    this.name = name;
    this.src = src;
    allLocations.push(this);
}

function NewStory(mainType, mainName,friendType, friendName, home, game, dinner, dessert, bedtime, abjectiveHome, abjectiveDay, randomDoorOrPhone){
    this.mainType = mainType.split(",");
    createdMainType = this.mainType[ Math.floor(Math.random() * this.mainType.length)]
    this.mainName = mainName.split(",");
    createdMainName = this.mainName[ Math.floor(Math.random() * this.mainName.length)]
    this.friendType = friendType.split(",");
    createdFriendType = this.friendType[ Math.floor(Math.random() * this.friendType.length)]

    this.friendName = friendName.split(",");
    createdFriendName = this.friendName[ Math.floor(Math.random() * this.friendName.length)]

    this.home = home.split(",");
    createdHome = this.home[ Math.floor(Math.random() * this.home.length)]

    this.game = game.split(",");
    createdGame = this.game[ Math.floor(Math.random() * this.game.length)]

    this.dinner = dinner.split(",");
    createdDinner = this.dinner[ Math.floor(Math.random() * this.dinner.length)]

    this.dessert = dessert.split(",");
    createdDessert = this.dessert[ Math.floor(Math.random() * this.dessert.length)]

    this.bedtime = bedtime.split(",");
    createdBedtime = this.bedtime[ Math.floor(Math.random() * this.bedtime.length)]

    this.abjectiveHome = abjectiveHome;
    createdAbjectiveHome = this.abjectiveHome[ Math.floor(Math.random() * this.abjectiveHome.length)]

    this.abjectiveDay = abjectiveDay;
    createdAbjectiveDay = this.abjectiveDay[ Math.floor(Math.random() * this.abjectiveDay.length)]

    this.randomDoorOrPhone = randomDoorOrPhone;
    createdPhoneOrDoor = this.randomDoorOrPhone[ Math.floor(Math.random() * this.randomDoorOrPhone.length)]
}

function pageLoad(){

    if(!savedInput){
        document.getElementById("createStoryButton").disabled = true
        document.getElementById("createStoryButton").classList.add("disable")
    }else{

    const beach = new Location("beach", "images/locations/beach.jpeg")
    const forest = new Location("forest", "images/locations/forest.jpeg")
    const park = new Location("park", "images/locations/park.jpeg")

    const h3StoryInputs = document.createElement("h3");
    h3StoryInputs.textContent = "Current story ideas"
    h3StoryInputs.setAttribute("id", "savedInput")
    storyInputsSection.appendChild(h3StoryInputs)

    const ulStoryInputs = document.createElement("ul");
    ulStoryInputs.setAttribute("id", "savedUlInput")
    storyInputsSection.appendChild(ulStoryInputs)

    const currentMainType = document.createElement("li");
    currentMainType.setAttribute("id", "savedInput")
    currentMainType.textContent = "Main Character is a " + savedInput.mainType;
    ulStoryInputs.appendChild(currentMainType)

    const currentMainName = document.createElement("li");
    currentMainName.setAttribute("id", "savedInput")
    currentMainName.textContent = "Main Character's name is " + createdMainName;
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
    
}

function renderNewStory(){

    const newStoryRender = new NewStory(savedInput.mainType, savedInput.mainName, savedInput.friendType, savedInput.friendName, savedInput.home, savedInput.game, savedInput.dinner, savedInput.dessert, savedInput.bedtime, savedInput.abjectiveHome,savedInput.abjectiveDay, savedInput.randomDoorOrPhone)

    const storyDiv = document.getElementById("storyDiv")
    storyDiv.classList.add("newStory")

    const storySection = document.createElement("section")
    storySection.setAttribute("id", "storySection")
    storyDiv.appendChild(storySection)

    const storyDetails = document.createElement("details")
    storyDetails.setAttribute("id", "storyDetails")
    storySection.appendChild(storyDetails)

    const storySummary = document.createElement("summary")
    storySummary.setAttribute("id", "storySummary")
    storySummary.textContent = `This is a new story about a ${createdMainType} called ${createdMainName}`
    storyDetails.appendChild(storySummary)

    const storyImg = document.createElement("img")
    let storyImage
    for(let i = 0; i < allLocations.length; i++){
        if(storyMainImage === allLocations[i].name){
            storyImage = allLocations[i]
        }
    }
    storyImg.src = storyImage.src
    storyDetails.appendChild(storyImg)
    
    const storyParagraph1 = document.createElement("p")
    storyParagraph1.setAttribute("id", "storyParagraph")
    storyParagraph1.textContent = `Once there lived a ${createdMainType} called ${createdMainName}. They lived in a ${createdAbjectiveHome} ${createdHome}.`
    storyDetails.appendChild(storyParagraph1)


    const storyPrompt1 = document.createElement("p")
    storyPrompt1.setAttribute("id", "storyPrompt")
    storyPrompt1.textContent = `(Talk more about their home)`
    storyDetails.appendChild(storyPrompt1)


    const storyParagraph2 = document.createElement("p")
    storyParagraph2.setAttribute("id", "storyParagraph")
    storyParagraph2.textContent = `One day ${createdMainName} decided they wanted to go to the ${storyImage.name}. Just as they were getting ready ${createdPhoneOrDoor}. It was their friend a ${createdFriendType} called ${createdFriendName}!`
    storyDetails.appendChild(storyParagraph2)


    const storyPrompt2 = document.createElement("p")
    storyPrompt2.setAttribute("id", "storyPrompt")
    storyPrompt2.textContent = `(Talk more about their friend. How long they have known each other)`
    storyDetails.appendChild(storyPrompt2)

    const storyParagraph3 = document.createElement("p")
    storyParagraph3.setAttribute("id", "storyParagraph")
    storyParagraph3.textContent = `${createdMainName} asked ${createdFriendName} if they wanted to go with them to the ${storyImage.name}.`
    storyDetails.appendChild(storyParagraph3)


    const storyPrompt3 = document.createElement("p")
    storyPrompt3.setAttribute("id", "storyPrompt")
    storyPrompt3.textContent = `(Talk about getting ready to go to the ${storyImage.name} eg Beach - sunhats)`
    storyDetails.appendChild(storyPrompt3)    
    
    const storyParagraph4 = document.createElement("p")
    storyParagraph4.setAttribute("id", "storyParagraph")
    storyParagraph4.textContent = `When ${createdMainName} and ${createdFriendName} got to the ${storyImage.name} they decided to play a game of ${createdGame}.`
    storyDetails.appendChild(storyParagraph4)


    const storyPrompt4 = document.createElement("p")
    storyPrompt4.setAttribute("id", "storyPrompt")
    storyPrompt4.textContent = `(Describe them playing ${createdGame})`
    storyDetails.appendChild(storyPrompt4) 

    const storyParagraph5 = document.createElement("p")
    storyParagraph5.setAttribute("id", "storyParagraph")
    storyParagraph5.textContent = `They were having such a good time that they didn't realise it was so late! ${createdMainName} asked ${createdFriendName} if they wanted to come back to their ${createdHome} for dinner.`
    storyDetails.appendChild(storyParagraph5)

    const storyPrompt5 = document.createElement("p")
    storyPrompt5.setAttribute("id", "storyPrompt")
    storyPrompt5.textContent = `(Describe their journey home)`
    storyDetails.appendChild(storyPrompt5) 

    const storyParagraph6 = document.createElement("p")
    storyParagraph6.setAttribute("id", "storyParagraph")
    storyParagraph6.textContent = `When they got back to the ${createdHome}, ${createdMainName} and ${createdFriendName} had ${createdDinner} for dinner followed by ${createdDessert} for dessert.`
    storyDetails.appendChild(storyParagraph6)

    const storyParagraph7 = document.createElement("p")
    storyParagraph7.setAttribute("id", "storyParagraph")
    storyParagraph7.textContent = `${createdMainName} said goodbye to their friend ${createdFriendName} and got ready for bed as it was ${createdBedtime}pm.`
    storyDetails.appendChild(storyParagraph7)


    const storyPrompt6 = document.createElement("p")
    storyPrompt6.setAttribute("id", "storyPrompt")
    storyPrompt6.textContent = `(Describe bedtime routine)`
    storyDetails.appendChild(storyPrompt6) 

    const storyParagraph8 = document.createElement("p")
    storyParagraph8.setAttribute("id", "storyParagraph")
    storyParagraph8.textContent = `After getting into bed ${createdMainName} thought about all the ${createdAbjectiveDay} things they had done that day with ${createdFriendName} and hoped that tomorrow would just just as ${createdAbjectiveDay}`
    storyDetails.appendChild(storyParagraph8)
    
    const saveStory = document.createElement("button")
    saveStory.setAttribute("id", "saveStoryButton")
    saveStory.setAttribute("onClick", "saveStory()")
    saveStory.textContent = "Save Story"
    storyDetails.appendChild(saveStory)

    document.getElementById("createStoryButton").disabled = true
    document.getElementById("createStoryButton").classList.add("disable")
}

function saveStory(){
    const storySection = [createdMainType, createdMainName, createdFriendType, createdFriendName, createdHome, createdGame, createdDinner, createdDessert, createdBedtime, createdAbjectiveHome, createdAbjectiveDay, createdPhoneOrDoor]
    localStorage.setItem("savedStory", JSON.stringify(storySection))

    document.getElementById("savedStoryButton").disabled = false
    document.getElementById("savedStoryButton").classList.remove("disable")
}

pageLoad()

