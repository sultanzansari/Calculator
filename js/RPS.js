const buttons = document.querySelectorAll(".btn-1");
const playerOption = document.querySelector(".p_choice");
const computerOption = document.querySelector(".c_choice");
const result = document.querySelector(".f_result");
const playerScoreBoard = document.querySelector(".p_score");
const computerScoreBoard = document.querySelector(".c_score");
const reloadBtn = document.querySelector('.reload');
let playerScore = 0;
let computerScore = 0;
let moves = 0;

Array.from(buttons).forEach(btns =>{
    btns.addEventListener('click',btns =>{
        let movesLeft = document.querySelector('.movesleft');
        moves++
        movesLeft.innerHTML = `Moves Left: ${10-moves} `;
        playerChoice = btns.target.innerHTML;
        computerValue = ["ROCK","PAPER","SCISSOR"];
        randomChoice = Math.floor(Math.random()*3);
        let computerChoice = computerValue[randomChoice];
        game(playerChoice,computerChoice);
        if(moves == 10){
            gameOver(movesLeft)
        }    
    })

    function game (playerChoice,computerChoice){
        switch(playerChoice + computerChoice){
            case "ROCKPAPER":
            case "PAPERSCISSOR":
            case "SCISSORROCK":
                loose(playerChoice,computerChoice);
                break;
            case "ROCKSCISSOR":
            case "PAPERROCK":
            case "SCISSORPAPER":
                win(playerChoice,computerChoice);
                break;
            case "ROCKROCK":
            case "PAPERPAPER":
            case "SCISSORSCISSOR":
                draw(playerChoice,computerChoice);
                break;                  
        }
    }

    function win(playerChoice,computerChoice){
        playerScore++;
        playerScoreBoard.innerHTML = `${0+playerScore}`;
        result.innerHTML = `${playerChoice} BEATS ${computerChoice} PLAYER WINS`;
        result.style.color = '#2e9b2e';
    }

    function loose(playerChoice,computerChoice){
        computerScore++
        computerScoreBoard.innerHTML = `${0+computerScore}`;
        result.innerHTML = `${computerChoice} BEATS ${playerChoice} COMPUTER WINS`;
        result.style.color = "#b43d3d";
    }

    function draw(playerChoice,computerChoice){
        result.innerHTML = `${playerChoice} SAME ${computerChoice} ITS A DRAW`;
        result.style.color = "#4646c1";
    }

    let gameOver = (movesLeft) => {
        let buttons = document.querySelectorAll(".btn-1");
        let chooseMove = document.querySelector('.move');
        Array.from(buttons).forEach(btn => {
            btn.style.display = 'none';
        });
        chooseMove.innerHTML = 'Game Over';
        movesLeft.style.display = 'none';
        if(playerScore > computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Won The Game'
			result.style.color = '#308D46';
		}
		else if(playerScore < computerScore){
			result.style.fontSize = '2rem';
			result.innerText = 'You Lost The Game';
			result.style.color = '#d93b73';
		}
		else{
			result.style.fontSize = '2rem';
			result.innerText = 'Tie';
			result.style.color = 'grey'
		}
        reloadBtn.textContent = 'Restart';
		reloadBtn.style.display = 'flex'
		reloadBtn.addEventListener('click',() => {
			window.location.reload();
		})
    };
})