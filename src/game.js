import * as pages from "/src/pages.js"
import * as helper from "/src/helper.js"

const contentElement = document.querySelector("main");
const coinElement = document.querySelector("#currentCoins");
const dayElement = document.querySelector("#currentDay");
const energyElement = document.querySelector("#currentEnergy")



window.state = {
  position: "intro",
  coins: 1,
  day: 1,
}

window.stats = {
  energy: 100,
  skill: 25,
  charisma: 40,
  luck: 40,
}

window.inventory = [];
window.attributes = [];
window.possibleItems = ["Metal Detector", "Magnet", "Vintage Record", "Guitar", "Mask", "4 Leaf Clover", "Fishing Rod", "Old Treasure Map", "Harmonica", "Vintage Camera"]

function game() {
  coinElement.textContent = state.coins;
  dayElement.textContent = state.day;
  energyElement.textContent = stats.energy
  console.log(state.position)
  switch (state.position) {
    case "intro":
      contentElement.className = "intro"
      contentElement.innerHTML = pages.intro()
      break;
    case "home":
      if (stats.energy < 0 || state.coins < 0 || state.day > 30) {
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
      break;
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
  let result;
  
  
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
        
        actionText.textContent = "You work hard, earn minimum wage, and go home tired but with slightly more money. ";
        result = helper.generateRandom(0, 100);
        if (result < 5) {
          actionText.textContent += "Layoffs hit your company, and you end up losing your job."
          attributes.splice(attributes.indexOf("job"), 1)
          stats.luck += 15; // Good luck for your next job.
        } else if( 15 > result >=5) {
          actionText.textContent += "Your coworker ends up giving you the flu, and you have to stay at home for the next few days."
          stats.energy += 20
          days += 3
        } else if(25 > result >= 15) {
          actionText.textContent += "Your coworker has a birthday, and you're obligated to contribute to the Party Planning Commite"
          stats.energy -= 5;
          state.coins -= 20;
        }
        stats.energy -= 15;
        state.coins += 1 + Math.floor(10 * (1 + stats.skill/10));
      } else {
        actionText.textContent = "You walk to the bus, take the bus to the city, walk around to your workplace - workplace??? You realize you don't even have a job, and you wasted an entire day going to your nonexistant job."
        
        stats.energy -= 5;
      }
      break;
    case "ASK FOR A RAISE FROM JOB":
      state.day--; 
      if (attributes.includes("job")) {
        actionText.textContent = "No." // not in this economy
        if(helper.chance(30)) {
          actionText.textContent += "Actually, we want people who are team players, and you don't seem to fit in with out team culture. We're going have to part ways. (aka you lost your job)"
          attributes.splice(attributes.indexOf("job"), 1)
        }
      } else {
        actionText.textContent = "What job?"
      }
      
      break;
    case "WASH CAR WINDOWS":
      let profit =  1 + helper.generateRandom(0, 5)
      actionText.textContent = "You wash car windows, and accept tips from people. It's very tiring, and the tips aren't reliable. Today you made " + profit + " coins! "
      state.coins += profit
      stats.energy -= 10;
      result = helper.generateRandom(0, 100);
      if (result < 15) {
        actionText.textContent += "Someone also gave you a very large tip of 30 coins!"
        stats.luck += 5;
        state.coins += 30
      }
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
        stats.luck -= 5;
        state.coins += 7;
      } else {
        actionText.textContent += "Nobody wants their lawn mowed by a stranger, so you go home with no money."
        stats.energy -= 10;
      }
      break;
    case "DRIVE UBER":
      actionText.textContent = "You go out and drive uber. It's tough to make money with high gas prices and little payment, and you need tips to profit. "
      if (helper.chance(stats.charisma)) {
        actionText.textContent += "You make good conversation with your passengers, and they tip well!"
        state.coins += 15;
        stats.energy -= 15;
      } else {
        if (helper.chance(75)) {
          actionText.textContent += "People don't seem very fond of you, and the tips show it. You barely make any money."
          stats.energy -= 15;
          state.coins += 2;
        } else {
          actionText.textContent += "People leave bad reviews, and you spent more on gas than what you made."
          stats.energy -= 20;
          state.coins -= 5;
        }
        
      }
      break;
    case "GO TO LIBRARY":
      actionText.textContent = "You go to the library, and gain valuable knowledge. You feel more rested. "
      result = helper.generateRandom(0, 100);
      if (result < 15) {
        actionText.textContent += "So rested, that you fall asleep at the library! You wake up the next morning still at the library. "
        day++;
      }
      
      stats.energy += 5;
      stats.skill += 3;
      stats.charisma -= 1;
      break;
    case "ATTEND FREE LESSON":
      actionText.textContent = "You attend a lesson, and learn valuable skills. You also connect with other people."
      stats.energy -= 10;
      stats.skill += 10;
      stats.charisma += 5
      break;
    case "RESEARCH ON THE INTERNET":
      actionText.textContent = "You look on the internet for knowledge, and you find too much of it. It's exausting, but you do know a lot more now. "
      stats.energy -= 10;
      stats.skill += 15;
      stats.charisma -= 5; // touch grass yall
      result = helper.generateRandom(0, 100);
      if (result < 15) {
        actionText.textContent += "While surfing da web, you accidently install a virus. They make you pay money to get your computer back :("
        state.coins -= 15;
        stats.energy -= 15;
      } else if (30 > result > 15) {
        actionText.textContent += "You end up doomscrolling TikTok late into the night, and you sleep in till 3pm the next day!"
        day++;
      } else if(40 > result > 30) {
        actionText.textContent += "You end up finding a website that gives you significant knowledge!"
        stats.skill += 25; // ya found youtube
      }
      break;
    case "GO TO COMMUNITY EVENT":
      actionText.textContent = "You go out to the farmers market, and you enjoy all the people. You do spend a bit of money, however."
      if(inventory.includes("Guitar") || inventory.includes("Harmonica")) {
        actionText.textContent = "You go to a farmers market, and you start playing one of your instruments. People are kind and tip you well!"
        state.coins += Math.floor(stats.skill / 10)
      }
      stats.energy -= 5;
      stats.skill += 1;
      stats.charisma += 15;
      state.coins -= 5;
      break;
    case "HIRE LIFE COACH":
      actionText.textContent = "You pay hourly for your advice, but it's very motivational. And expensive."
      attributes.push("Life Coach")
      stats.energy -= 10;
      stats.charisma += 10;
      stats.skill += 10;
      stats.luck += 10;
      state.coins -= 30;
      break;
    case "VOLUNTEER":
      actionText.textContent = "You go out and volunteer in your community. You spend a lot of energy, make no money - but you create some great connections and help the community!"
      stats.energy -= 20;
      stats.skill += 1;
      stats.charisma += 10;
      break;
    case "WISHING WELL":
      actionText.textContent = "You drop a few of your coins down the wishing well. You feel more lucky... and also wish you had your coins back."
      stats.energy -= 2;
      stats.luck += 5 + helper.generateRandom(0, 15);
      state.coins -= 5;
      break;
    case "GAMBLE":
      actionText.innerHTML = "<p>You start gambling you coins, and before you know it, you have a straight. Someone else goes all in - will you?</p> <button id='choice'>Yes</button> <button id='choice'>No</button"
      document.querySelector("#backToHome").style.display = "none"
      document.querySelectorAll("button#choice").forEach((el) => {
        el.addEventListener("click", () => {
        document.querySelector("#backToHome").style.display = "block"
         if (el.textContent == "Yes") {
           if (helper.chance(stats.luck + 10)) {
             actionText.textContent = "You win the hand! You take your winnings and leave with twice your money."
             stats.energy -= 5;
             stats.charisma -= 5;
             stats.skill -= 5;
             stats.luck -= 50; // Better not win again
             state.coins = state.coins * 2;
           } else {
             actionText.textContent = "You lose to a flush, that flushes all your money away. Oof."
             stats.energy -= 5;
             stats.luck += 20; // Better luck next time
             state.coins = 0;
           }
         } else {
           actionText.textContent = "You fold, losing some of your money. You leave, sad."
           stats.energy -= 10;
           stats.charisma -= 5;
           stats.skill -= 5;
           state.coins -= 10;
         }
        })
      })
      
      
      break;
    case "INVEST IN BITCOIN":
      if(attributes.includes("bitcoiner")) {
        actionText.textContent = "You check back on your bitcoin. "
        if(helper.chance(stats.luck-20)) {
          actionText.textContent += "Turns out, you made a fortune! You cash out, and call it a day. Maybe you should invest more?"
          stats.luck -= 50; // You really shouldn't invest more
          stats.charisma -= 50; // Is it worth the sacrifise?
          state.coins += 500; // For this amount of coins maybe
        } else {
          actionText.textContent += "Bitcoin crashed. Womp womp. Your bitcoin is worth nothing now."
          stats.luck += 10;
        }
        attributes.splice(attributes.indexOf("bitcoiner"), 1)
      } else {
        actionText.textContent = "You invest a small amount into bitcoin. Maybe it'll turn into something, who knows?"
        state.coins -= 10;
        attributes.push("bitcoiner")
        state.energy -= 5;
      }
        break;
    case "GO METAL DETECTING":
      if(inventory.includes("Metal Detector")) {
        actionText.textContent = "You go out metal detecting, and dig up a few signals. "
        if(helper.chance(stats.luck +10)) {
          actionText.textContent += "You find some small coins - one of them is even silver! "
          stats.energy -= 10;
          state.coins += 15;
          stats.charisma -= 5;
          stats.luck += 2;
        } else {
          actionText.textContent += "Just bottle caps. "
          stats.energy -= 10;
          stats.charisma -= 5;
          stats.luck += 2;
        }
        if(helper.chance(2)) {
          actionText.textContent  += "But then you find one more hole. It's a good signal, and as you dig it out, you see a small hint of gold. YOU FOUND GOLD!"
          stats.luck += 10;
          stats.energy -= 10;
          stats.charisma += 5;
          state.coins += 500;
        }
      } else {
        actionText.textContent = "You go out metal detecting, but you realize you don't own a metal detector. You should probably go buy one. At least you realized before you lost the entire day."
        state.day--; // You get to keep the day
        stats.luck -= 5; // Slight bad luck
        stats.energy -= 5;
        if(helper.chance(2)) {
          actionText.textContent  += "You stumble upon a small glint on the street walking home, and as you pick it up, you found a small coin!"
          stats.luck += 50;
          stats.charisma += 5;
          state.coins += 1;
        }
      }
      break;
    case "GO MAGNET FISHING":
        if(inventory.includes("Magnet")) {
          actionText.textContent = "You go out magnetic fishing, and pull up a few things. "
          if(helper.chance(stats.luck +10)) {
            actionText.textContent += "You find some small coins - one of them is even silver! "
            stats.energy -= 10;
            state.coins += 15;
            stats.charisma -= 5;
            stats.luck += 2;
          } else {
            actionText.textContent += "Just scrap metal "
            stats.energy -= 10;
            stats.charisma -= 5;
            stats.luck += 2;
          }
          if(helper.chance(2)) {
            actionText.textContent  += "But you also pull up something small and metal, and it's roundish. Looks like... A GRENADE! And it goes off. Oof."
            stats.energy -= 200;
          }
        } else {
          actionText.textContent = "You go out magnet fishing, but you realize you don't own a magnet. You go out into the water, and try to swim around and find things, but to no avail. You're exausted."
          stats.energy -= 20;
        }
      break;
      case "GO FISH FISHING":
          if(inventory.includes("Fishing Rod")) {
            actionText.textContent = "You start fishing, and find a few things. "
            if(helper.chance(stats.luck +10)) {
              actionText.textContent += "You caught enough fish for tonight's dinner, and some extra to sell! "
              stats.energy += 10;
              state.coins += 15;
              stats.charisma -= 5;
              stats.luck += 1;
            } else {
              actionText.textContent += "All the fish is small, and you barely feel full. "
              stats.energy -= 5;
              stats.charisma -= 5;
              stats.luck += 5;
            }
            
          } else {
            actionText.textContent = "You try fishing with your hands. That didn't go well."
            stats.energy -= 10;
          }
        break;
      // Here's where the fun begins
    case "PICKPOCKET SOMEONE":
      if(stats.skill > helper.generateRandom(0, 50)) {
        actionText.textContent = "You successfully grab someone wallet without them noticing. You check to see what's inside. "
        if(helper.chance(stats.luck -20)) {
          actionText.textContent += "You found a decent amount of coins in their wallet. Nice job? "
          stats.energy -= 5;
          stats.luck -= 10;
          stats.charisma -= 10;
          state.coins += 50;
        } else {
          actionText.textContent += "You didn't find much good stuff. You wish you could return the wallet. "
          stats.energy -= 5;
          stats.luck -= 10;
          stats.charisma -= 5;
          state.coins += 1; // All that for this - oof
        }
        if(helper.chance(10)) {
          actionText.textContent += "As you get home, there's cops waiting for you. The wallet had a tracker in it! "
          stats.energy -= 40;
          stats.luck -= 10;
          stats.charisma -= 10;
          state.coins -= 10;
          if(attributes.includes("thief")) {
            actionText.textContent += "Since you already had gotten caught for a crime, you're put in jail for a few days."
            state.day += 4
          } else {
            attributes.push("thief")
          }
        }
      } else {
        actionText.textContent = "You try to grab a wallet, but fail. They report you to the police, and you get fined. "
        if(attributes.includes("thief")) {
          actionText.textContent += "Since you already had gotten caught for a crime, you're put in jail for a few days."
          state.day += 4
          
        } else {
          attributes.push("thief")
        }
        state.coins -= 15;
      }
      break;
    case "SHOPLIFT":
      if(stats.charisma > helper.generateRandom(0, 50)) {
        actionText.textContent = "You go into the store, and grab a few things. You eat good food, and refuel your energy! You also \"forgot\" to pay... You sell some of the items later."
        stats.energy += 20;
        stats.luck -= 10;
        stats.charisma -= 10;
        state.coins += 5;
        if(helper.chance(10)) {
          actionText.textContent += "As you get home, there's cops waiting for you. They must've caught you on camera. "
          stats.energy -= 60;
          stats.luck -= 10;
          stats.charisma -= 10;
          state.coins -= 10;
          if(attributes.includes("thief")) {
            actionText.textContent += "Since you already had gotten caught for a crime, you're put in jail for a few days."
            state.day += 4
          } else {
            attributes.push("thief")
          }
        }
      } else {
        actionText.textContent = "You get noticed while taking things. They call the cops, who fine you. "
        if(attributes.includes("thief")) {
          actionText.textContent += "Since you already had gotten caught for a crime, you're put in jail for a few days."
          state.day += 4;
          state.coins -= 10;
        } else {
          state.coins -= 10;
          attributes.push("thief")
        }
      }
      break;
    case "KILL TIME":
      actionText.textContent = "You go to a dark alley, make sure no one is watching, and kill time. You wake up a few days later. What were you thinking?? It was restful at least."
      state.day += 2;
      stats.energy += 10;
      break;
    case "SELL FAKE LUXURY ITEM":
      if (inventory.length == 0) {
        actionText.textContent = "You go out to sell your cheap item as something much fancier, but you realize you don't actually own anything. Maybe go buy something before you try to sell it."
        stats.energy -= 10;
      } else {
        let chosenItem = helper.generateRandom(0, inventory.length - 1)
        let chosenItemName = inventory[chosenItem]
        actionText.textContent = `You sell off your ${chosenItemName}. `
        
        if (helper.chance(charisma + 10)) {
          actionText.textContent += "You sell the person on how valuable the item is, and you make a large profit!"
          state.coins += 75;
        } else {
          actionText.textContent += "They don't buy it, or how valuable the item is. You just wasted a bunch of time."
          stats.energy -= 10;
        }
      }
      break;
    case "GO TREASURE HUNTING":
      if(inventory.includes("Old Treasure Map") && helper.chance(stats.luck)) {
        actionText.textContent = "YOU FOUND TREASURE!!"
        stats.energy -= 10;
        state.coins += 300;
        stats.luck = stats.luck / 2;
      } else {
        actionText.textContent = "You didn't find anything, nor did you know where to look. Maybe the treasure was the friends you made along the way? But you didn't make any friends..."
        stats.energy -= 15;
      }
      break;
    case "COUNTERFIT MONEY":
      actionText.textContent = "Wow, counterfitting money is difficult. You have the skills to do it... right? "
      if(stats.skill > 75) {
        actionText.textContent += "Of course you do! You just print off some money, and you go on happily with your day. "
        state.coins += 500;
        stats.luck -= 15;
        if(helper.chance(40)) {
          actionText.textContent += "However, when you try to spend your money, someone can tell and calls the cops. You get put in jail for 2 weeks."
          state.day += 14;
          state.coins -= 700;
        }
      } else {
        actionText.textContent += "No? Why would you even try? You waste a bunch of money buying materials to counterfit money. "
        stats.luck -= 15;
        state.coins -= 50;
      }
      stats.energy -= 15;
      break;
    case "GO SHOPPING":
      let items = [possibleItems[helper.generateRandom(0, possibleItems.length-1)],possibleItems[helper.generateRandom(0, possibleItems.length)],possibleItems[helper.generateRandom(0, possibleItems.length)]]
      actionText.innerHTML = `You have a few things you find, all costing 10 coins. What will you buy? <button id = "buy">${items[0]}</button><button id = "buy">${items[1]}</button><button id = "buy">${items[2]}</button>`
      document.querySelectorAll("button#buy").forEach((el) => {
        el.addEventListener("click", () => {
          inventory.push(el.textContent)
          possibleItems.splice(possibleItems.indexOf(el.textContent), 1)
          actionText.textContent = "You bought " + el.textContent + " for 10 coins!"
          if (el.textContent == "4 Leaf Clover") {
            stats.luck += 100;
          } else if (el.textContent == "Vintage Record" || "Mask") {
            stats.energy += 20;
          } else if (el.textContent == "Camera") {
            stats.skill += 15;
          }
          state.coins -= 10;
        })
      })
      break;
      case "GO THRIFTING":
        let titems = [possibleItems[helper.generateRandom(0, possibleItems.length-1)],possibleItems[helper.generateRandom(0, possibleItems.length-1)],possibleItems[helper.generateRandom(0, possibleItems.length-1)]]
        actionText.innerHTML = `You have a few things you find, all costing 5 coins. What will you buy? <div><button id = "buy">${titems[0]}</button><button id = "buy">${titems[1]}</button></div>`
      document.querySelectorAll("button#buy").forEach((el) => {
        el.addEventListener("click", () => {
            inventory.push(el.textContent)
            possibleItems.splice(possibleItems.indexOf(el.textContent), 1)
            actionText.textContent = "You bought " + el.textContent + " for 5 coins!"
            if (el.textContent == "4 Leaf Clover") {
              stats.luck += 100;
            } else if (el.textContent == "Vintage Record" || "Mask") {
              stats.energy += 20;
            } else if (el.textContent == "Camera") {
              stats.skill += 15;
            }
            state.coins -= 5;
          })
        })
        break;
    case "BUY FOOD":
      actionText.textContent = "You feel better after buying some good food."
      state.coins -= 15;
      stats.energy += 30;
  }
  state.day++;
}
window.takeAction = takeAction


game();