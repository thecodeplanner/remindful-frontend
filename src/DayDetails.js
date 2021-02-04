import React, { useState, useEffect } from "react"
import TaskDetails from './TaskDetails'
import SelfcareDetails from './SelfcareDetails'
import TaskForm from './TaskForm'
import SelfcareForm from './SelfcareForm'
import { useParams } from "react-router-dom";
import EditDay from './EditDay';
import EditMood from './EditMood';

function NewDay() {
    const [day, setDay] = useState(null);
    const [entry, setEntry] = useState(null)
    const [mood, setMood] = useState(null)
    const [water, setWater] = useState(null)
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
                setWater(day.water_intake)
                setTasks(day.tasks)
                setSelfcare(day.selfcares)
                setIsLoaded(true)
            })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;

    const taskItems = tasks.map((task) => {
        return (
            <TaskDetails key={task.id} description={task.description} status={task.complete} id={task.id} onDelete={handleDeleteTask}/>
        )
    })

    const selfcareItems = selfcare.map((selfcare) => {
        return (
            <SelfcareDetails key={selfcare.id} description={selfcare.description} status={selfcare.complete} id={selfcare.id} onDelete={handleDeleteSelfcare}/>
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

    function handleUpdateWaterEight() {
        const updateWater = {
            water_intake: day.water_intake += 8
        }

        fetch(`http://localhost:3000/days/${day.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateWater)
        })
            .then(res => res.json())
            .then(waterData => setWater(waterData.water_intake))

    }

    function handleUpdateWaterSixteen() {
        const updateWater = {
            water_intake: day.water_intake += 16
        }

        fetch(`http://localhost:3000/days/${day.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updateWater)
        })
            .then(res => res.json())
            .then(waterData => setWater(waterData.water_intake))

    }

    function handleDeleteTask(id) {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id
        }) 
        setTasks(updatedTasks)
    }

    function handleDeleteSelfcare(id) {
        const updatedSelfcare = selfcare.filter((sc) => {
            return sc.id !== id
        })
        setSelfcare(updatedSelfcare)
    }   


    return (
        <div className='main-page-container'>
            <h2>Date: {day.date} </h2>

            <div className='grateful'>
                <h3>I'm grateful for ...</h3>

                {isEditingEntry ? <EditDay dayEntry={entry} id={day.id} onUpdateEntry={handleUpdateEntry} /> : <div> {entry} </div>}

                <div className="actions">
                    <button className='clear-button' onClick={() => setIsEditingEntry(isEditingEntry => !isEditingEntry)}>
                        <i className="pencil alternate icon" />
                    </button>
                </div>

            </div>

            <div className='mood'>

                {isEditingMood ? <EditMood dayMood={mood} id={day.id} onUpdateMood={handleUpdateMood} /> : <p>Mood: {mood}</p>}

                <div className="actions">
                    <button className='clear-button' onClick={() => setIsEditingMood(isEditingMood => !isEditingMood)}>
                        <i className="pencil alternate icon" />
                    </button>
                </div>
            </div>

            <div className='water'>
                Water Intake for Today: {water} oz.
                <div>
                    <button className='update-water' onClick={handleUpdateWaterEight}>
                        <i className='tint icon'/> + 8 oz.
                    </button>
                    <button className='update-water' onClick={handleUpdateWaterSixteen}>
                        <i className='tint icon'/> + 16 oz.
                    </button>
                </div>
              
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