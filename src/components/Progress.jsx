import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Progress() {
    const { tasks } = useContext(TaskContext);

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const incomplete = total - completed;

    return(
        <div className="flex gap-3">
            <div className="h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-2xl p-3 my-4">
                <h3>Total Tasks</h3>
                <p className="text-2xl font-bold">{total}</p>
            </div>
            <div className="h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-2xl p-3 my-4">
                <h3>Completed Tasks</h3>
                <p className="text-2xl font-bold">{completed}</p>
            </div>
            <div className="h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-2xl p-3 my-4">
                <h3>Incomplete Tesks</h3>
                <p className="text-2xl font-bold">{incomplete}</p>
            </div>
        </div>
    )
}

export default Progress