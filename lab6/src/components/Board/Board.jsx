import './Board.css';

function Board({ title, value, subValue, image, bgColor }) {
    return (
        <div className="board" style={{ backgroundColor: bgColor }}>
            {image && (
                <button className="board-image-button">
                    <img src={image} alt="icon" className="board-image" />
                </button>
            )}
            <div className="board-title">{title}</div>
            <div className="board-value">{value}</div>
            {subValue && <div className="board-sub">{subValue}</div>}
        </div>
    );
}

export default Board;
