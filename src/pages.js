import * as helper from "/src/helper.js"

export function intro () {
  return `
    <h2> Welcome! </h2>
    <br />
    <p>
      You have one coin. Can you survive a month with your one coin, and maybe even make some money?
    </p>
    <br />
    <p>
      Select one action each day to try to make the most coins. <span style="background-color: rgba(255, 255, 0, 0.5)">Don't run out of coins or energy.</span>
    </p>
    <br />
    <div>
      <button onclick="changePage('home')">Begin Day 1</button>
    </div>
    
    <style>
      
      .intro h2 {
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 2rem;
      }
      .intro p {
        
        text-align: center;
      }
      .intro div {
        display: flex;
        justify-content: center;
      }
    </style>
  `
}

export function home () {
  return `
    <div class = "option-section">
      <h3>Build Skills</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjG0IjZXxplao9vtD91QhVs17SaqsteUY_VQ&s)">
          <p>Go to library</p>
        </button>
        <button class = "option-box" style="background-image:url(https://assets.change.org/photos/8/ud/kg/PvUDKGWiGpPRajj-800x450-noPad.jpg?1585086682)">
          <p>Attend free lesson</p>
        </button>
        <button class = "option-box" style="background-image:url(https://live.staticflickr.com/4103/5045320233_49e54fa7fa.jpg)">
          <p>Research on the internet</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyLsoxwZscBZInqYaPrQ21Xy3TIn72huW0ZA&s)">
          <p>Go to community event</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcn9vpFPoHdXU8n4LJGj7hRdgs-feFebloQ&s)">
          <p>Hire Life Coach</p>
        </button>
        <button class = "option-box" style="background-image:url(https://campunahliya.org/wp-content/uploads/Health-and-Wellness-Programs.jpg)">
          <p>Volunteer</p>
        </button>
      </div>
    </div>
    <div class = "option-section">
      <h3>Work</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://live.staticflickr.com/7037/14110060693_e2e54aef56_b.jpg)">
          <p>Find a job</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBnehOzCo7jcnVvoqPpx7Z0ACz2exRx7eWg&s)">
          <p>Go to job</p>
        </button>
        <button class = "option-box" style="background-image:url(https://dmablaw.com/wp-content/uploads/2025/02/40100.webp)">
          <p>Ask for a raise from job</p>
        </button>
        <button class = "option-box" style="background-image:url(https://jandgtransmissions.com/wp-content/uploads/2019/09/Break-in-var-1024x680.jpg)">
          <p>Wash car windows</p>
        </button>
        <button class = "option-box" style="background-image:url(https://www.nicenstripy.com/ckfinder/userfiles/images/blog/large-lawn-with-stripes.jpg)">
          <p>Mow Lawns</p>
        </button>
        <button class = "option-box" style="background-image:url(https://ottocar.co.uk/wp-content/uploads/2022/05/shutterstock_1497227390-1024x678-QaE42RbG_2000.jpeg.webp)">
          <p>Drive uber</p>
        </button>
      </div>
    </div>
    
    <div class = "option-section">
      <h3>Luck</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://cdn12.picryl.com/photo/2016/12/31/garden-wishing-well-well-nature-landscapes-42fc82-1024.jpg)">
          <p>Wishing Well</p>
        </button>
        <button class = "option-box" style="background-image:url(https://images.pexels.com/photos/7594299/pexels-photo-7594299.jpeg)">
          <p>Gamble</p>
        </button>
        <button class = "option-box" style="background-image:url(https://www.bard.edu/files/pr/main_news_image.php?id=17912)">
          <p>Invest in Bitcoin</p>
        </button>
        <button class = "option-box" style="background-image:url(https://upload.wikimedia.org/wikipedia/commons/c/c4/Metal_Detector_User-2.jpg)">
          <p>Go metal detecting</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo9ahk-SA6iYeuOLmjuqi8dy2Z6jl-aXSgKg&s)">
          <p>Go magnet fishing</p>
        </button>
        <button class = "option-box" style="background-image:url(https://images.squarespace-cdn.com/content/v1/5b16ca69cef372b91b348fda/1615821999582-L30K5KH1ZYQFBWMZ3ZFZ/fullsizeoutput_d65.jpeg)">
          <p>Go fish fishing</p>
        </button>
        <button class = "option-box" style="background-image:url(https://freerangestock.com/sample/168594/busy-city-sidewalk-with-pedestrians.jpg)">
          <p>Just walk around the city</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS168RfTiXXdGwjue5vbhn61M18yPpctB6vbQ&s)">
          <p>Buy a lottery ticket</p>
        </button>
      </div>
    </div>
    <div class = "option-section">
      <h3>Questionable</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://upload.wikimedia.org/wikipedia/commons/6/67/Policemen_apprehend_a_pickpocket_taking_a_license_from_a_pub_Wellcome_V0019439.jpg)">
          <p>Pickpocket someone</p>
        </button>
        <button class = "option-box" style="background-image:url(https://source.roboflow.com/Jqs0CjADPHVf7HhO8BMwqUyqtys1/2JgAL9RUDh0xrGAlSkvI/original.jpg)">
          <p>Shoplift</p>
        </button>
        <button class = "option-box" style="background-image:url(https://media.istockphoto.com/id/1467023857/vector/shooting-range-diamond-caution-sign-rifle-range-symbol.jpg?s=612x612&w=0&k=20&c=PxeQEM3LrqvrF-xYhF9-VEa0uWCHrVdkjpYH_zvDGAY=)">
          <p>Kill time</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPVYgMdl0iU224xZSILssrj3Pkskvo5Yk49w&s)">
          <p>Sell fake luxury item</p>
        </button>
        <button class = "option-box" style="background-image:url(https://live.staticflickr.com/2089/2177283006_4ee1cc4186.jpg)">
          <p>Counterfit money</p>
        </button>
        <button class = "option-box" style="background-image:url(https://www.stockvault.net/data/2016/04/22/194933/preview16.jpg)">
          <p>Go treasure hunting</p>
        </button>
      </div>
    </div>
    <div class = "option-section">
      <h3>Shop</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://freerangestock.com/sample/82304/bustling-shopping-center-filled-with-people.jpg)">
          <p>Go shopping</p>
        </button>
        <button class = "option-box" style="background-image:url(https://liveandletsfly.com/wp-content/uploads/2025/01/Route-66-Road-Trip-Day-Five-6.jpeg)">
          <p>Go thrifting</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbA1gHg1df-ia1gInGpoc0aIdVGOTYPS-GzA&s)">
          <p>Buy food</p>
        </button>
      </div>
    </div>
    
    
    <style>
      .home h2 {
        font-size: 2rem;
      }
      .home .option-section {
        
      }
      .home .option-row {
        display: flex;
        gap: 0.5vw;
        flex-wrap: wrap;
        border-bottom: 2px dotted var(--accent-color);
        padding-bottom: 5px;
      }
      .home .option-box {
        display: flex;
        align-items: end;
        justify-content: center;
        width: clamp(185px, 10vw, 300px);
        aspect-ratio: 2/1;
        background-color: white;
        background-size: cover;
        margin: 0px 5px;
        padding: 2px;
        border-radius: 6px;
        
      }
      .home .option-box p {
        backdrop-filter: blur(1px) brightness(80%);
        color: white;
        padding: 2px;
        border-radius: 5px;
        font-size: 1.2rem;
      }
    </style>
    
  `
}

