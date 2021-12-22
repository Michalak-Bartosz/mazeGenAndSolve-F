import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import SolutionsCard from "./SolutionsCard/SolutionsCard";
import SolutionsListColumnName from "./SolutionsListColumnName";
import "./SolutionsList.css"

const SolutionsList = (props) => {

    const api = useApi();
    const [mazes, setMazes] = useState([])
    const [solutionsList, setSolutionsList] = useState([])
    const [checkedSolutionsList, setCheckedSolutionsList] = useState([])
    const [checkCount, setCheckCount] = useState(0)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        getMazes();
    }, [])

    useEffect(() => {
        if (mazes.length > 0) {
            getSolutionsForMazes()
        }
    }, [mazes])

    useEffect(() => {
        if (mazes.length > 0) {
            setSolutionsList([])
            getSolutionsForMazes()
            sortSolutionsList()
        }
    }, [isDelete])

    async function getMazeSolutions(mazeId) {
        try {
            const mazeSolutions = await api.getSolutions(mazeId);
            addSolutionsToList(mazeSolutions)
        } catch (error) { }
    }

    async function getMazes() {
        try {
            const mazes = await api.getMazes();
            setMazes(mazes);
        } catch (error) { }
    }

    async function deleteSolve(solveId) {
        try {
            await api.deleteSolve(solveId);
        } catch (error) { }
        setIsDelete(!isDelete)
    }

    const getSolutionsForMazes = () => {
        mazes.forEach(maze => getMazeSolutions(maze.id))
    }

    const addSolutionsToList = (newSolutions) => {
        setSolutionsList(prevList => [...prevList, ...newSolutions])
    }

    const sortSolutionsList = () => {
        setSolutionsList(prevList => [prevList.sort(function (a, b) { return Number(a.mazeId) - Number(b.mazeId) })])
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
        <div className="solution-list-wrapper">
            <div className="solution-list-header">
                <div className="reload-container"
                    onClick={getMazeSolutions}>
                    <h2 className="reload-title">
                        Reload
                    </h2>
                    <i className="fas fa-sync-alt fa-2x reload-icon"></i>
                </div>
                <h1 className="solution-list-title">
                    Solutions . . .
                </h1>
            </div>
            <ul className="solution-list">
                <SolutionsListColumnName
                    changeCheckCount={checkCount}
                    checkedSolutionsList={checkedSolutionsList} />
                {
                    solutionsList.length > 0 ? solutionsList.map((item, index) => {
                        return (
                            <SolutionsCard
                                key={index}
                                solveId={item.solveId}
                                mazeId={item.mazeId}
                                maze={mazes.find(maze => maze.id === item.mazeId)}
                                solvAlgorithmType={item.solveAlgorithmType}
                                deleteSolve={deleteSolve}
                                handleCheckSolution={handleCheckSolution}
                            />)
                    }) :
                        <h2 className="none-records">
                            NONE SOLUTIONS
                        </h2>
                }
            </ul>
        </div>
    )
}

export default SolutionsList