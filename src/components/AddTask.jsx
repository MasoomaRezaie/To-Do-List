import { fetchApi } from "../service/fetchApi";

function AddTask({onClose, setTasks}) {

    const addTask = async(newT) =>{
        if (!newT.trim()) return;

        const newTask = await fetchApi("tasks", "POST", null,
            {
                title: newT.trim(),
                completed: false
            }
        );  

        // Update React state
        setTasks(prev => [...prev, newTask]);

        // Close the modal
        onClose();

    }
    return (
        <div className="w-100 bg-white dark:bg-slate-900 shadow-xl rounded-2xl">
            <div className="w-100 bg-white dark:bg-purple-900/10 dark:border dark:border-purple-900/45 shadow-xl rounded-2xl p-5">
            <label>
                Title
                <input type="text" id="newTask"
                    className="h-8 w-full bg-white dark:bg-slate-900 border-l-2 border-b-2 border-purple-600 rounded-bl-lg my-2 px-2 focus:outline-none
                    focus:border-2 focus:rounded-tr-lg"/>
            </label>

            <div className="flex gap-2 justify-end mt-3">
                <button className="bg-purple-500 dark:bg-purple-600 text-white rounded px-3 py-1 hover:translate-0.5 duration-300"
                    onClick={() => addTask(document.getElementById("newTask").value)}>Add</button>
                <button className="bg-purple-500 dark:bg-purple-600 text-white rounded px-3 py-1 hover:translate-0.5 duration-300"
                    onClick={onClose}>Cancel</button>
            </div>
</div>
        </div>
    );
}

export default AddTask;