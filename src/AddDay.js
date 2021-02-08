
import React, {useState} from "react"
import { useHistory } from "react-router-dom";


function AddDay({currentUser, onAddDay}) {
    const [day, setDay] = useState('')
    const history = useHistory()
    console.log(day)

        function handleDayData(dayData) {
            onAddDay(dayData)
            history.push('/entries')
        }

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
                .then(dayData => handleDayData(dayData))
        }

    return (
        <div className='ui form' id='add-day'> 
        <form onSubmit={handleSubmit} className='fields'>
        <div className='field'>

        <input
        type="date"
        value={day}
        onChange={(e) => setDay(e.target.value)}
        />
        </div>
        <input className="ui mini basic button" type="submit" value="add" />
    </form>
    </div>
    )
}

export default AddDay