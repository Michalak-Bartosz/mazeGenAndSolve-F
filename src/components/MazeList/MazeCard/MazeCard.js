import React from "react";
import useApi from "../../../api/useApi";
import { useHistory } from "react-router-dom";
import "./MazeCard.css";

const MazeCard = (props) => {
    const api = useApi();
    let history = useHistory();

    const handleItemClicked = (event) => {
        event.preventDefault();
        history.push("/generate/?mazeId=" + props.id)
        window.location.reload();
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault();
        event.stopPropagation();
        deleteMaze(props.id)
        const queryParams = new URLSearchParams(window.location.search);
        const mazeId = queryParams.get('mazeId');
     
        if(props.id == mazeId) {
            history.push("/")
            console.log("PROPS: " + props.id + "\n MAZE: " + mazeId)
        }
    }

    async function deleteMaze(mazeId) {
        try {
            await api.deleteMaze(mazeId);
        } catch (error) { }
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