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

    const todayTasks = findToday.map((today) => {
        return (
            <TaskDetails key={today.tasks} tasks={today.tasks}/>
        )
    })

    const todaySelfcare = findToday.map((today) => {
        return (
            <SelfcareDetails key={today.date} selfcare={today.selfcares} />
        )
    })
    
    console.log(todayTasks)


    return (
        <div>
        {todayDetails}
        {todayTasks}
        {todaySelfcare}
        </div>
    )
}

export default Today