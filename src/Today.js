import React, {useState} from "react"
import { format } from 'date-fns'
import DayDetails from './DayDetails'
import TaskDetails from './TaskDetails'
import SelfcareDetails from './SelfcareDetails'

function Today({days, setDays, currentUser}) {
    const [dayDetails, setDayDetails] = useState(null)

    const today = new Date()
    const formattedDate = format(today, 'yyyy-MM-dd')

    const findToday = days.filter((day) => {
        return day.date === `${formattedDate}`
    })

    // console.log(formattedDate)
    // console.log(days)
    console.log(findToday)

    const todayDetails = findToday.map((today) => {
        return (
            <DayDetails key={today.id} today={today}/>
        )
    })
    
    console.log(todayDetails)

     // <div>
                {/* <DayDetails key={today.date} today={today}/>
                <TaskDetails key={today.id} tasks={today.tasks} />
                <SelfcareDetails key={today.date} selfcare={today.selfcares} /> */}
            // </div>

    return(
        <>
        <h1>  </h1>
        {todayDetails}
        </>
    )
}

export default Today