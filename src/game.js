import * as pages from "/src/pages.js"

const contentElement = document.querySelector("main");
const coinElement = document.querySelector("#currentCoins");
const dayElement = document.querySelector("#currentDay");





let state = {
  position: "home",
  coins: 1,
  day: 1,
}

window.stats = {
  energy: 100,
  skill: 0,
  charisma: 0,
  luck: 50,
}

window.inventory = [];
window.attributes = [];

function game () {
  coinElement.textContent = state.coins;
  dayElement.textContent = state.day;
  
  switch (state.position) {
    case "intro":
      contentElement.className = "intro"
      contentElement.innerHTML = pages.intro()
      break;
    case "home":
      contentElement.className = "home"
      contentElement.innerHTML = pages.home()
      document.querySelectorAll("button.option-box").forEach((el) => {
        el.addEventListener("click", () => takeAction(el))
      })
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
  switch (action) {
    case "FIND A JOB":
      
      break;
  }
}
window.takeAction = takeAction


game();