import React, { useState } from 'react';
import AddDay from './AddDay'
import Calendar from 'react-calendar';
import { format } from 'date-fns';

function CalendarPage({ onAddDay, currentUser }) {
    const [date, setDate] = useState(new Date())
    const [showForm, setShowForm] = useState(false)

    const today = format(date, 'iiii, MMMM do, yyyy')

    function handleChangeDate(e) {
        setDate(e)
    }

    function showAddDayForm() {
        setShowForm(!showForm)
    }

    return (
        <div className='ui raised segment'>

            <a className="ui olive ribbon label" id='cal-label'><i className='calendar alternate outline icon'></i>calendar</a>

            <div className="ui small basic labeled icon button" id='add-entry' onClick={showAddDayForm}>
                new entry
                <i className="add icon"></i>
            </div>
            
            {showForm ? <AddDay currentUser={currentUser} onAddDay={onAddDay} /> : null}

            <h1 className="bungee-font"> {today} </h1>

            <div className='calendar-container'>
                <Calendar
                    value={date}
                    onChange={handleChangeDate}
                />
            </div>

            <div className='ui three column grid'>
                <div className='note-one'>
                    <div>It's a new day, let's make it count!!!</div>
                </div>
                <div className='note-two'>
                    <div>Who has made my life better? Why?</div>
                </div>

                <div className='note-three'>
                    <div>What will I let go of today?</div>
                </div>

                <div className='note-four'>
                    <div>What is something I'm proud of this month?</div>
                </div>
            </div>
        </div>



    )
}

export default CalendarPage;