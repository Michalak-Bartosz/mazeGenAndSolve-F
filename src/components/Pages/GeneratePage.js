import { React, useState, useEffect } from "react";
import useApi from "../../api/useApi";
import MazeList from "../MazeList/MazeList";
import MazeHeader from "../MazeHeader/MazeHeader"
import "./Page.css"
import Maze from "../Maze/Maze";

function GeneratePage(props) {
    const api = useApi();

    const queryParams = new URLSearchParams(window.location.search);
    const mazeId = queryParams.get('mazeId');

    const [cells, setCells] = useState([])
    const [maze, setMaze] = useState([])

    useEffect(() => {
        getMazeCells();
        getMazeParams();
    }, []);

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

    return (
        <div className="page-backgroud">
            <div className="page">
                <MazeHeader
                    mazeId={maze.id}
                    height={maze.height}
                    width={maze.width} />
                <Maze
                    maze={maze}
                    cells={cells} />
            </div>
        </div>
    )
}

export default GeneratePage