import { React, useState, useEffect } from "react";
import useApi from "../../api/useApi";
import GenMazeHeader from "../MazeHeader/GenMazeHeader"
import Maze from "../Maze/Maze";
import "./Page.css"
import MazeSolutionsList from "../MazeSolutionsList/MazeSolutionsList";

function GeneratePage(props) {
    const api = useApi();

    const queryParams = new URLSearchParams(window.location.search);
    const mazeId = queryParams.get('mazeId');

    const [cells, setCells] = useState()
    const [maze, setMaze] = useState()
    const [startCell, setStartCell] = useState(null)
    const [endCell, setEndCell] = useState(null)
    const [showSolutions, setShowSolutions] = useState(false)

    useEffect(() => {
        getMazeCells()
        getMazeParams()
        setShowSolutions(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mazeId]);

    async function getMazeCells() {
        try {
            const cells = await api.getMazeCells(mazeId);
            setCells(cells)
        } catch (error) { }
    }

    async function getMazeParams() {
        try {
            const maze = await api.getMaze(mazeId);
            setMaze(maze)
        } catch (error) { }
    }

    const handleSetStartCell = (cell) => {
        setStartCell(cell)
    }

    const handleSetEndCell = (cell) => {
        setEndCell(cell)
    }

    const handleShowSolutionClick = () => {
        setShowSolutions(!showSolutions)
    }

    return (
        <div className="page-backgroud">
            <div className="page">
                {maze !== undefined &&
                    cells !== undefined &&
                    <>
                        <GenMazeHeader
                            maze={maze}
                            startCell={startCell}
                            endCell={endCell}
                            handleShowSolutionClick={handleShowSolutionClick} />
                        <Maze
                            maze={maze}
                            cells={cells}
                            handleSetStartCell={handleSetStartCell}
                            handleSetEndCell={handleSetEndCell} />
                        {showSolutions &&
                            <MazeSolutionsList
                                maze={maze} />}
                    </>}
            </div>
        </div>
    )
}

export default GeneratePage