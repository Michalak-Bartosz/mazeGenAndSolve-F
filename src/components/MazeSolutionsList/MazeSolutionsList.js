import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import MazeSolutionCard from "./MazeSolutionsCard/MazeSolutionCard";
import MazeSolutionsListColumnName from "./MazeSolutionsColumnName";
import "./MazeSolutionsList.css"

const MazeSolutionsList = (props) => {

    const api = useApi();
    const [solutionsList, setSolutionsList] = useState([])
    const [checkedSolutionsList, setCheckedSolutionsList] = useState([])
    const [checkCount, setCheckCount] = useState(0)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        if (props.maze !== undefined) {
            getMazeSolutions();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDelete])

    async function getMazeSolutions() {
        try {
            const mazeSolutions = await api.getSolutions(props.maze.mazeId);
            setSolutionsList(mazeSolutions)
        } catch (error) { }
    }

    async function deleteSolve(solveId) {
        try {
            await api.deleteSolve(solveId);
        } catch (error) { }
        setIsDelete(!isDelete)
    }

    const handleCheckSolution = (mazeId, solveId, action) => {
        if (action === "add") {
            setCheckedSolutionsList(prevList => [...prevList, [mazeId, solveId]])
            setCheckCount(prevCount => prevCount + 1)
        } else {
            setCheckedSolutionsList(prevList => [...prevList.filter(item => item !== [mazeId, solveId])])
            setCheckCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className="maze-solution-list-wrapper">
            <div className="maze-solution-list-header">
                <div className="reload-container"
                    onClick={getMazeSolutions}>
                    <h2 className="reload-title">
                        Reload
                    </h2>
                    <i className="fas fa-sync-alt fa-2x reload-icon"></i>
                </div>
                <h1 className="maze-solution-list-title">
                    Maze Solutions . . .
                </h1>
            </div>
            <ul className="maze-solution-list">
                <MazeSolutionsListColumnName
                    changeCheckCount={checkCount}
                    checkedSolutionsList={checkedSolutionsList} />
                {solutionsList.length > 0 ? solutionsList.map((item, index) => {
                    return (
                        <MazeSolutionCard
                            key={index}
                            solveId={item.solveId}
                            mazeId={item.mazeId}
                            solvAlgorithmType={item.solveAlgorithmType}
                            deleteSolve={deleteSolve}
                            handleCheckSolution={handleCheckSolution} />)
                }) :
                    <h2 className="none-records">
                        NONE MAZE SOLUTIONS
                    </h2>}
            </ul>
        </div>
    )
}

export default MazeSolutionsList