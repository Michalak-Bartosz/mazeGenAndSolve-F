import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import MazeCard from "../MazeCard/MazeCard";
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";
import "./MazeList.css";

const MazeList = () => {
    const api = useApi();
    const [mazes, setMazes] = useState([])
    const [listClicked, setListClicked] = useState(false)

    useEffect(() => {
        getMazes();
        console.log(mazes)
    }, [listClicked]);

    async function getMazes() {
        try {
            const mazes = await api.getMazes();
            setMazes(mazes);
        } catch (error) { }
    }

    const normalizeAlgorithmName = (algorithmValue) => {
        const algorithmItem = GenAlgorithmsItems.find(({ value }) => value === algorithmValue)
        return algorithmItem.title;
    }


    const handleListClicked = () => setListClicked(!listClicked)

    return (
        <div className="wrapper">
            <i className="fas fa-angle-double-up fa-4x arrow-icon"
                onClick={handleListClicked} />
            <div className="maze-list-container">
                <div className="maze-list-header">
                    <div className="reload-container"
                        onClick={getMazes}>
                        <h2 className="reload-title">
                            Reload
                        </h2>
                        <i className="fas fa-sync-alt fa-2x"></i>
                    </div>
                    <h1 className="maze-list-title">
                        Maze List . . .
                    </h1>
                </div>
                <ul className={listClicked ? "maze-list" : "maze-list-hide"}>
                    {mazes.map((item, index) => {
                        return (
                            <MazeCard
                                id={item.id}
                                height={item.height}
                                width={item.width}
                                algorithmType={normalizeAlgorithmName(item.algorithmType)}
                            />)
                    })}
                </ul>
            </div>
        </div>

    )
}

export default MazeList;