export function action () {
  return `
    <div id = "actionText">
      
    </div>
    <button id="backToHome">Ok</button>
    <style>
      .action {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2rem;
        flex-direction: column;
        gap: 2vh;
      }
      .action button {
        font-size: 1.5rem;
      }
    </style>
  `
}

export function end () {
  document.querySelector("footer").style.display = "none"
  
  let tips = ["Build some skills before getting a job!", "Try using the wishing well before going for a lucky action.", "Questionable actions are risky, but can be very, very rewarding.", "You can use items to succeed in tasks like fishing or metal detecting", "It can be difficult to get a lucky action to hit twice...", "This game is open source, and reveals the internal mechanics to play the best game!"]
  
  let scores = [];
  scores = JSON.parse(localStorage.getItem("scoresList")) || [] // Get the local top scores from localStorage
  scores.push(state.coins) // Add our score
  scores.sort((a,b) => b-a) // Sort greatest to least
  localStorage.setItem("scoresList", JSON.stringify(scores)) // Add the new top score to the list and save it
  
  let reasonEnded = ""
  let lol = ""
  let endMoney = ""
  if(state.day > 30) {
    reasonEnded = "You completed the month!"
    lol = "Did you make any money?"
  }
  if(stats.energy < 0) {
    reasonEnded = "You ran out of energy and had to recover the rest of the month."
    lol = "Burn out is not good"
  }
  if (state.coins < 0) {
    reasonEnded = "You ran out of money."
    lol = "Remember you're trying to earn money?"
    endMoney = "I don't think banks accept negative coins as currency. "
  }
  let incomeTax = "Income Tax: " + (state.coins - 222);
  if (state.coins-223 < 0) {
    incomeTax = ""
  }
  return `
  <h2>${reasonEnded}</h2>
  <br/>
  <p> ${lol}</p>
  <br />
  
  <p>You had ${state.coins} coins left before all your payments. ${endMoney}</p>
  <br />
  <p> Your payments were: </p>
  <ul>
    <li>Rent: 100 coins</li>
    <li>Insurance: 50 coins</li>
    <li>Food: 50 coins</li>
    <li>Subscriptions: 21 coins</li>
    
  </ul>
  <p>You had ${state.coins-221} after payments.</p>
  
  <p>${incomeTax}</p>
  <br />
  ${state.coins>221 ? "<p>You ended the month with 1 coin.</p>" : "<p>You ended the month in debt</p>"}
  <br />
  <p>Maybe you could make money next month if you're smart enough?</p>
  <br />
  <p>Your top scores (before your payments):</p>
  <p>1. ${scores[0] || 0}</p>
  <p>2. ${scores[1] || 0}</p>
  <p>3. ${scores[2] || 0}</p>
  <p>4. ${scores[3] || 0}</p>
  <p>5. ${scores[4] || 0}</p>
  <br />
  <p>Tip: ${tips[helper.generateRandom(0, tips.length-1)]}</p>
  <br />
  <a href="/">Play again?</a>
  
  <style>
    a {
      font-size: 2rem;
      text-decoration:none;
      color: black;
      border: 1px solid black;
    }
    
  </style>
  
  `
}