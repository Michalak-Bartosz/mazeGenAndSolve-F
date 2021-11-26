import React from "react";
import MazeCell from "../Maze/MazeCell";
import "./Page.css"

function GeneratePage(props) {

    return (
        <div className="page-backgroud">
            <div className="page">
                <MazeCell />
                <MazeCell />
            </div>
        </div>
    )
}

export default GeneratePage