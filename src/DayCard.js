// import { format } from "date-fns";
import React, {useState} from "react"
import { useHistory } from "react-router-dom";

function DayCard({ day, onDelete }) {
    const history = useHistory()

    const [date, setDate] = useState('')
    const originalDate = (day.date)

    if (date === '') {
        const formattedDate = new Date(originalDate.split('-'))
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        setDate(formattedDate.toLocaleDateString('en-US', options))
    }
    

    function handleDate() {
        history.push(`/day/${day.id}`)
    }

    function handleDelete() {

        if (window.confirm('Are you sure you want to delete this entry?')) {
            fetch(`http://localhost:3000/days/${day.id}`, {
                method: "DELETE"
            })
        }

        onDelete(day.id)

    }

    return (

        <div className='ui card' id='day-card' style={{ backgroundColor: '#e0f9b5' }}>
            <div onClick={handleDate} className="content">
                <div className="header">{date}</div>
            </div>

            <div className='extra content'>
                <button className="clear-button" onClick={handleDelete}>
                    <i className="trash alternate outline icon" />
                </button>
            </div>

        </div>




    )
}

export default DayCard