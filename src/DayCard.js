import { format } from 'date-fns';
import { useHistory } from "react-router-dom";

function DayCard({day}) {
    const history = useHistory()

    function handleDate() {
        history.push(`/day/${day.id}`)
    }

    return (
        <div onClick={handleDate}>
           {day.date}
        </div>
        
       

    )
}

export default DayCard