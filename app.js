let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnCount = 0;
let win = false;

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

const resetGame = () => {
    win = false;
    turnCount = 0;
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) {
            box.style.color = "#b0413e";
            box.innerText = "O";
            turnO = false;
        } else {
            box.style.color = "#624763";
            box.innerText = "X";
            turnO = true;
        }
        turnCount++;
        box.disabled = true;
        console.log(turnCount);
        checkWinner();
    })
})

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    };
};

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    };
};

const showWinner = (winner) => {
    if(winner === "Draw"){
        msg.innerText = "No winner, the game was a draw";
        msgContainer.classList.remove("hide");
        disableBoxes();
    } else {
        msg.innerText = `Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

const checkWinner = () => {
     if(win == false) {
        for(let pattern of winPatterns) {
            let pos1 = boxes[pattern[0]].innerText;
            let pos2 = boxes[pattern[1]].innerText;
            let pos3 = boxes[pattern[2]].innerText;
    
            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1 === pos2 && pos2 === pos3){
                    showWinner(pos1);
                    win = true;
                }
            } 
        }
    } else if(turnCount == 9 && win == false) {
        showWinner("Draw");
        console.log("draw game");
    }
};

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);