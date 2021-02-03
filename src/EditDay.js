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
        <form className="edit-entry" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="entry"
                autoComplete="off"
                value={entry}
                onChange={(e) => setEntry(e.target.value)}
            />
            <input type="submit" value="update" />
    </form>
    )
}

export default EditDay