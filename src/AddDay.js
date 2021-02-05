
import React, {useState} from "react"
import { useHistory } from "react-router-dom";


function AddDay({currentUser}) {
    const [day, setDay] = useState('')
    const history = useHistory()

        function handleSubmit(e) {
            e.preventDefault()
            console.log(day)

            const newDay = {
                date: day,
                user_id: currentUser.id,
                entry: ' ',
                water_intake: 0
            }

            console.log(newDay)

            fetch("http://localhost:3000/days", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newDay)
            })
                .then(res => res.json())
                .then(dayData => history.push(`/day/${dayData.id}`))
                
        }

    return (
        <div className='ui form'> 
        <form onSubmit={handleSubmit} className='fields'>
        <div className='field'>

        <input
        type="date"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        />
        </div>
        <input className="ui basic button" type="submit" value="add" />
    </form>
    </div>
    )
}

export default AddDay