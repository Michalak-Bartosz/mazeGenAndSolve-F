import React from "react";
import { useHistory } from "react-router-dom";
import "./SolvMazeHeader.css"

const SolvMazeHeader = (props) => {
    let history = useHistory();

    const handleShowMazeClick = (event) => {
        history.push("/generate/?mazeId=" + props.mazeId)
    }

    const handleShowSolutionClick = (event) => {
        if (props.handleSolveIdChange !== undefined)
            props.handleSolveIdChange(null)
        history.push("/solve/?mazeId=" + props.mazeId)
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
            <div className="split-v" />
            <div className="main-information">
                {props.solveId &&
                    <>
                        <div className="maze-header-title">
                            <h1 className="label">
                                Solve ID:
                            </h1>
                            <h1 className="maze-id">
                                {props.solveId}
                            </h1>
                        </div>
                        <div className="split-h" />
                    </>}

                <div className="show-maze-container"
                    onClick={handleShowMazeClick}>
                    <h2 className="show-maze-title">
                        Create Solution
                    </h2>
                    <i className="fas fa-arrows-alt fa-2x maze-icon"></i>
                </div>
            </div>
            {props.solveId &&
                <>
                    <div className="split-v" />
                    <div className="additional-information">
                        <h3 className="additional-information-header">
                            Solve Additional Information:
                        </h3>
                        <div className="split-h" />
                        <div className="additional-information-data">
                            <h3 className="label">
                                Steps Number:
                            </h3>
                            <h3 className="solve-steps">
                                {props.stepsNumber}
                            </h3>
                            <div className="split-v" />
                            <h3 className="label">
                                Time:
                            </h3>
                            <h3 className="solve-time">
                                TODO
                            </h3>
                        </div>
                        <div className="split-h" />
                        <div className="additional-information-data">
                            <h3 className="label">
                                Solve Algorithm Type:
                            </h3>
                            <h3 className="maze-solv-algorithm">
                                {props.solveAlg}
                            </h3>
                        </div>
                    </div>
                </>}
        </div>
    )
}

export default SolvMazeHeader