import React, { useState } from 'react'

function EditMood({ dayMood, id, date, water, tasks, selfcare, entry, onUpdateMood, onHandleUpdate }) {
    const [mood, setMood] = useState(dayMood)

    function handleFormSubmit(e) {
        e.preventDefault();

        const updatedMood = {
            id,
            mood,
            entry,
            date, 
            water_intake: water,
            tasks, 
            selfcares: selfcare

        }
        onHandleUpdate(updatedMood)

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
        <div className='ui form'>
            <form className="fields" onSubmit={handleFormSubmit}>
                <div className='field'>
                    <input
                        type="text"
                        name="mood"
                        autoComplete="off"
                        placeholder='how are we feeling?'
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                    />
                </div>
                <input className='ui basic button' type="submit" value="update" />
            </form>
        </div>
    )
}

export default EditMood