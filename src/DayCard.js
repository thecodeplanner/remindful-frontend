// import { format } from "date-fns";
import React from "react"
import { useHistory } from "react-router-dom";

function DayCard({day, onDelete}) {
    const history = useHistory()

    // const [date, setDate] = useState(day.date)

    // function formatDate(date) {
    //     let formattedDate = new Date(date.split('-'))
    //     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    //     return  setDate(formattedDate.toLocaleDateString('en-US', options))
    // }

    // formatDate(day.date)


    function handleDate() {
        history.push(`/day/${day.id}`)
    }

    function handleDelete() {

        // console.log('delete')
        // console.log(day.id)

        if (window.confirm('Are you sure you want to delete this entry?')) {
            fetch(`http://localhost:3000/days/${day.id}`, {
                method: "DELETE"
            })
        }

        onDelete(day.id)

    }

    return (
       
        <div className='card' id='day-card' style={{backgroundColor: '#e0f9b5'}}>
            <div onClick={handleDate}>
                date: {day.date}                
            </div>
                <button className="clear-button" onClick={handleDelete}>
                    <i className="trash alternate outline icon" />
                </button>
            
            

        </div>
        
        
       

    )
}

export default DayCard