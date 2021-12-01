import { React, useState } from "react";
import { GenAlgorithmsItems } from "../ItemLists/GenAlgorithmsItems";
import "./Menu.css"
import useApi from "../../api/useApi";

const Menu = () => {
    const api = useApi();

    const [width, setWidth] = useState(2);
    const [height, setHeight] = useState(2);
    const [algorithm, setAlgorithm] = useState("RandomDFS")

    const handleWidthChange = (event) => {
        setWidth(event.target.value)
    }

    const handleHeightChange = (event) => {
        setHeight(event.target.value)
    }

    const handleSelectChange = (event) => {
        setAlgorithm(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const mazeBody = {
            height: height,
            width: width,
            algorithmType: algorithm
        }
        console.log(mazeBody)
        sendMazeBody(mazeBody)
    }

    async function sendMazeBody(mazeBody) {
        try {
            await api.addMaze(mazeBody);
        } catch (error) { }
    }

    return (
        <form className="main-page-menu"
            onSubmit={handleSubmit}>
            <h1 className="title">SELECT PARAMETERS OF MAZE</h1>
            <div className="size-container">
                <h2 className="size-title">SIZE</h2>

                <div className="line" />
                <div className="width-container">
                    <h3>WIDTH:</h3>
                    <input className="input-value"
                        type="number"
                        value={width}
                        min="2"
                        max={100}
                        onChange={handleWidthChange} />
                    <h4>Number of cells</h4>
                </div>
                <div className="height-container">
                    <h3>HEIGHT:</h3>
                    <input className="input-value"
                        type="number"
                        value={height}
                        min="2"
                        max="100"
                        onChange={handleHeightChange} />
                    <h4>Number of cells</h4>
                </div>

            </div>
            <div className="generate-container">
                <h2 className="generate-title">GENERATE ALGORITHM</h2>
                <div className="line" />
                <select className="generate-algorithm-select"
                    onChange={handleSelectChange}>
                    {GenAlgorithmsItems.map((item, index) => {
                        return (<option
                            className={item.cName}
                            key={index}
                            value={item.value}>
                            {item.title}
                        </option>)
                    })}
                </select>
            </div>
            <input className="submit-button"
                type="submit"
                value="Generate" />
        </form>
    );
}

export default Menu