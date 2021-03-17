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
       
    if (findToday.length === 1) {
        const dayId = (findToday[0].id)
        history.push(`/day/${dayId}`)
    }else if (findToday.length > 1) {
        alert("You have more than one entry for today. Please choose which entry you would like to view.")
        history.push('/entries')
    }else {
        alert("Please create a new entry!")
        history.push('/calendar') 
    }


    return (
        <div>
        </div>
    )
}

export default Today