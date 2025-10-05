import * as pages from "/src/pages.js"
import * as helper from "/src/helper.js"

const contentElement = document.querySelector("main");
const coinElement = document.querySelector("#currentCoins");
const dayElement = document.querySelector("#currentDay");
const energyElement = document.querySelector("#currentEnergy")



let state = {
  position: "home",
  coins: 1,
  day: 1,
}

window.stats = {
  energy: 100,
  skill: 0,
  charisma: 25,
  luck: 0,
}

window.inventory = [];
window.attributes = [];

function game () {
  coinElement.textContent = state.coins;
  dayElement.textContent = state.day;
  energyElement.textContent = stats.energy
  
  switch (state.position) {
    case "intro":
      contentElement.className = "intro"
      contentElement.innerHTML = pages.intro()
      break;
    case "home":
      if (stats.energy < 0) {
        alert('h8i')
        changePage("end")
        break;
      }
      
      contentElement.className = "home"
      contentElement.innerHTML = pages.home()
      document.querySelectorAll("button.option-box").forEach((el) => {
        el.addEventListener("click", () => takeAction(el))
      })
      break;
    case "action":
      contentElement.className = "action"
      contentElement.innerHTML = pages.action();
      document.querySelector(".action button").addEventListener("click", () => {
        changePage("home")
      })
      break;
    case "end":
      contentElement.className = "end"
      contentElement.innerHTML = pages.end();
  }
}

function changePage (page) {
  state.position = page
  game()
}

window.changePage = changePage; // Make this accessible to onclick events

function takeAction (actionElement) {
  let action = actionElement.textContent.trim().toUpperCase()
  console.log(action)
  changePage("action")
  const actionText = document.querySelector("#actionText")
  
  
  
  switch (action) {
    case "FIND A JOB":
      if (attributes.includes("job")) {
        actionText.textContent = "Instead of going to your job, you look to find a new one. Your employer finds out you're looking for a new job, and agrees that you should go find a new job. You're fired."
        attributes.splice(attributes.indexOf("job"), 1)
        stats.energy -= 10;
      } else {
        actionText.textContent = "Using your skills and charisma, you go out and look for a job. "
        let foundJob = helper.chance(stats.skill + stats.charisma)
        if (foundJob) {
          actionText.textContent += "You successfully find one!"
          attributes.push("job")
        } else {
          actionText.textContent += "However, you have no skills so no one will hire you."
        }
        stats.energy -= 10;
      }
      
      break;
    case "GO TO JOB":
      if (attributes.includes("job")) {
        
        actionText.textContent = "You work hard, earn minimum wage, and go home tired but with slightly more money"
        stats.energy -= 15;
        state.coins += 1 + Math.floor(10 * (1 + stats.skill/10));
      } else {
        actionText.textContent = "You walk to the bus, take the bus to the city, walk around to your workplace - workplace??? You realize you don't even have a job, and you wasted an entire day going to your nonexistant job."
        
        stats.energy -= 5;
      }
      break;
    case "WASH CAR WINDOWS":
      let profit =  1 + helper.generateRandom(0, 5)
      actionText.textContent = "You wash car windows, and accept tips from people. It's very tiring, and the tips aren't reliable. Today you made " + profit + " coins!"
      state.coins += profit
      stats.energy -= 25;
      break;
    case "MOW LAWNS":
      actionText.textContent = "You go door to door asking to mow lawns. "
      if (attributes.includes("allergies")) {
        actionText.textContent += "You're sneezing constantly, and you feel super tired. "
        attributes.splice(attributes.indexOf("allergies"), 1)
        stats.energy -= 20;
      }
      
      if (helper.chance(stats.charisma + stats.luck)) {
        actionText.textContent += "A few people take you up on your offer, and you get working. It's tough work, but you make some money."
        attributes.push("allergies")
        stats.energy -= 20;
      } else {
        actionText.textContent += "Nobody wants their lawn mowed by a stranger, so you go home with no money."
        stats.energy -= 10;
      }
      break;
    
  }
  state.day++;
}
window.takeAction = takeAction


game();