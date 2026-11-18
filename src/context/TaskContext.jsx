import { createContext, useEffect, useState } from "react";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
    fetch("https://to-do-list-7ucn.onrender.com")
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error(err));
    }, []);

    return (
        <TaskContext.Provider value={{tasks, setTasks}}>
            {children}
        </TaskContext.Provider>
    )
}