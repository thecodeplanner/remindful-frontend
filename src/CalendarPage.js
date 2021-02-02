import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { format } from 'date-fns';

function CalendarPage() {
    const [date, setDate] =useState(new Date())

    function handleChangeDate(e) {
        setDate(e)
    }

    return (
        <div className='container'>
            <Calendar
            value={date}
            onChange={handleChangeDate}
         />
        </div>

        
    )
}

export default CalendarPage;