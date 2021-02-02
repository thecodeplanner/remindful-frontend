function TaskDetails({tasks}) {
    const taskItems = tasks.map((task) => {
        return (
            <li> {task.description}</li>
        )
    })
    
    return (
        <div>
            <h3>To Do:</h3>
            <div>
                {taskItems}
            </div>
        </div>

    )
}

export default TaskDetails