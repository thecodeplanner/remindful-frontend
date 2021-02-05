import React, { useState } from 'react'

function EditDay({dayEntry, id, onUpdateEntry}) {
    const [entry, setEntry] = useState(dayEntry)

    function handleFormSubmit(e) {
        e.preventDefault();

        const updatedEntry = {
            entry
        }

        fetch(`http://localhost:3000/days/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEntry)
        })
            .then(res => res.json())
            .then(entryData => onUpdateEntry(entryData.entry))
      }

    return (
        <div className='ui form'>
            <form className="fields" onSubmit={handleFormSubmit}>
            <div className='field'>
            <input
                type="text"
                name="entry"
                autoComplete="off"
                placeholder='share your thoughts...'
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            </div>
            <input className='ui basic button' type="submit" value="update" />
            </form>



        </div>
        
    )
}

export default EditDay