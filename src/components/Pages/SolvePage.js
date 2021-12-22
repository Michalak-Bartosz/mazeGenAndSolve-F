import { React, useState, useEffect } from "react";
import useApi from "../../api/useApi";
import MazeSolutionsList from "../MazeSolutionsList/MazeSolutionsList";
import SolvMazeHeader from "../MazeHeader/SolvMazeHeader"
import Maze from "../Maze/Maze"

const SolvePage = () => {
    const api = useApi();

    const [cells, setCells] = useState([])
    const [solveCells, setSolveCells] = useState([])
    const [maze, setMaze] = useState(null)

    const queryParams = new URLSearchParams(window.location.search)
    const mazeId = queryParams.get('mazeId')
    const solveAlg = queryParams.get('solveAlg')
    const [solveId, setSolveId] = useState(queryParams.get('solveId'))

    useEffect(() => {
        if (mazeId !== null) {
            getMazeParams();
            getMazeCells();
        }
    }, [mazeId]);

    useEffect(() => {
        if (solveId !== null) {
            getMazeCells();
            getSolveMazeCells();
        }
    }, [solveId]);

    async function getMazeCells() {
        try {
            const cells = await api.getMazeCells(mazeId);
            setCells(cells)
        } catch (error) { }
    }

    async function getSolveMazeCells() {
        try {
            const solveCells = await api.getSolveMazeCells(mazeId, solveId);
            setSolveCells(solveCells)
        } catch (error) { }
    }

    async function getMazeParams() {
        try {
            const maze = await api.getMaze(mazeId);
            setMaze(maze)
        } catch (error) { }
    }

    const handleSolveIdChange = (solveId) => {
        setSolveId(solveId)
    }

    return (
        <div className="page-backgroud">
            <div className="page">
                {maze !== null &&
                    <SolvMazeHeader
                        mazeId={maze.id}
                        solveId={solveId}
                        stepsNumber={solveCells.length}
                        solveAlg={solveAlg}
                        height={maze.height}
                        width={maze.width}
                        genAlgorithmType={maze.algorithmType} 
                        handleSolveIdChange={handleSolveIdChange}/>}
                {solveId !== null && maze !== null &&
                    <Maze
                        maze={maze}
                        cells={cells}
                        solveCells={solveCells} />}
                {solveId === null && maze !== null &&
                    <MazeSolutionsList
                        maze={maze}
                        handleSolveIdChange={handleSolveIdChange} />}
            </div>
        </div>
    );
}

export default SolvePage;