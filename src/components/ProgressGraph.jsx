import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function ProgressGraph() {
    const { tasks } = useContext(TaskContext);

    const completed = tasks.filter(task => task.completed).length
    const progress = completed ? Math.round((completed/tasks.length)*100) : 0

    return (
        <section className="w-full md:w-[30%] h-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45 rounded-xl md:rounded-2xl p-2">
            <div className="md:hidden">
                <div className="flex justify-between items-center mb-1.5">
                    <h2 className="text-lg font-semibold">Today Progress</h2>
                    <span className="font-bold">{progress}%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-purple-400">
                    <div className="h-full rounded-full bg-purple-600 transition-[width] duration-800"
                        style={{ width: `${progress}%` }}/>
                </div>
            </div>
            <div className="hidden md:block justify-items-center">
                <h2 className="text-xl">Today Progress</h2>
                <div className="flex justify-center my-2">
                    <div className="relative w-32 h-32">
                        <div className="w-full h-full rounded-full"
                            style={{
                                background: `conic-gradient(#9810fa ${progress}%, transparent ${progress}%)`
                            }}
                        ></div>
                        <div className="absolute inset-1.5 rounded-full bg-purple-400 dark:bg-slate-900 flex items-center justify-center">
                            <span className="text-4xl font-bold text-purple-600">{progress}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProgressGraph;