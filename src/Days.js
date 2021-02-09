import React, { useState } from "react"
import DayCard from './DayCard'
import Sort from './Sort'
import Search from './Search'

function Days({ days, onDelete }) {
    const [ASC, setASC] = useState(false)
    const [search, setSearch] = useState('')

    const sortedDays = days.map((day) => {
        return day
    }).sort(function (dayA, dayB) {
        return dayB.id - dayA.id
    })

    const sortASC = sortedDays.sort(function(dayA, dayB) {
        if (ASC) {
            return dayA.id - dayB.id
        }else {
            return true
        }
       
    })

    const searchEntry = sortASC.filter((entry) => {
        return entry.mood.toLowerCase().includes(search.toLowerCase())
    })

    // console.log(sortASC)

    const day = searchEntry.map((day) => {
        return (
            <DayCard key={day.id} day={day} onDelete={onDelete} />
        )
    })

    return (
        <div className='ui raised segment' style={{ backgroundColor: '#a5dee5' }}>
            <a className="ui olive ribbon label" id='entry-label'><i className='paperclip icon'></i>entries</a>
            <div className='sort'>
                <Sort ASC={ASC} onSetASC={setASC} />
            </div>
            <div className='search'>
                <Search onSearch={setSearch} />
            </div>
            <div className='ui cards centered'>
                {day}
            </div>
        </div>


    )
}

export default Days