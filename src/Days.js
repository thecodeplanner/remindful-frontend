import React, { useState } from "react"
import DayCard from './DayCard'
import Sort from './Sort'

function Days({ days, onDelete }) {
    const [ASC, setASC] = useState(false)

    const sortedDays = days.map((day) => {
        return day
    }).sort(function (dayA, dayB) {
        return dayB.id - dayA.id
    })

    const sortASC = sortedDays.sort(function(dayA, dayB) {
        if (ASC) {
            return dayA.id - dayB.id
        }
       
    })

    // console.log(sortASC)

    const day = sortASC.map((day) => {
        return (
            <DayCard key={day.id} day={day} onDelete={onDelete} />
        )
    })

    return (
        <div className='ui raised segment' style={{ backgroundColor: '#a5dee5' }}>
            <a className="ui olive ribbon label" id='entry-label'><i className='paperclip icon'></i>entries</a>
            <div>
                <Sort ASC={ASC} onSetASC={setASC} />
            </div>
            <div className='ui cards centered'>
                {day}
            </div>
        </div>


    )
}

export default Days