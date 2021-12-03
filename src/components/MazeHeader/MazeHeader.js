import React from "react";
import "./MazeHeader.css"

const MazeHeader = (props) => {
    return (
        <div className="maze-header">
            <div className="maze-header-title">
                <h1 className="label">
                    Maze ID:
                </h1>
                <h1 className="maze-id">
                    {props.mazeId}
                </h1>
            </div>
            <div className="additional-information">
                <h3>
                    Additional Information:
                </h3>
                <div className="split" />
                <h3 className="label">
                    Height:
                </h3>
                <h3 className="maze-height">
                    {props.height}
                </h3>
                <div className="split" />
                <h3 className="label">
                    Width:
                </h3>
                <h3 className="maze-width">
                    {props.width}
                </h3>
            </div>
        </div>

    )
}

export default MazeHeader