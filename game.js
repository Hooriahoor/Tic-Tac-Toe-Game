// let boxes = document.querySelectorAll("#box");
// let reset = document.querySelector("#reset");
// let newGameBtn = document.querySelector("#new");
// let msgContainer = document.querySelector(".msg-container");
// let msg = document.querySelector("#msg");


// let turnO = true; //player1 , player2

// const winPatterns = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 8],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8],
// ];

// const drawGame = () => {
//     msg.innerText = "Game was Draw!";
// }

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//     console.log(drawGame);
//     });
// });

// const resetGame = () => {
//     trun0 = true;
//     enableBoxes();
//     msgContainer.classList.add("hide");
// };

// boxes.forEach((box) => {
//     box.addEventListener("click", () => {
//     console.log("box was clicled");
//     if (turnO) {
//         box.innerText = "O";
//         box.style.color = "blue";
//         turnO = false ;
//     }else {
//         box.innerText = "X";
//         box.style.color = "red";
//         turnO = true ;
//     }


//     box.disabled = true;

//     checkWinner();
//     });
// });


// const disableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = true ;
//     }
// };

// const enableBoxes = () => {
//     for(let box of boxes) {
//         box.disabled = false ;
//         box.innerText = "";
//     }
// };

// let showWinner = (winner) => {
//     msg.innerText = `Congratulations, Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disableBoxes();
// };

// const checkWinner = () => {
//     for (let pattern of winPatterns) {
//         let pos1Val = boxes[pattern[0]].innerText;
//         let pos2Val = boxes[pattern[1]].innerText;
//         let pos3Val = boxes[pattern[2]].innerText;

//         if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
//             if (pos1Val === pos2Val && pos2Val === pos3Val){
//                 console.log("winner", pos1Val);
//                 showWinner(pos1Val);
//             }
//         }
//     }
// };

// newGameBtn.addEventListener("click", resetGame);
// reset.addEventListener("click", resetGame);





let boxes = document.querySelectorAll("#box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // player1 , player2
let moves = 0; // count the number of moves

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 8],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const drawGame = () => {
  msg.innerText = "Game was Draw!";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "blue";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }

    box.disabled = true;
    moves++;

    checkWinner();
    if (moves === 9 && !checkWinner()) {
      drawGame();
    }
  });
});

const resetGame = () => {
  turnO = true;
  moves = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

let showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("winner", pos1Val);
        showWinner(pos1Val);
        return true;
      }
    }
  }
  return false;
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);