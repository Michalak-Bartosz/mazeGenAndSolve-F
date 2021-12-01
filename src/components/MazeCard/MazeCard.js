import React from "react";
import "./MazeCard.css";

const MazeCard = (props) => {

    const handleItemClicked = () => {

    }
    return (
        <li className="maze-card"
            onClick={handleItemClicked}>
            <h3>
                Maze ID: {props.id}
            </h3>
            <h3>
                Width: {props.width}
            </h3>
            <h3>
                Height: {props.height}
            </h3>
            <h3>
                Generate algorithm type: {props.algorithmType}
            </h3>
        </li>
    )
}

export default MazeCard