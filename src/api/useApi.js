import React from "react";
import axios from "axios"

const useApi = () => {

    async function getMaze(mazeId) {
        try {
            const maze = axios.get("https://lcalhost:8080//api/maze/" + mazeId)
            return maze
        } catch (error) {
    
        }
    }

}

export default useApi
