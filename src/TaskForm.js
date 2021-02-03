
import React, {useState} from "react"

function TaskForm({dayId, setAllTasks}) {
    const [description, setDescription] = useState('')

    // const dayId = tasks.filter((task) => task.day_id)
    // console.log(dayId)
    // console.log(dayId)

    function handleSubmit(e) {
        e.preventDefault()

        const newTask = {
            description,
            complete: false,
            day_id: dayId
        }
        // console.log(newTask)

        fetch('http://localhost:3000/tasks', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        })  .then(res => res.json())
            .then(taskData => setAllTasks(taskData))
        
        setDescription('')
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="let's get it done!"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input className="button" type="submit" value="add" />
        </form>
    )
}

export default TaskForm