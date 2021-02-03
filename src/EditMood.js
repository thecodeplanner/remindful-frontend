import React, { useState } from 'react'

function EditMood({dayMood, id, onUpdateMood}) {
    const [mood, setMood] = useState(dayMood)

    function handleFormSubmit(e) {
        e.preventDefault();

        const updatedMood = {
            mood
        }

        fetch(`http://localhost:3000/days/${id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedMood)
        })
            .then(res => res.json())
            .then(moodData => onUpdateMood(moodData.mood))
      }

    return (
        <form className="edit-entry" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="mood"
                autoComplete="off"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
            />
            <input type="submit" value="update" />
    </form>
    )
}

export default EditMood