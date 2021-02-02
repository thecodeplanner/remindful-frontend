import TaskForm from './TaskForm'
import React, {useState} from "react"

function TaskDetails({tasks, dayId}) {
    const [allTasks, setAllTasks] = useState(tasks)

    // console.log(allTasks)

    function handleAddTask(newTask) {
        const newTaskList = [...allTasks, newTask ]
        setAllTasks(newTaskList)
    }
   

    const taskItems = allTasks.map((task) => {
        return (
            <div>
                <i className="circle outline icon" />
                <span>{task.description}</span>
            </div>
            
        )
    })
    
    return (
        <div>
            <h3>To Do:</h3>
            <TaskForm tasks={tasks} dayId={dayId} setAllTasks={handleAddTask}/>
            <div>
                {taskItems}
            </div>
        </div>

    )
}

export default TaskDetails