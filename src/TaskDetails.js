import React, {useState} from "react"

function TaskDetails({description, status, id}) {
    const [showStatus, setShowStatus] = useState(status)

    function handleStatus() {

        setShowStatus(!showStatus)

        const updatedStatus = {
            complete: !showStatus
        }

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
    
    return (
        <>
            <div>
            {showStatus ? <i onClick={handleStatus} className="circle icon" /> : <i onClick={handleStatus} className="circle outline icon" />}
            {description}
            </div>
           
        </>

    )
}

export default TaskDetails