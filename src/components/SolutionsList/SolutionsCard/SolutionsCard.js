import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import { GenAlgorithmsItems } from "../../ItemLists/GenAlgorithmsItems";
import "./SolutionsCard.css";

const SolutionsCard = (props) => {
    let history = useHistory();

    const [checkedSoluton, setCheckedSolution] = useState(true)

    const handleItemClicked = (event) => {
        event.preventDefault();
        history.push("/solve/?mazeId=" + props.mazeId +
            "&solveId=" + props.solveId)
    }

    const handleDeleteClicked = (event) => {
        event.preventDefault()
        event.stopPropagation()
        props.handleDeleteSolve(props.solveId)
    }

    const handleCheckboxChange = (event) => {
        event.stopPropagation()
        if (checkedSoluton) {
            props.handleCheckSolution(props.solveId, "add")
        } else {
            props.handleCheckSolution(props.solveId, "remove")
        }
        setCheckedSolution(!checkedSoluton)
    }

    const normalizeAlgorithmName = (algorithmValue) => {
        const algorithmItem = GenAlgorithmsItems.find(({ value }) => value === algorithmValue)
        if (algorithmItem !== undefined)
            return algorithmItem.title;
        else
            return algorithmValue
    }

    return (
        <li className="solution-card"
            onClick={handleItemClicked}>
            <h3>
                {props.solveId}
            </h3>
            <h3>
                {props.mazeId}
            </h3>
            <h3>
                {props.maze.width}
            </h3>
            <h3>
                {props.maze.height}
            </h3>
            <h3>
                {normalizeAlgorithmName(props.maze.algorithmType)}
            </h3>
            <h3>
                {props.solvAlgorithmType}
            </h3>
            <div className="compare-checkbox-wrapper">
                <input className="compare-checkbox"
                    type="checkbox"
                    onClick={handleCheckboxChange} />
            </div>
            <div className="delete-solution-button"
                onClick={handleDeleteClicked}>
                <i className="fas fa-trash"></i>
            </div>
        </li >
    )
}

export default SolutionsCard