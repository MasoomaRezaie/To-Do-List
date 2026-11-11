import { useCallback, useContext, useState } from "react";
import AddTask from "./AddTask";
import { fetchApi } from "../service/fetchApi";
import { Trash } from 'lucide-react';
import { TaskContext } from "../context/TaskContext";

function Tasks() {
    const { tasks, setTasks } = useContext(TaskContext);

    const [showModal, setShowModal] = useState(false);

    const toggleTask = useCallback(async(task) => {
        const updatedTask = await fetchApi("tasks", "PATCH", task.id, {completed:!task.completed})

        setTasks(prev =>
                prev.map(t =>
                    t.id === task.id ? updatedTask : t
                )
            );
    }, [setTasks])


    async function deleteTask(task) {
        await fetchApi("tasks", "DELETE", task.id);
        setTasks(prev => prev.filter(t => t.id !== task.id));
    }

    return (
        <div className="w-full bg-white/40 dark:bg-purple-900/10 dark:border dark:border-purple-900/45 rounded-3xl p-3">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold">Tasks</h1>
                <button
                    className="bg-purple-500 dark:bg-purple-600/80 text-white rounded px-3 py-1 hover:translate-0.5 duration-300"
                    onClick={() => setShowModal(true)}
                >
                    Add Task
                </button>
            </div>
            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 z-10 flex items-center justify-center bg-black/40">
                    <AddTask setTasks={setTasks} onClose={() => setShowModal(false)}/>
                </div>
            )}

            {tasks.map(task => (
                <div key={task.id}>
                    <div className="bg-white/40 dark:bg-purple-600/20 shadow-md rounded-lg p-2 my-2 flex gap-2 justify-between">
                        <div>
                            <input type="checkbox" checked={task.completed} onChange={()=> toggleTask(task)} 
                            className="task-checkbox w-5 h-5 cursor-pointer"/>
                            <span className="inline-block -translate-y ml-2">{task.title}</span>
                        </div>
                        <button type="button" className="hover:translate-0.5" onClick={() => deleteTask(task)}>
                            <Trash />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tasks;