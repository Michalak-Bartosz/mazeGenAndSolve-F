import React from "react";
import "./MazeCard.css";
import { useHistory } from "react-router-dom";
import { GenAlgorithmsItems } from "../../ItemLists/GenAlgorithmsItems";

const MazeCard = (props) => {
    let history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const mazeId = queryParams.get('mazeId');

    const handleItemClicked = (event) => {
        event.preventDefault();
        history.push("/generate/?mazeId=" + props.maze.mazeId)
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault();
        event.stopPropagation();
        props.deleteMaze(props.maze.mazeId)
        if (props.maze.mazeId.toString() === mazeId.toString()) {
            history.push("/")
        }
    }

    const normalizeAlgorithmName = (genAlgorithmType) => {
        const algorithmItem = GenAlgorithmsItems.find(({ value }) => value === genAlgorithmType)
        return algorithmItem.title;
    }

    return (
        <li className="maze-card"
            onClick={handleItemClicked}>
            <h3>
                {props.maze.mazeId}
            </h3>
            <h3>
                {props.maze.width}
            </h3>
            <h3>
                {props.maze.height}
            </h3>
            <h3>
                {normalizeAlgorithmName(props.maze.genAlgorithmType)}
            </h3>
            <div className="delete-maze-button"
                onClick={handleDeleteClicked}>
                <i className="fas fa-trash"></i>
            </div>
        </li >
    )
}

export default MazeCard