import React from "react";
import MazeCell from "../Maze/MazeCell";
import "./Page.css"

function GeneratePage() {

    return (
        <div className="page">
            <MazeCell />
            <MazeCell />
        </div>
    )
}

export default GeneratePage