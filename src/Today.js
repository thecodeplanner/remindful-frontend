import React from "react"
import { format } from 'date-fns'
import { useHistory } from "react-router-dom";

function Today({days}) {
    const history = useHistory()

    const today = new Date()
    const formattedDate = format(today, 'yyyy-MM-dd')

    const findToday = days.filter((day) => {
        return day.date === `${formattedDate}`
    })

    if (findToday.length === 0) {
        alert("Please create a new entry!")
        history.push('/calendar')    
    }else if (findToday.length === 1) {
        const dayId = (findToday[0].id)
        history.push(`/day/${dayId}`)
    }

  
    


    return (
        <div>
        </div>
    )
}

export default Today