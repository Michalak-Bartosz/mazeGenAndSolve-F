// import { useErrorStatus } from "errors/ErrorHandler";
import useHttpApi from "./useHttpApi";

const useApi = () => {

    const httpApi = useHttpApi();
    const { setErrorStatusCode } = "";

    function handleErrors(error) {
        setErrorStatusCode(error.status);
        throw error;
    }

    async function getMaze() {
        try {
            const maze = await httpApi.get("maze");
            return maze;
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

    return {
        getMaze,
        getMazes,
        addMaze
    };
}

export default useApi
