import React from "react";
import './MazeCell.css'

const MazeCell = (props) => {

    const cell = props.cell
    const cellState = cell.cellState
    const walls = new Map(Object.entries(cell.walls))

    const cellStyle = {
        borderTopWidth: walls.get("TOP").visible ? "5px" : "0px",
        borderBottomWidth: walls.get("BOTTOM").visible ? "5px" : "0px",
        borderLeftWidth: walls.get("LEFT").visible ? "5px" : "0px",
        borderRightWidth: walls.get("RIGHT").visible ? "5px" : "0px",

        marginTop: walls.get("TOP").visible ? "0px" : "5px",
        marginBottom: walls.get("BOTTOM").visible ? "0px" : "5px",
        marginLeft: walls.get("LEFT").visible ? "0px" : "5px",
        marginRight: walls.get("RIGHT").visible ? "0px" : "5px"
    };

    const getCell = () => {
        return <div
            style={cellStyle}
            className={getClassName()}
            onClick={handleOnClick} />
    }

    const getClassName = () => {
        switch (cellState) {
            case 'START':
                return "start-maze-cell"
            case 'END':
                return "end-maze-cell"
            case 'VISITED':
                return "visited-maze-cell"
            default:
                return "maze-cell"
        }
    }

    const handleOnClick = (event) => {
        console.log(cell.id)
    }

    return (
        <>
            {getCell()}
        </>
    );
}

export default MazeCell;