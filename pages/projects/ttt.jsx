import Details from "../../components/Details"
import { useState } from "react";

export default function tictactoe () {

    const [isX, setIsX] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    // const [history, setHistory] = useState(squares);
    // const [stepNumber, setStepNumber] = useState(0);
    // const current = history[history.length - 1];

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = winner + ' Win the Round !';
    } else {
        status = 'Next player: ' + (isX ? "X" : "O");
    }

    function Square({value, onClick}) {
        return (
            <button className="square text-white" onClick={onClick}>
                {value}
            </button>
        );
    }
      
    function Board() {

        const renderSquare = (i) => {
            return <Square value={squares[i]} onClick={() => handleClick(i)} />;
        }

        return (
            <div className="board">
                <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                </div>
                <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                </div>
                <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                </div>
            </div>
        );
    }

    function handleClick(i){
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isX ? "X" : "O";
        setSquares([...squares, squares]);
        setIsX(!isX);
    }

    function calculateWinner(squares) {

        const winningPatterns = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
    
        for (let i = 0; i < winningPatterns.length; i++) {
          const [a, b, c] = winningPatterns[i];
    
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    return (
        <>
            <Details/>
            <section className="flex flex-col items-center min-h-screen text-white bg-[#1b263b]">
                <div className="game text-center">
                    <Board />
                    <div className="game-info mt-6">
                        <div>{status}</div>
                        <ol>{/* TODO */}</ol>
                    </div>
                </div>
            </section>
        </>
    )
}