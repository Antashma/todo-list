import { useState } from "react";
import Task from "./Task"
import tasksData from "./tasks-data";
//import axios from 'axios';

export default function TaskList() {
    const [tasks, setTasks] = useState(tasksData)

    return (
        <div>
            <h2>Things to do...</h2>

            <ul>
                {tasks.map(el => 
                    <Task key={el.id} taskId={el.id} text={el.text} completed={el.completed}/>
                )}
            </ul>
        </div>
    )
}


