import { React, useState, useEffect } from "react";
import useApi from "../../api/useApi";
import GenMazeHeader from "../MazeHeader/GenMazeHeader"
import "./Page.css"
import Maze from "../Maze/Maze";

function GeneratePage(props) {
    const api = useApi();

    const queryParams = new URLSearchParams(window.location.search);
    const mazeId = queryParams.get('mazeId');

    const [cells, setCells] = useState([])
    const [maze, setMaze] = useState([])
    const [startCell, setStartCell] = useState(null)
    const [endCell, setEndCell] = useState(null)

    useEffect(() => {
        getMazeCells();
        getMazeParams();
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

    return (
        <div className="page-backgroud">
            <div className="page">
                <GenMazeHeader
                    mazeId={maze.id}
                    height={maze.height}
                    width={maze.width}
                    genAlgorithmType={maze.algorithmType}
                    startCell={startCell}
                    endCell={endCell} />
                <Maze
                    maze={maze}
                    cells={cells}
                    handleSetStartCell={handleSetStartCell}
                    handleSetEndCell={handleSetEndCell} />
            </div>
        </div>
    )
}

export default GeneratePage