import React from "react"
import { format } from 'date-fns'
import DayDetails from './DayDetails'
import TaskDetails from './TaskDetails'
import SelfcareDetails from './SelfcareDetails'
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
    }

    console.log(findToday)

    const todayDetails = findToday.map((today) => {
        return (
            <DayDetails key={today.id} today={today}/>
        )
    })

    const todayTasks = findToday.map((today) => {
        return (
            <TaskDetails key={today.tasks} tasks={today.tasks} dayId={today.id}/>
        )
    })

    const todaySelfcare = findToday.map((today) => {
        return (
            <SelfcareDetails key={today.date} selfcare={today.selfcares} dayId={today.id} />
        )
    })
    


    return (
        <div>
        {todayDetails}
        {todayTasks}
        {todaySelfcare}
        </div>
    )
}

export default Today