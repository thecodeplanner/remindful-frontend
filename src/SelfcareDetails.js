
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
            // .then(res => res.json())
            // .then(data => console.log(data))

    }

    function handleDelete() {
        fetch(`http://localhost:3000/selfcares/${id}`, {
                method: "DELETE"
            })

        onDelete(id)
    }

    
    
    return (
      <>
      <div>
          {showStatus ? <i onClick={handleStatus} className="heart icon" /> : <i onClick={handleStatus} className="heart outline icon" />}
          {description}
          {showStatus ? <i onClick={handleDelete} className='window close outline icon' id='x-selfcare'/> : null}
      </div>

      </>

    )
}

export default SelfcareDetails