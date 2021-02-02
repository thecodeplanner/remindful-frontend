import TaskForm from './TaskForm'

function TaskDetails({tasks, dayId}) {
    const taskItems = tasks.map((task) => {
        return (
            <li>{task.description}</li>
        )
    })
    
    return (
        <div>
            <h3>To Do:</h3>
            <TaskForm tasks={tasks} dayId={dayId}/>
            <div>
                {taskItems}
            </div>
        </div>

    )
}

export default TaskDetails