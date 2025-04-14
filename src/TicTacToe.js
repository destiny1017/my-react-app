import {useState} from 'react';

function Square({value, onSquareClick}) {

    const isVictory = () => {
        if(value && value.indexOf("!") > 0) {
            return "square victory";
        }
        return "square";
    }

    return (
        <button className={isVictory()}
                data-value={value || ""}
                onClick={onSquareClick}>{value}</button>
    );
}

function StatusBar({winner, xIsNext, move}) {

    let statusMessage;
    let statusClass = "status ";

    if (winner) {
        statusMessage = "Winner: " + winner;
        statusClass += "winner";
    } else if(move === 9) {
        statusMessage = "Draw!"
        statusClass += "draw";
    } else {
        statusMessage = "Next player: " + (xIsNext ? "X" : "O");
        statusClass += "next";
    }

    return (
        <div className={statusClass}>{statusMessage}</div>
    )
}

function Board({ xIsNext, squares, onPlay }) {

    function handleClick(i) {
        if(squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if(xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    return (
        <>
            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

export default function Game() {

    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[history.length - 1];
    let xIsNext = currentMove % 2 === 0;

    const winner = calculateWinner(currentSquares);
    const winPlayer = winner ? currentSquares[winner[0]] : null;

    if (winner) {
        let winSquare = currentSquares.slice();
        winner.forEach((line) => winSquare[line] = winSquare[line] + "!");
        // setHistory([history.slice(currentMove-1), winSquare]);
        console.log(winSquare);
    }

    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setCurrentMove(history.length);
    }

    function jumpTo(nextMove) {
        const moveHistory = history.slice(0, nextMove+1);
        setHistory(moveHistory)
        setCurrentMove(nextMove);
        xIsNext = nextMove % 2 === 0;
    }

    const moves = history.map((squares, move) => {
        let description;
        if(move > 0) {
            description = "Go to move #" + move;
        } else {
            description = "Go to game start";
        }
        return(
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <StatusBar winner={winPlayer} xIsNext={xIsNext} move={currentMove}/>
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return lines[i];
        }
    }
    return null;
}