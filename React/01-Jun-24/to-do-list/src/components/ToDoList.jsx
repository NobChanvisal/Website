import React,{useState} from "react";

function ToDoList(){
    const [tasks,setTask] = useState(["Eat breakfast","Go to school","Eat Lunch"]);
    const [newTask,setNewTask] = useState("");//to store task

    function addTask(){
        if(newTask.trim() !== ""){
            setTask( t => [...t, newTask]);
        }
        setNewTask("");
    }
    function deleteTask(index){
        setTask(t => t.filter((_, i) => i !== index));
    }
    return(
        <div className="container">
            <h1>To Do List</h1>
            <input type="text"
            value={newTask}
            placeholder="Enter new task..."
            onChange={(e) => setNewTask(e.target.value)}
            />
            <button className="add-button" onClick={addTask}>Add Task</button>
            <ol>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                )}
            </ol>
        </div>
        
    )
}
export default ToDoList;