
import { createContext, useEffect, useState } from "react";
import { fetchApi } from "../service/fetchApi";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchApi("tasks", "GET")
            .then(data => setTasks(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    );
}
