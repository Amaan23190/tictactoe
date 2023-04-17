var audioTurn = new Audio("ting.mp3");
var gameover = new Audio("gameover.mp3");
var gameMusic = new Audio("music.mp3");
var turn = "x";
console.log("Hello");

var boxes = document.getElementsByClassName("box");

// change the turn

function changeTurn() {
    if (turn === "x") {
      turn = "o";
    } else {
      turn = "x";
    }
  }
  

//check for win
function checkWin() {
    
    //check for row
    // check for row
    for (let j = 0; j < 9; j += 3) {
    if (boxes[j].innerText !== '' && boxes[j].innerText === boxes[j + 1].innerText && boxes[j].innerText === boxes[j + 2].innerText) {
      let winner = document.querySelector(".announceWinner");
      winner.innerText = turn + ' won';
      gameover.play();
    }
  }
  

    //check for column
    for (let i = 0; i < 3; i++) {
        if (boxes[i].innerText !== '' && boxes[i].innerText === boxes[i + 3].innerText && boxes[i].innerText === boxes[i + 6].innerText) {
            let winner = document.querySelector(".announceWinner");
            winner.innerText = turn + ' won';
            gameover.play();
        }
      }

    //check for diagonal
    if (boxes[0].innerText !== '' && boxes[0].innerText === boxes[4].innerText && boxes[0].innerText === boxes[8].innerText) {
        let winner = document.querySelector(".announceWinner");
            winner.innerText = turn + ' won';
            gameover.play();
      }
      if (boxes[2].innerText !== '' && boxes[2].innerText === boxes[4].innerText && boxes[2].innerText === boxes[6].innerText) {
        let winner = document.querySelector(".announceWinner");
            winner.innerText = turn + ' won';
            gameover.play();
      }
      
}

// main game's logic
for(let i=0; i<boxes.length; i++){
    boxes[i].addEventListener('click', function(){
        let boxtext = this.querySelector(".boxtext");
        if(boxtext.textContent == ''){
            boxtext.textContent = turn;
            audioTurn.play();
            checkWin();
            let msg = document.querySelector(".info");
            changeTurn();
            msg.innerText = "Turn for " +turn;
        }
    })
}


function resetGame() {
    for (let i = 0; i < boxes.length; i++) {
      let boxtext = boxes[i].querySelector('.boxtext');
      boxtext.textContent = '';
    }
    turn = 'x';
    let winner = document.querySelector('.announceWinner');
    winner.textContent = '';
  }
  
  let resetBtn = document.querySelector('.reset');
  resetBtn.addEventListener('click', resetGame);
  
  
