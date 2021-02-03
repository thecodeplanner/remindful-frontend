import DayCard from './DayCard'

function Days({days}) {

    const day = days.map((day) => {
        return (
            <DayCard key={day.id} day={day} />
        )
    })

    return (
        <div>
             <h1>All Entries</h1>
            <div>
                {day}
            </div>
        </div>
       
        
    )
}

export default Days