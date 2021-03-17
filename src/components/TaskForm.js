
import React, {useState} from "react"

function TaskForm({dayId, setAllTasks, day}) {
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newTask = {
            description,
            complete: false,
            day_id: dayId
        }


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
        <div className='ui form'>   
            <form onSubmit={handleSubmit} className='fields'>
                <div className='field'>
                <input
                type="text"
                placeholder="let's get it done!"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                </div>
                <input className=" ui basic button" type="submit" value="add" />
            </form>
        </div>
        
    )
}

export default TaskForm