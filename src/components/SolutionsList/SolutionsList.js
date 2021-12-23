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
        getMazes()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (mazes.length > 0) {
            getSolutionsForMazes()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mazes])

    useEffect(() => {
        if (mazes.length > 0) {
            handleReload()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        mazes.forEach(maze => getMazeSolutions(maze.mazeId))
    }

    const addSolutionsToList = (newSolutions) => {
        setSolutionsList(prevList => [...prevList, ...newSolutions])
    }

    const sortSolutionsList = () => {
        setSolutionsList(prevList => [prevList.sort(function (a, b) { return Number(a.mazeId) - Number(b.mazeId) })])
    }

    const handleCheckSolution = (solveId, action) => {
        if (action === "add") {
            setCheckedSolutionsList(prevList => [...prevList, solveId])
            setCheckCount(prevCount => prevCount + 1)
        } else {
            setCheckedSolutionsList(prevList => [...prevList.filter(item => item !== solveId)])
            setCheckCount(prevCount => prevCount - 1)
        }
    }

    const handleReload = () => {
        setSolutionsList([])
        getSolutionsForMazes()
        sortSolutionsList()
    }

    return (
        <div className="solution-list-wrapper">
            <div className="solution-list-header">
                <div className="reload-container"
                    onClick={handleReload}>
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
                    key={-1}
                    changeCheckCount={checkCount}
                    checkedSolutionsList={checkedSolutionsList} />
                {solutionsList.length > 0 ? solutionsList.map((solution, index) => {
                    if (mazes.find(mazeItem => mazeItem.mazeId === solution.mazeId) !== undefined) {
                        return (
                            <SolutionsCard
                                key={index}
                                solveId={solution.solveId}
                                mazeId={solution.mazeId}
                                maze={mazes.find(mazeItem => mazeItem.mazeId === solution.mazeId)}
                                solvAlgorithmType={solution.solveAlgorithmType}
                                handleDeleteSolve={deleteSolve}
                                handleCheckSolution={handleCheckSolution}
                            />)
                    } else {
                        return (<div key={-2} />)
                    }
                }) :
                    <h3 className="none-records"
                        key={-3}>
                        NONE SOLUTIONS
                    </h3>}
            </ul>
        </div>
    )
}

export default SolutionsList