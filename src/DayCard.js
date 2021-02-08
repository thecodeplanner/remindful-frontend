// import { format } from "date-fns";
import React, {useState} from "react"
import { useHistory } from "react-router-dom";

function DayCard({ day, onDelete }) {
    const history = useHistory()

    const [date, setDate] = useState('')
    const originalDate = (day.date)

    // console.log(day)

    if (date === '') {
        const formattedDate = new Date(originalDate.split('-'))
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
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

    const completed = day.tasks.filter((task) => {
        return task.complete === true
    })

    const numCompleted = completed.length

    return (

        <div className='ui card' id='day-card' style={{ backgroundColor: '#e0f9b5' }}>
            <div onClick={handleDate} className="content">
                <div className="header" id='header-date'>Date: {date}</div>
                <h4 class="ui sub header">Water Intake: {day.water_intake} oz.</h4>
                <h4 class="ui sub header">Mood: {day.mood}</h4>
                {/* <h4 class="ui sub header">Grateful for: {day.entry}</h4> */}
                <h4 class="ui sub header">{numCompleted} of {day.tasks.length} Tasks Completed</h4>
                {/* <h4 class="ui sub header">{day.selfcares.length} self-care activities planned</h4> */}
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