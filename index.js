let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.getElementById('msg')

let userscore = document.querySelector('#user-score')
let compscore = document.querySelector('#comp-score')


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const rndmIdx = Math.floor(Math.random() * 3);
  return options[rndmIdx];
};


const drawGame = ()=> {
    msg.innerText = 'Game Draw';
    msg.style.backgroundColor = 'grey'
};

const showWinner = (userwin,userChoice,compChoice) =>{
    if(userwin){
        console.log('You Win');
        userScore++;
        userscore.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'Green'
    }else{
        console.log('You Lose');
        compScore++;
        compscore.innerText = compScore;
        msg.innerText = `You Lose! Your ${userChoice} loses against ${compChoice}`;
        msg.style.backgroundColor = 'red'
    }
};

const playGame = (userChoice) => {
  console.log("Your Choice", userChoice);
  const compChoice = genCompChoice();
  console.log("Comp Choice", compChoice);

  if (compChoice === userChoice) {
    drawGame();
  }else{
    let userwin = true;
    if (userChoice === "rock") {
      userwin = compChoice === "paper" ? false: true;
    } else if (userChoice === "paper") {
      userwin = compChoice === "scissors" ? false: true;
    } else {
      userwin = compChoice === "rock" ? false: true;
    }

    showWinner(userwin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
