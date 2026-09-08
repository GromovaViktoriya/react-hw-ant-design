import {taskList} from "../constants/constants.js";

export const fetchTasks = ({setIsLoading, setIsError, setTasks}) => {
    setIsLoading(true);
    setIsError(false);

    setTimeout(() => {
        const isSuccess = Math.random() > 0.4;

        if (isSuccess) {
            setTasks(taskList);
            setIsError(false);
        } else {
            setTasks([]);
            setIsError(true);
        }

        setIsLoading(false);
    }, 1500);
}
