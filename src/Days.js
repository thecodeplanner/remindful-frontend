import DayCard from './DayCard'

function Days({days, onDelete}) {

    const day = days.map((day) => {
        return (
            <DayCard key={day.id} day={day} onDelete={onDelete}/>
        )
    })

    return (
        <div className='ui raised segment'style={{backgroundColor: '#a5dee5'}}>
             <a className="ui olive ribbon label" id='entry-label'><i className='paperclip icon'></i>entries</a>
            <div className='ui cards centered'>
                {day}
            </div>
        </div>
       
        
    )
}

export default Days