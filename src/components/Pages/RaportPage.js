import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";
import Maze from "../Maze/Maze";
import SolvMazeHeader from "../MazeHeader/SolvMazeHeader";

function RaportPage() {
    const api = useApi()
    const queryParams = new URLSearchParams(window.location.search)
    const solveCount = queryParams.get('solveCount')
    const [solutionList, setSolutionList] = useState([])

    useEffect(() => {
        getSolveIdList()
    }, [])

    const getSolveIdList = () => {
        for (var i = 0; i < solveCount; i++) {
            getSolutionAndMaze(queryParams.get('solveId' + i))
        }
    }

    async function getSolutionAndMaze(solutionId) {
        try {
            const mazeSolution = await api.getSolution(solutionId)
            const maze = await api.getMaze(mazeSolution.mazeId)
            const solveCells = await api.getSolveMazeCells(mazeSolution.mazeId, mazeSolution.solveId);
            const cells = await api.getMazeCells(mazeSolution.mazeId);
            setSolutionList(prevList => [...prevList, { maze, mazeSolution, cells, solveCells }])
        } catch (error) { }
    }

    const normalizeAlgorithmName = (algorithmValue) => {
        const algorithmItem = GenAlgorithmsItems.find(({ value }) => value === algorithmValue)
        return algorithmItem.title;
    }

    return (
        <div className="page-backgroud">
            <div className="page">
                {solutionList.map((item, index1, index2, index3) => {
                    return (<div className="compare-wrapper"
                        key={index1}>
                        <SolvMazeHeader
                            key={index2}
                            mazeId={item['maze'].id}
                            solveId={item['mazeSolution'].solveId}
                            stepsNumber={item["solveCells"].lenght}
                            solveAlg={item["mazeSolution"].solveAlgorithmType}
                            height={item["maze"].height}
                            width={item["maze"].width}
                            genAlgorithmType={normalizeAlgorithmName(item["maze"].algorithmType)} />
                        <Maze
                            key={index3}
                            maze={item["maze"]}
                            cells={item["cells"]}
                            solveCells={item["solveCells"]} />
                    </div>)
                })}
            </div>
        </div>
    )
}

export default RaportPage