import React from "react";
import "./Page.css"
import Menu from "../Menu/Menu"
import MazeList from "../MazeList/MazeList";

function HomePage() {

    return (
        <div className="page-backgroud">
            <div className="page">
                <Menu />
            </div>
        </div>
    )
}

export default HomePage