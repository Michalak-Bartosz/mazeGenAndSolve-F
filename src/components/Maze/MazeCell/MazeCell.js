import React from "react";
import './MazeCell.css'

const MazeCell = (props) => {

    const cell = props.cell
    const cellState = cell.cellState
    const walls = new Map(Object.entries(cell.walls))

    const cellStyle = {
        borderTopWidth: walls.get("TOP").isVisible ? "5px" : "0px",
        borderBottomWidth: walls.get("BOTTOM").isVisible ? "5px" : "0px",
        borderLeftWidth: walls.get("LEFT").isVisible ? "5px" : "0px",
        borderRightWidth: walls.get("RIGHT").isVisible ? "5px" : "0px",

        marginTop: walls.get("TOP").isVisible ? "0px" : "5px",
        marginBottom: walls.get("BOTTOM").isVisible ? "0px" : "5px",
        marginLeft: walls.get("LEFT").isVisible ? "0px" : "5px",
        marginRight: walls.get("RIGHT").isVisible ? "0px" : "5px",

        animation: "show-animation 2s",
    };

    const animationStyle = {
        animation: "show-animation 2s",
        animationDelay: cell.number/8 + "s",
        animationFillMode: "both"
    }

    const getCell = () => {
        return (<div
            style={cellStyle}
            className="maze-cell"
            onClick={handleOnClick} >
            <div style={animationStyle} className={getClassName()}>
                <h3>
                    {cell.number}
                </h3>
            </div>
        </div>)
    }

    const getClassName = () => {
        switch (cellState) {
            case 'START':
                return "start-maze-sign"
            case 'END':
                return "end-maze-sign"
            case 'VISITED':
                return "visited-maze-sign"
            default:
                return ""
        }
    }

    const handleOnClick = (event) => {
        props.handleCellClicked(cell.id)
    }

    return (
        <>
            {getCell()}
        </>
    );
}

export default MazeCell;