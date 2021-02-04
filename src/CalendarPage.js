import React, { useState } from 'react';
import AddDay from './AddDay'
import Calendar from 'react-calendar';
import { format } from 'date-fns';

function CalendarPage({ days, currentUser }) {
    const [date, setDate] = useState(new Date())
    const [showForm, setShowForm] = useState(false)

    const today = format(date, 'iiii, MMMM do, yyyy')

    // console.log(chosenDay)

    function handleChangeDate(e) {
        setDate(e)
    }

    // const dayToRender = days.filter((day) => {
    //     return (
    //         day.date === chosenDay
    //         (setPickedDay(dayToRender))
    //     )
    // })

    function showAddDayForm() {
        setShowForm(!showForm)
    }


    return (
        <div className='ui raised segment'>
            <div>
                <h1> {today} </h1>

                <div class="ui blue labeled icon button" onClick={showAddDayForm}>
                    new entry
                <i class="add icon"></i>
                </div>
                {showForm ? <AddDay currentUser={currentUser} /> : null}
                {/* <button onClick={showAddDayForm}>start new entry</button>
                {showForm ? <AddDay currentUser={currentUser} /> : null} */}
            </div>

            <div className='container'>
                <Calendar
                    value={date}
                    onChange={handleChangeDate}
                />
            </div>
            <div className='note'>
                {today} 
                <p>Let's make it a great day!</p>
            </div>


        </div>



    )
}

export default CalendarPage;