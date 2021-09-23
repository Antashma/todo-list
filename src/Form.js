import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Enter task..."/>
                <button>Add Task</button>
                <button>Clear Completed</button>
            </form>
        </div>
    )
}
