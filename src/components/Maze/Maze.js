import { React, useEffect, useState } from "react";
import MazeCell from "./MazeCell/MazeCell";
import ReactTooltip from "react-tooltip";
import './Maze.css'

const Maze = (props) => {

    const [solveCells, setSolveCells] = useState([])
    const [startCellId, setStartCellId] = useState(null)
    const [endCellId, setEndCellId] = useState(null)

    const [showStartSign, setShowStartSign] = useState(false)
    const [showEndSign, setShowEndSign] = useState(false)

    useEffect(() => {
        if (props.hasOwnProperty('solveCells') && props.solveCells.length > 0) {
            setSolveCells(props.solveCells)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.solveCells])

    const columnStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(" + props.maze.width + ", 60px)"
    };

    const rowStyle = {
        display: "grid",
        gridTemplateRows: "repeat(" + props.maze.height + ", 60px)"
    };

    const checkCell = (cell) => {
        for (var i = 0; i < solveCells.length; i++) {
            if (cell.id === solveCells[i].id) {
                cell.number = i

                if (i === 0)
                    cell.cellState = "START"
                else if (i === solveCells.length - 1)
                    cell.cellState = "END"
                else
                    cell.cellState = "VISITED"
            }
        }
        console.log(cell.walls)
    }

    const handleCellClicked = (cellId) => {
        if (solveCells.length === 0) {
            if (startCellId === null && cellId !== endCellId) {
                setStartCellId(cellId)
                props.handleSetStartCell(cellId)
                setShowStartSign(true)
                props.cells.find(cell => cell.id === cellId).cellState = "START"
            } else if (endCellId === null && cellId !== startCellId) {
                setEndCellId(cellId)
                props.handleSetEndCell(cellId)
                setShowEndSign(true)
                props.cells.find(cell => cell.id === cellId).cellState = "END"
            } else if (cellId === startCellId) {
                setStartCellId(null)
                props.handleSetStartCell(null)
                setShowStartSign(false)
                props.cells.find(cell => cell.id === cellId).cellState = "UNVISITED"
            } else if (cellId === endCellId) {
                setEndCellId(null)
                props.handleSetEndCell(null)
                setShowEndSign(false)
                props.cells.find(cell => cell.id === cellId).cellState = "UNVISITED"
            }
        }
    }

    const setCellTip = "Click on maze to set START and END cells!<br/>If You don't set that START and END cell will be chosen randomly.<br/>(If you wanna reset clik again to cell)"
    return (
        <>
            <div className="maze">
                <div className="set-cells-wrapper">
                    {solveCells.length === 0 && <i className="fas fa-question-circle fa-3x set-cells-info"
                        data-html="true"
                        data-tip={setCellTip}
                        data-for='toolTip' data-place='top' />}
                    <ReactTooltip id="toolTip" />
                    <h3 className="set-cells-title">
                        SET START & END CELLS
                    </h3>
                    {(solveCells.length > 0 || showStartSign) && <div className="start-maze-sign signs-wrapper">Start</div>}
                    {solveCells.length > 0 && <div className="visited-maze-sign signs-wrapper">Vist.</div>}
                    {(solveCells.length > 0 || showEndSign) && <div className="end-maze-sign signs-wrapper">End</div>}
                </div>
                <div className="maze-background">
                    <div style={rowStyle}>
                        <div style={columnStyle}>
                            {props.cells.map((cell, index) => {
                                checkCell(cell)
                                return (<MazeCell
                                    key={index}
                                    cell={cell}
                                    handleCellClicked={handleCellClicked}
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