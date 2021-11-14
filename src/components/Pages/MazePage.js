import React, { useEffect, useState } from "react";
import axios from "axios"

const MazePage = () => {

    const [maze, setMaze] = useState([])

    useEffect(() => {
        getMaze()
        console.log("MAZE")
    }, [])

    async function getMaze() {
        // const maze = await useApi.getMaze(1)
        // console.log("MAZE" + maze)
        // setMaze(maze)
        try {
            const maze = axios.get("http://192.168.0.115:8080/api/maze/" + 1)
            return maze
        } catch (error) {
    
        }
    }

    return (
        <div>
            {/* {maze.mazeCellsList.map((mazeCell) =>
            <MazeCell 
            mazeCell={mazeCell}/>)} */}
        </div>
    );
}

export default MazePage;