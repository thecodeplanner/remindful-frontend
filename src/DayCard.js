// import { format } from 'date-fns';
import { useHistory } from "react-router-dom";

function DayCard({day, onDelete}) {
    const history = useHistory()

    function handleDate() {
        history.push(`/day/${day.id}`)
    }

    function handleDelete() {

        console.log('delete')
        console.log(day.id)

        if (window.confirm('Are you sure you want to delete this entry?')) {
            fetch(`http://localhost:3000/days/${day.id}`, {
                method: "DELETE"
            })
        }

        onDelete(day.id)

        
    }

    return (
        <div>
            <span onClick={handleDate}>
                {day.date}
            </span>

            <button className="clear-button" onClick={handleDelete}>
                <i className="trash alternate outline icon" />
            </button>

        </div>
        
        
       

    )
}

export default DayCard