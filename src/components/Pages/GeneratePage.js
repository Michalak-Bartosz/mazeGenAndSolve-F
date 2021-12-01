import React from "react";
import MazeCell from "../Maze/MazeCell";
import MazeList from "../MazeList/MazeList";
import "./Page.css"

function GeneratePage(props) {

    return (
        <div className="page-backgroud">
            <div className="page">
                <MazeCell />
                <MazeCell />
                <MazeList />
            </div>
        </div>
    )
}

export default GeneratePage