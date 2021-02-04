import DayCard from './DayCard'

function Days({days, onDelete}) {

    const day = days.map((day) => {
        return (
            <DayCard key={day.id} day={day} onDelete={onDelete}/>
        )
    })

    return (
        <div className='ui raised segment'style={{backgroundColor: '#e0f9b5'}}>
             <h1>All Entries</h1>
            <div className='ui cards centered'>
                {day}
            </div>
        </div>
       
        
    )
}

export default Days