import { React, useEffect, useState } from "react";
import useApi from "../../api/useApi";
import MazeCard from "./MazeCard/MazeCard";
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";
import MazeListColumnName from "./MazeListColumnName";
import "./MazeList.css";

const MazeList = () => {
    const api = useApi();
    const [mazes, setMazes] = useState([])
    const [listClicked, setListClicked] = useState(false)

    useEffect(() => {
        getMazes();
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
                    {mazes.map((item, index) => {
                        return (
                            <MazeCard
                                key={index}
                                id={item.id}
                                height={item.height}
                                width={item.width}
                                algorithmType={normalizeAlgorithmName(item.algorithmType)}
                                mazes={mazes}
                            />)
                    })}
                </ul>
            </div>
        </div>

    )
}

export default MazeList;