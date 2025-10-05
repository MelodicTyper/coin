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
        <button class = "option-box" style="background-image:url()">
          <p>Find a job</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Go to job</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Wash car windows</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Recycle and turn in bottles</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Mow Lawns</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Mow Lawns</p>
        </button>
      </div>
    </div>
    <div class = "option-section">
      <h3>Build Skills</h3>
      <div class = "option-row">
        <button class = "option-box" style="background-image:url()">
          <p>Go to library</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Attend free lesson</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Research the internet</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Go to community event</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p>Hire Life Coach</p>
        </button>
        <button class = "option-box" style="background-image:url()">
          <p></p>
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
        margin: 5px;
        padding: 2px;
        border-radius: 6px;
        
      }
    </style>
  `
}