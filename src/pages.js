export function intro () {
  return `
    <h2> Welcome! </h2>
    <br />
    <p>
      You have one coin. Can you survive a month with your one coin, and maybe even make some money?
    </p>
    <br />
    <p>
      Select one action each day to try to make the most coins. Don't run out of coins!
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
    <h2> Home </h2>
    <br/>
    <div class = "option-section">
      <h3>Work</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url(https://live.staticflickr.com/7037/14110060693_e2e54aef56_b.jpg)">
          <p>Find a job</p>
        </button>
        <button class = "option-box" style="background-image:url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGBnehOzCo7jcnVvoqPpx7Z0ACz2exRx7eWg&s)">
          <p>Go to job</p>
        </button>
        <button class = "option-box" style="background-image:url(https://jandgtransmissions.com/wp-content/uploads/2019/09/Break-in-var-1024x680.jpg)">
          <p>Wash car windows</p>
        </button>
        <button class = "option-box" style="background-image:url(https://upload.wikimedia.org/wikipedia/commons/e/e1/Taromatas.jpg)">
          <p>TODO</p>
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
        <button class = "option-box" style="background-image:url()">
          <p>Go to community event</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Hire Life Coach</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Volunteer</p>
        </button>
      </div>
    </div>
    <div class = "option-section">
      <h3>Luck</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url()">
          <p>Wishing Well</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Gamble</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Invest in Bitcoin</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Go metal detecting</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Go magnet fishing</p>
        </button>
        
      </div>
    </div>
    <div class = "option-section">
      <h3>Questionable</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url()">
          <p>Pickpocket someone</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Shoplift</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Kill time</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Sell fake luxury item</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Counterfit money</p>
        </button>
        
      </div>
    </div>
    <div class = "option-section">
      <h3>Shop</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url()">
          <p>Go shopping</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Go thrifting</p>
        </button>
        <button class = "option-box" style="background-image:url()">
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
        gap: 1vw;
        flex-wrap: wrap;
      }
      .home .option-box {
        display: flex;
        align-items: end;
        justify-content: center;
        width: clamp(200px, 15vw, 300px);
        aspect-ratio: 2/1;
        background-color: white;
        background-size: cover;
        margin: 5px;
        padding: 2px;
        border-radius: 6px;
        
      }
      .home .option-box p {
        backdrop-filter: blur(1px) brightness(80%);
        color: white;
        padding: 2px;
        border-radius: 5px;
        font-size: 1.1rem;
      }
    </style>
    <script>
      
    </script>
  `
}

export function action () {
  return `
    <div id = "actionText">
      
    </div>
    <button>Ok</button>
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
  return `
  ya lose
  `
}