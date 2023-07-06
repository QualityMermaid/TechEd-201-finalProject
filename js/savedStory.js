"use strict"

let localStorageSavedStory = JSON.parse(localStorage.getItem("savedStory"))

if (localStorageSavedStory){
createdMainType = [localStorageSavedStory[0]]
createdMainName =  [localStorageSavedStory[1]]
createdFriendType =  [localStorageSavedStory[2]]
createdFriendName =  [localStorageSavedStory[3]]
createdHome =  [localStorageSavedStory[4]]
createdGame =  [localStorageSavedStory[5]]
createdDinner =  [localStorageSavedStory[6]]
createdDessert =  [localStorageSavedStory[7]]
createdBedtime =  [localStorageSavedStory[8]]
createdAbjectiveHome = [localStorageSavedStory[9]]
createdAbjectiveDay = [localStorageSavedStory[10]]
createdPhoneOrDoor = [localStorageSavedStory[11]]
} else{
    document.getElementById("savedStoryButton").disabled = true
    document.getElementById("savedStoryButton").classList.add("disable")
}

function renderSavedStory(){
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
    storySummary.textContent = `This is a saved story about a ${createdMainType} called ${createdMainName}`
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

    document.getElementById("savedStoryButton").disabled = true
    document.getElementById("savedStoryButton").classList.add("disable")
}
