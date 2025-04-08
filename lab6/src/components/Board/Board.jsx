import './Board.css';

function Board({ title }) {
    return (
        <>
            <div className="board">
                <span>{title}</span>
            </div>
        </>
    );
}


export default Board;