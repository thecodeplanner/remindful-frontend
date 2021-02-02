import React, {useState} from "react"

function SelfcareForm({dayId, setAllSelfcare}) {
    const [description, setDescription] = useState('')

    function handleSubmit(e) {
        e.preventDefault()

        const newSelfcare = {
            description,
            complete: false,
            day_id: dayId
        }

        console.log(newSelfcare)

        fetch('http://localhost:3000/selfcares', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newSelfcare),
        })  .then(res => res.json())
            .then(selfcareData => setAllSelfcare(selfcareData))
        
        setDescription('')
    }

    

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder='reminder to care for yourself!'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
            <input className="button" type="submit" value="add" />
        </form>
    )

}

export default SelfcareForm