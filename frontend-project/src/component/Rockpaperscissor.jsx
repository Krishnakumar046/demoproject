import React, { useState } from 'react'

export default function Rockpaperscissor() {

    const [playerTurn, setPlayerTurn] = useState("play");
    const [computerTurn, setComputerTurn] = useState("play");
    const [moves, setMoves] = useState(10);
    const [Display, setDisplay] = useState("play");

    const playTurn = (playerchoice) => {
        const computerChoice = computerRock();
        setPlayerTurn(playerchoice);
        setComputerTurn(computerChoice);
        checkWinner(playerchoice, computerChoice);
    }
    const computerRock = () => {
        let computerResult = Math.floor(Math.random() * 3) + 1;
        if (computerResult == 1) {
            return "Rock";
        } else if (computerResult == 2) {
            return "Paper";
        } else {
            return "Scissor";
        }
    }
    const checkWinner = (playerchoice, computerChoice) => {
        if (playerchoice === computerChoice) {
            setDisplay("Draw");
        } else if (
            (playerchoice === "Rock" && computerChoice === "Scissor") ||
            (playerchoice === "Paper" && computerChoice === "Rock") ||
            (playerchoice === "Scissor" && computerChoice === "Paper")
        ) {
            setDisplay("Player Wins");
        } else {
            setDisplay("Computer Wins");
        }
        setMoves(moves - 1);
        checkMoves(); // Decrement the moves
    };
    const checkMoves = () => {
        if (moves === 0) {
            alert("Game Over");
            setMoves(10);
            setDisplay('Start new');
            setComputerTurn("play");
            setPlayerTurn("play");

        }
    }


    return (
        <>
            <div class='container-fluid '>
                <h3>Rock Paper Scissor</h3>
                <p class='container lh-lg'>In this calculator i have create this layout through the bootstrap method.I have use the UseState method and provide the initial value as empty string.I have create the Input field through Input tag and create some buttons while clicking the button it display's the buttons value through setValue and input tag gets the Button value through the Value and Onchange method in the React</p>
                <div class='container col-md-4 design colour text-white'>
                    <h4 class='text-center'>Rock Paper Scissor</h4><br />
                    <div class='d-flex flex-wrap flex-row justify-content-evenly'>
                        <h4 class='text-center mt-2 mb-2'>Player <br /><button class='btn btn-secondary rounded mt-2 text-white p-2 fw-medium' style={{ Width: "80px", height: "40px" }}>{playerTurn}</button></h4>
                        <h4 class='text-center mt-2 mb-2'>Computer <br /><button class='btn btn-secondary rounded mt-2 text-white p-2 fw-medium' style={{ Width: "80px", height: "40px" }}>{computerTurn}</button></h4>
                    </div>
                    <div class='text-center mt-3'>
                        <h5>Moves left : {moves}</h5>
                    </div>
                    <div class='d-flex flex-row flex-wrap justify-content-evenly mt-4'>
                        <button class="btn btn-primary" onClick={() => playTurn("Rock")}>Rock</button>
                        <button class="btn btn-primary" onClick={() => playTurn("Paper")}>Paper</button>
                        <button class="btn btn-primary" onClick={() => playTurn("Scissor")}>Scissor</button>
                    </div>
                    <div class=' d-flex justify-content-center align-item-center p-5 border border-white  mt-3 mb-3 rounded'>
                        {Display}
                    </div>
                </div>
            </div>
        </>

    )
}
