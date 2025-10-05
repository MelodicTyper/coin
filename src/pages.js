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
        <div class = "option-box">
        </div>
      </div>
    </div>
    
    
    
    <style>
      .home .option {
        
      }
    </style>
  `
}