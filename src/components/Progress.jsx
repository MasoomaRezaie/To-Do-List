import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function Progress() {
    const { tasks } = useContext(TaskContext);

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const incomplete = total - completed;

    return(
        <div className="flex gap-1.5 md:gap-3">
            <div className="h-full md:h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-xl md:rounded-2xl p-2 md:p-3 my-1.5 md:my-4">
                <h3 className="text-sm md:text-md">Total <span className="block md:inline">Tasks</span></h3>
                <p className="text-xl md:text-2xl font-bold">{total}</p>
            </div>
            <div className="h-full md:h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-xl md:rounded-2xl p-2 md:p-3 my-1.5 md:my-4">
                <h3 className="text-sm md:text-md">Completed <span className="block md:inline">Tasks</span></h3>
                <p className="text-xl md:text-2xl font-bold">{completed}</p>
            </div>
            <div className="h-full md:h-20 w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45
             rounded-xl md:rounded-2xl p-2 md:p-3 my-1.5 md:my-4">
                <h3 className="text-sm md:text-md">Incomplete <span className="block md:inline">Tasks</span></h3>
                <p className="text-xl md:text-2xl font-bold">{incomplete}</p>
            </div>
        </div>
    )
}

export default Progress