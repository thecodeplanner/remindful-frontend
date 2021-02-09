import React, {useState} from "react"

function TaskDetails({description, status, id, onDelete, handleUpdate, day_id}) {
    const [showStatus, setShowStatus] = useState(status)

    function handleStatus() {

        setShowStatus(!showStatus)

        const updatedStatus = {
            id,
            description,
            complete: !showStatus,
            day_id 
        }
        
        handleUpdate(updatedStatus)



        fetch(`http://localhost:3000/tasks/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStatus)
        })  
            // .then(res => res.json())
            // .then(data => console.log(data))
    }

    function handleDelete() {
        console.log('delete!', id)

        fetch(`http://localhost:3000/tasks/${id}`, {
                method: "DELETE"
            })

        onDelete(id)
    }
    
    return (
        <>
            <div className='to-do-list'>
            {showStatus ? <i onClick={handleStatus} className="check circle icon" /> : <i onClick={handleStatus} className="circle outline icon" />}
            {description}
            {showStatus ? <i onClick={handleDelete} className='window close outline icon' id='x-icon'/> : null}
            </div>
           
        </>

    )
}

export default TaskDetails