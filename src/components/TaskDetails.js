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
            {showStatus ? <> <i onClick={handleStatus} className="check circle icon" /> <span style={{ textDecorationLine: 'line-through' }}>{description} </span> </> : <> <i onClick={handleStatus} className="circle outline icon" /> <span>{description}</span></>}
            {/* {description}
            {showStatus ? <p>{description}</p> : <p style={{ textDecorationLine: 'line-through' }}>{description}</p> } */}
            {showStatus ? <i onClick={handleDelete} className='window close outline icon' id='x-icon'/> : null}
            </div>
           
        </>

    )
}

export default TaskDetails