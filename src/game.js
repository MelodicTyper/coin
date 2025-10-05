import * as pages from "/src/pages.js"

const contentElement = document.querySelector("main");
const coinElement = document.querySelector("#currentCoins");
const dayElement = document.querySelector("#currentDay");


let state = "home";
let coins = 0;
let day = 1;

function game () {
  coinElement.textContent = coins;
  dayElement.textContent = day;
  
  switch (state) {
    case "intro":
      contentElement.className = "intro"
      contentElement.innerHTML = pages.intro()
      break;
    case "home":
      contentElement.className = "home"
      contentElement.innerHTML = pages.home()
  }
}

function changePage (page) {
  state = page
  game()
}

window.changePage = changePage; // Make this accessible to onclick events



game();