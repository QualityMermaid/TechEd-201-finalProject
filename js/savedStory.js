"use strict"
console.log("saved story script")

let localStorageSavedStory = JSON.parse(localStorage.getItem("savedStory"))
console.log(localStorageSavedStory + " Stored Story") 
console.log(localStorageSavedStory.mainName + "HERE")


function renderSavedStory(){

    console.log("saved Story")
    const storySection = document.createElement("section")
    storySection.setAttribute("id", "storySection")
    storyDiv.appendChild(storySection)
    console.log(storySection)

    const storyDetails = document.createElement("details")
    storyDetails.setAttribute("id", "storyDetails")
    storySection.appendChild(storyDetails)

    const storySummary = document.createElement("summary")
    storySummary.setAttribute("id", "storySummary")
    storySummary.textContent = `This is a story about a ${localStorageSavedStory.mainType} called ${localStorageSavedStory.mainName}`
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
    storyParagraph1.textContent = `Once there lived a ${localStorageSavedStory.mainType} called ${localStorageSavedStory.mainName}. They lived in a ${localStorageSavedStory.storyHouseAbj} ${localStorageSavedStory.home}.`
    storyDetails.appendChild(storyParagraph1)


    const storyPrompt1 = document.createElement("p")
    storyPrompt1.setAttribute("id", "storyPrompt")
    storyPrompt1.textContent = `(Talk more about their home)`
    storyDetails.appendChild(storyPrompt1)


    const storyParagraph2 = document.createElement("p")
    storyParagraph2.setAttribute("id", "storyParagraph")
    storyParagraph2.textContent = `One day ${localStorageSavedStory.mainName} decided they wanted to go to the ${storyImage.name}. Just as they were getting ready ${localStorageSavedStory.storyPhoneOrDoor}. It was their friend the ${localStorageSavedStory.friendType} called ${localStorageSavedStory.friendName}!`
    storyDetails.appendChild(storyParagraph2)


    const storyPrompt2 = document.createElement("p")
    storyPrompt2.setAttribute("id", "storyPrompt")
    storyPrompt2.textContent = `(Talk more about their friend. How long they have known each other)`
    storyDetails.appendChild(storyPrompt2)

    const storyParagraph3 = document.createElement("p")
    storyParagraph3.setAttribute("id", "storyParagraph")
    storyParagraph3.textContent = `${localStorageSavedStory.mainName} asked ${localStorageSavedStory.friendName} if they wanted to go with them to the ${storyImage.name}.`
    storyDetails.appendChild(storyParagraph3)


    const storyPrompt3 = document.createElement("p")
    storyPrompt3.setAttribute("id", "storyPrompt")
    storyPrompt3.textContent = `(Talk about getting ready to go to the ${storyImage.name} eg Beach - sunhats)`
    storyDetails.appendChild(storyPrompt3)    
    
    const storyParagraph4 = document.createElement("p")
    storyParagraph4.setAttribute("id", "storyParagraph")
    storyParagraph4.textContent = `When ${localStorageSavedStory.mainName} and ${localStorageSavedStory.friendName} got to the ${storyImage.name} they decided to play a game of ${localStorageSavedStory.game}.`
    storyDetails.appendChild(storyParagraph4)


    const storyPrompt4 = document.createElement("p")
    storyPrompt4.setAttribute("id", "storyPrompt")
    storyPrompt4.textContent = `(Describe them playing ${localStorageSavedStory.game})`
    storyDetails.appendChild(storyPrompt4) 

    const storyParagraph5 = document.createElement("p")
    storyParagraph5.setAttribute("id", "storyParagraph")
    storyParagraph5.textContent = `They were having such a good time that they didn't realise it was so late! ${localStorageSavedStory.mainName} asked ${localStorageSavedStory.friendName} if they wanted to come back to their ${localStorageSavedStory.home} for dinner.`
    storyDetails.appendChild(storyParagraph5)

    const storyPrompt5 = document.createElement("p")
    storyPrompt5.setAttribute("id", "storyPrompt")
    storyPrompt5.textContent = `(Describe their journey home)`
    storyDetails.appendChild(storyPrompt5) 

    const storyParagraph6 = document.createElement("p")
    storyParagraph6.setAttribute("id", "storyParagraph")
    storyParagraph6.textContent = `When they got back to the ${localStorageSavedStory.home}, ${localStorageSavedStory.mainName} and ${localStorageSavedStory.friendName} had ${localStorageSavedStory.dinner} for dinner followed by ${localStorageSavedStory.dessert}.`
    storyDetails.appendChild(storyParagraph6)

    const storyParagraph7 = document.createElement("p")
    storyParagraph7.setAttribute("id", "storyParagraph")
    storyParagraph7.textContent = `${localStorageSavedStory.mainName} said goodbye to their friend ${localStorageSavedStory.friendName} and got ready for bed as it was ${localStorageSavedStory.bedtime}pm.`
    storyDetails.appendChild(storyParagraph7)


    const storyPrompt6 = document.createElement("p")
    storyPrompt6.setAttribute("id", "storyPrompt")
    storyPrompt6.textContent = `(Describe bedtime routine)`
    storyDetails.appendChild(storyPrompt6) 

    const storyParagraph8 = document.createElement("p")
    storyParagraph8.setAttribute("id", "storyParagraph")
    storyParagraph8.textContent = `After getting into bed ${localStorageSavedStory.mainName} thought about all the ${localStorageSavedStory.storyDayAbj} things they had done that day with ${localStorageSavedStory.friendName} and hoped that tomorrow would just just as ${localStorageSavedStory.storyDayAbj}`
    storyDetails.appendChild(storyParagraph8)

    const savedStory = document.getElementById("savedStoryButton").disabled = true

}