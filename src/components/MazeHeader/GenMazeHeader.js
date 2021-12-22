import { React, useState, useEffect } from "react";
import { SolvAlgorithmsItems } from "../ItemLists/SolvAlgorithmsItems"
import useApi from "../../api/useApi";
import { useHistory } from "react-router-dom";
import "./GenMazeHeader.css"

const GenMazeHeader = (props) => {
    const api = useApi();
    let history = useHistory();

    const [algorithm, setAlgorithm] = useState("Dijkstra")
    const [newSolvedMaze, setNewSolvedMaze] = useState(null)

    useEffect(() => {
        if (newSolvedMaze != null)
            history.push("/solve/?mazeId=" + newSolvedMaze.mazeId +
                "&solveId=" + newSolvedMaze.solveId +
                "&solveAlg=" + newSolvedMaze.solveAlgorithmType)
    }, [newSolvedMaze]);

    const handleShowSolutionClick = (event) => {
        history.push("/solve/?mazeId=" + props.mazeId)
    }

    const handleSelectChange = (event) => {
        setAlgorithm(event.target.value)
    }

    const handleSolveClick = (event) => {
        event.preventDefault()
        const solveParams = {
            mazeId: props.mazeId,
            solveAlgorithmType: algorithm,
            startCellId: props.startCell,
            endCellId: props.endCell
        }
        solveMaze(solveParams)
    }

    async function solveMaze(solveParams) {
        try {
            await api.solveMaze(solveParams)
                .then(result => setNewSolvedMaze(result))
        } catch (error) { }
    }

    return (
        <div className="maze-header">
            <div className="main-information">
                <div className="maze-header-title">
                    <h1 className="label">
                        Maze ID:
                    </h1>
                    <h1 className="maze-id">
                        {props.mazeId}
                    </h1>
                </div>
                <div className="split-h" />
                <div className="show-solutions-container"
                    onClick={handleShowSolutionClick}>
                    <h2 className="show-solutions-title">
                        Show Solutions
                    </h2>
                    <i className="far fa-lightbulb fa-2x solution-icon"></i>
                </div>
            </div>
            <div className="split-v" />
            <div className="solv-container">
                <div className="solv-algorithm">
                    <h2 className="solv-title">SOLVE ALGORITHM:</h2>
                    <select className="solv-algorithm-select"
                        onChange={handleSelectChange}>
                        {SolvAlgorithmsItems.map((item, index) => {
                            return (<option
                                className={item.cName}
                                key={index}
                                value={item.value}>
                                {item.title}
                            </option>)
                        })}
                    </select>
                </div>
                <div className="split-v" />
                <div className="solv-button-containder"
                    onClick={handleSolveClick}>
                    <h2 className="solv-button-title">
                        Solve
                    </h2>
                    <i className="fas fa-search-location fa-2x solve-icon"></i>
                </div>
            </div>
            <div className="split-v" />
            <div className="additional-information">
                <h3 className="additional-information-header">
                    Generate Additional Information:
                </h3>
                <div className="split-h" />
                <div className="additional-information-data">
                    <h3 className="label">
                        Height:
                    </h3>
                    <h3 className="maze-height">
                        {props.height}
                    </h3>
                    <div className="split-v" />
                    <h3 className="label">
                        Width:
                    </h3>
                    <h3 className="maze-width">
                        {props.width}
                    </h3>
                </div>
                <div className="split-h" />
                <div className="additional-information-data">
                    <h3 className="label">
                        Generate Algorithm Type:
                    </h3>
                    <h3 className="maze-gen-algorithm">
                        {props.genAlgorithmType}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default GenMazeHeader