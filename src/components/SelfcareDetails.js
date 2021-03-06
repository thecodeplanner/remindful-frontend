
import React, {useState} from "react"

function SelfcareDetails({description, status, id, onDelete}) {
    const [showStatus, setShowStatus] = useState(status)

    function handleStatus() {
        setShowStatus(!showStatus)

        const updatedStatus = {
            complete: !showStatus
        }

        fetch(`http://localhost:3000/selfcares/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedStatus)
        })  
    }

    function handleDelete() {
        fetch(`http://localhost:3000/selfcares/${id}`, {
                method: "DELETE"
            })

        onDelete(id)
    }

    
    
    return (
      <>
      <div className='selfcare-list'>
          {showStatus ? <i onClick={handleStatus} className="heart icon" id='heart'/> : <i onClick={handleStatus} className="heart outline icon" />}
          {description}
          {showStatus ? <i onClick={handleDelete} className='window close outline icon' id='x-selfcare'/> : null}
      </div>

      </>

    )
}

export default SelfcareDetails