import React from "react";
import "./MazeCard.css";
import { useHistory } from "react-router-dom";

const MazeCard = (props) => {
    let history = useHistory();
    const queryParams = new URLSearchParams(window.location.search);
    const mazeId = queryParams.get('mazeId');

    const handleItemClicked = (event) => {
        event.preventDefault();
        history.push("/generate/?mazeId=" + props.id)
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const mazeIdToDelete = props.id.toString()
        if (mazeIdToDelete === mazeId)
            history.push("/")
        props.deleteMaze(props.id)
    }

    return (
        <li className="maze-card"
            onClick={handleItemClicked}>
            <h3>
                {props.id}
            </h3>
            <h3>
                {props.width}
            </h3>
            <h3>
                {props.height}
            </h3>
            <h3>
                {props.algorithmType}
            </h3>
            <div className="delete-maze-button"
                onClick={handleDeleteClicked}>
                <i className="fas fa-trash"></i>
            </div>
        </li >
    )
}

export default MazeCard