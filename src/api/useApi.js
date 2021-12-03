// import { useErrorStatus } from "errors/ErrorHandler";
import useHttpApi from "./useHttpApi";

const useApi = () => {

    const httpApi = useHttpApi();
    const { setErrorStatusCode } = "";

    function handleErrors(error) {
        setErrorStatusCode(error.status);
        throw error;
    }

    async function getMaze(mazeId) {
        try {
            const maze = await httpApi.get(`${mazeId}`);
            return maze;
        } catch (error) {
            handleErrors(error);
        }
    }

    
    async function getMazeCells(mazeId) {
        try {
            const mazeCells = await httpApi.get(`${mazeId}/cells`);
            return mazeCells;
        } catch (error) {
            handleErrors(error);
        }
    }

    async function getMazes() {
        try {
            const mazes = await httpApi.get("mazes");
            return mazes;
        } catch (error) {
            handleErrors(error);
        }
    }

    async function addMaze(mazeBody) {
        try {
            const maze = await httpApi.post("maze", mazeBody);
            return maze;
        } catch (error) {
            handleErrors(error);
        }
    }

    async function deleteMaze(mazeId) {
        try {
            await httpApi.remove(`${mazeId}`);
        } catch (error) {
            handleErrors(error);
        }
    }
    return {
        getMaze,
        getMazeCells,
        getMazes,
        addMaze,
        deleteMaze
    };
}

export default useApi
