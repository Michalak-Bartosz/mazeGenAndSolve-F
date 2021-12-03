import React from "react";
import MazeCell from "./MazeCell/MazeCell";
import './Maze.css'

const Maze = (props) => {

    const cells = props.cells
    const maze = props.maze

    const columnStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(" + maze.width + ", 60px)"
    };

    const rowStyle = {
        display: "grid",
        gridTemplateRows: "repeat(" + maze.height + ", 60px)"
    };

    return (
        <>
            <div className="maze">
                <div className="maze-background">
                    <div style={rowStyle}>
                        <div style={columnStyle}>
                            {cells.map((cell, index) => {
                                return (<MazeCell
                                    key={index}
                                    cell={cell}
                                />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Maze