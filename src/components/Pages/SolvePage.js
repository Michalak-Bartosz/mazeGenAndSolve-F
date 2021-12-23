import { React, useState, useEffect } from "react";
import useApi from "../../api/useApi";
import MazeSolutionsList from "../MazeSolutionsList/MazeSolutionsList";
import SolvMazeHeader from "../MazeHeader/SolvMazeHeader"
import Maze from "../Maze/Maze"
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";

const SolvePage = () => {
    const api = useApi();

    const queryParams = new URLSearchParams(window.location.search)
    const mazeId = queryParams.get('mazeId')
    var solveId = queryParams.get('solveId')

    const [cells, setCells] = useState()
    const [solveCells, setSolveCells] = useState()
    const [maze, setMaze] = useState()
    const [solution, setSolution] = useState()
    const [showSolutions, setShowSolutions] = useState(false)

    useEffect(() => {
        getMazeParamsAndCells()
        getSolveParamsAndCells()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [solveId])

    async function getMazeParamsAndCells() {
        try {
            const maze = await api.getMaze(mazeId)
            const cells = await api.getMazeCells(mazeId)
            setMaze(maze)
            setCells(cells)
        } catch (error) { }
    }

    async function getSolveParamsAndCells() {
        try {
            const solveCells = await api.getSolveMazeCells(mazeId, solveId)
            const solution = await api.getSolution(solveId)
            setSolution(solution)
            setSolveCells(solveCells)
        } catch (error) { }
    }

    const normalizeAlgorithmName = (genAlgorithmType) => {
        const algorithmItem = GenAlgorithmsItems.find(({ value }) => value === genAlgorithmType)
        if (algorithmItem !== undefined)
            return algorithmItem.title;
        else
            return genAlgorithmType
    }

    const handleShowSolutionClick = () => {
        setShowSolutions(!showSolutions)
    }

    return (
        <div className="page-backgroud">
            <div className="page">
                {cells !== undefined &&
                    solveCells !== undefined &&
                    maze !== undefined &&
                    solution !== undefined &&
                    <>
                        <SolvMazeHeader
                            mazeId={maze.mazeId}
                            height={maze.height}
                            width={maze.width}
                            genAlgorithmType={normalizeAlgorithmName(maze.genAlgorithmType)}
                            generateTime={maze.generateTime}
                            solveId={solution.solveId}
                            solveAlgorithmType={solution.solveAlgorithmType}
                            solveTime={solution.solveTime}
                            stepsNumber={solveCells.length}
                            handleShowSolutionClick={handleShowSolutionClick} />
                        <Maze
                            maze={maze}
                            cells={cells}
                            solveCells={solveCells} />
                        {showSolutions &&
                            <MazeSolutionsList
                                maze={maze} />}
                    </>}
            </div>
        </div>
    )
}

export default SolvePage