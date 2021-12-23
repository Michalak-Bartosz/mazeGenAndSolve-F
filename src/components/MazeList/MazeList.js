import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import MazeCard from "./MazeCard/MazeCard";
import MazeListColumnName from "./MazeListColumnName";
import { useHistory } from "react-router-dom";
import "./MazeList.css";

const MazeList = () => {
    const api = useApi();
    let history = useHistory();
    history.listen(() => setListClicked(false))

    const [mazes, setMazes] = useState([])
    const [listClicked, setListClicked] = useState(false)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        getMazes();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listClicked, isDelete]);

    async function getMazes() {
        try {
            const mazes = await api.getMazes();
            setMazes(mazes);
        } catch (error) { }
    }

    async function deleteMaze(mazeId) {
        try {
            await api.deleteMaze(mazeId);
        } catch (error) { }
        setIsDelete(!isDelete)
    }

    const handleListClicked = () => setListClicked(!listClicked)

    return (
        <div className="margin">
            <div className="wrapper">
                <i className={listClicked ?
                    "fas fa-angle-double-down fa-4x arrow-icon" :
                    "fas fa-angle-double-up fa-4x arrow-icon"}
                    onClick={handleListClicked} />
                <div className="maze-list-container">
                    <div className="maze-list-header">
                        <div className="reload-container"
                            onClick={getMazes}>
                            <h2 className="reload-title">
                                Reload
                            </h2>
                            <i className="fas fa-sync-alt fa-2x reload-icon"></i>
                        </div>
                        <h1 className="maze-list-title">
                            Maze List . . .
                        </h1>
                    </div>
                    <ul className={listClicked ? "maze-list" : "maze-list-hide"}>
                        <MazeListColumnName />
                        {mazes.length > 0 ? mazes.map((maze, index) => {
                            return (
                                <MazeCard
                                    key={index}
                                    maze={maze}
                                    // mazeId={maze.mazeId}
                                    // height={maze.height}
                                    // width={maze.width}
                                    // genAlgorithmType={normalizeAlgorithmName(maze.genAlgorithmType)}
                                    deleteMaze={deleteMaze}
                                />)
                        }) :
                            <h2 className="none-records">
                                NONE MAZES
                            </h2>}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MazeList;