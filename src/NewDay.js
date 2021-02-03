import React, {useState, useEffect} from "react"
import TaskForm from './TaskForm'
import SelfcareForm from './SelfcareForm'
import { useParams } from "react-router-dom";

function NewDay() {
    const [day, setDay] = useState(null);
    const [tasks, setTasks] = useState(null)
    const [selfcare, setSelfcare] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/days/${params.id}`)
         .then(r => r.json())
         .then((day) => {
         setDay(day)
         setTasks(day.tasks)
         setSelfcare(day.selfcares)
         setIsLoaded(true)
         })
    },[params.id])

    if (!isLoaded) return <h2>Loading...</h2>;

    // console.log(day.tasks)

       const taskItems = tasks.map((task) => {
        return (
            <div>
                <i className="circle outline icon" />
                <span>{task.description}</span>
            </div>
        )
    })

    const selfcareItems = selfcare.map((selfcare) => {
        return (
            <div>
                <i className="heart outline icon" />
                <span>{selfcare.description}</span>
            </div>
        )
    })

    function handleAddTask(newTask) {
        const newTaskList = [...tasks, newTask ]
        setTasks(newTaskList)
    }

    function handleSelfcare(newSelfcare) {
        const newSelfcareList = [...selfcare, newSelfcare]
        setSelfcare(newSelfcareList)
    }

    
    return (
        <div>
            <h2>Date: {day.date} </h2>
            <div>
                <h3>I'm grateful for ...</h3> 
                {day.entry}
            </div>

            <div>
                Mood: {day.mood}
            </div>
            
            <div>
                Water Intake: {day.water}
            </div>
            <h3>To Do:</h3> 
            <TaskForm setAllTasks={handleAddTask} dayId={day.id}/>
            {taskItems}
     

            <h3>Selfcare Checklist</h3>
            <SelfcareForm dayId={day.id} setAllSelfcare={handleSelfcare} />
            {selfcareItems}
            
        </div>
    )
}

export default NewDay