import React, { useState, useEffect } from "react"
import TaskForm from './TaskForm'
import SelfcareForm from './SelfcareForm'
import { useParams } from "react-router-dom";
import EditDay from './EditDay';
import EditMood from './EditMood';

function NewDay() {
    const [day, setDay] = useState(null);
    const [entry, setEntry] = useState(null)
    const [mood, setMood] = useState(null)
    const [tasks, setTasks] = useState(null)
    const [selfcare, setSelfcare] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [isEditingEntry, setIsEditingEntry] = useState(false)
    const [isEditingMood, setIsEditingMood] = useState(false)

    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/days/${params.id}`)
            .then(r => r.json())
            .then((day) => {
                setDay(day)
                setEntry(day.entry)
                setMood(day.mood)
                setTasks(day.tasks)
                setSelfcare(day.selfcares)
                setIsLoaded(true)
            })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;

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
        const newTaskList = [...tasks, newTask]
        setTasks(newTaskList)
    }

    function handleSelfcare(newSelfcare) {
        const newSelfcareList = [...selfcare, newSelfcare]
        setSelfcare(newSelfcareList)
    }

    function handleUpdateEntry(newEntry) {
        setEntry(newEntry)
        setIsEditingEntry(false)
    }

    function handleUpdateMood(newMood) {
        setMood(newMood)
        setIsEditingMood(false)
    }


    return (
        <div className='main-page-container'>
            <h2>Date: {day.date} </h2>

            <div className='grateful'>
                <h3>I'm grateful for ...</h3>

                {isEditingEntry ? <EditDay dayEntry={entry} id={day.id} onUpdateEntry={handleUpdateEntry} /> : <div> {entry} </div>}

                <div className="actions">
                    <button className='edit-pencil' onClick={() => setIsEditingEntry(isEditingEntry => !isEditingEntry)}>
                        <i className="pencil alternate icon" />
                    </button>
                </div>



            </div>

            <div className='mood'>

                {isEditingMood ? <EditMood dayMood={mood} id={day.id} onUpdateMood={handleUpdateMood} /> : <p>Mood: {mood}</p>}

                <div className="actions">
                    <button className='edit-pencil' onClick={() => setIsEditingMood(isEditingMood => !isEditingMood)}>
                        <i className="pencil alternate icon" />
                    </button>
                </div>
            </div>

            <div className='water'>
                Water Intake: {day.water} 
            </div>

            <div className='to-do'>
                <h3>To Do:</h3>
                <TaskForm setAllTasks={handleAddTask} dayId={day.id} />
                {taskItems}

            </div>


            <div className='selfcare'>
                <h3>Selfcare Checklist</h3>
                <SelfcareForm dayId={day.id} setAllSelfcare={handleSelfcare} />
                {selfcareItems}
            </div>


        </div>
    )
}

export default NewDay