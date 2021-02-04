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
            <TaskDetails key={task.id} description={task.description} status={task.complete} id={task.id} onDelete={handleDeleteTask} />
        )
    })

    const selfcareItems = selfcare.map((selfcare) => {
        return (
            <SelfcareDetails key={selfcare.id} description={selfcare.description} status={selfcare.complete} id={selfcare.id} onDelete={handleDeleteSelfcare} />
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
        <div className='ui raised segment'>
            <h2>Date: {day.date} </h2>

            {/* GRATIFICATION DIV */}
            <div className='column'>
                <div className=' ui raised segment' style={{backgroundColor: '#e0f9b5' }}>
                    <a class="ui olive right ribbon label">gratification</a>
                    <h3>Today I'm grateful for ...</h3>

                    {isEditingEntry ? <EditDay dayEntry={entry} id={day.id} onUpdateEntry={handleUpdateEntry} /> : <div> {entry} </div>}

                    <div className="actions">
                        <button className='clear-button' onClick={() => setIsEditingEntry(isEditingEntry => !isEditingEntry)}>
                            <i className="pencil alternate icon" />
                        </button>
                    </div>

                </div>

                <div className='ui two column grid'>
                    <div className="column" >
                        <div className='ui raised segment' style={{ backgroundColor: '#fefdca' }}>

                            <a class="ui yellow ribbon label">priorities</a>
                            <h3>To Do:</h3>
                            {taskItems}
                            <TaskForm setAllTasks={handleAddTask} dayId={day.id} />
                        </div>

                        {/* MOOD DIV */}

                        <div className='ui raised segment' style={{backgroundColor: '#a5dee5'}}>
                            <a class="ui teal ribbon label">mood</a>
                            <h4> How I'm feeling</h4>

                            {isEditingMood ? <EditMood dayMood={mood} id={day.id} onUpdateMood={handleUpdateMood} /> : <p>{mood}</p>}

                            <div className="actions">
                                <button className='clear-button' onClick={() => setIsEditingMood(isEditingMood => !isEditingMood)}>
                                    <i className="pencil alternate icon" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='column'>

                        {/* WATER DIV */}

                        <div className='ui raised segment'>
                            <a class="ui blue right ribbon label">daily water intake</a>
                            <h4>I drank {water} oz. of water today</h4>
                            <div>
                                <button className='update-water' onClick={handleUpdateWaterEight}>
                                    <i className='tint icon' /> + 8 oz.
                                </button>
                                <button className='update-water' onClick={handleUpdateWaterSixteen}>
                                    <i className='tint icon' /> + 16 oz.
                                </button>
                            </div>

                        </div>
                        {/* SELFCARE DIV */}

                        <div className='ui raised segment' style={{backgroundColor: '#ffcfdf'}}>
                            <a class="ui pink right ribbon label">mindfulness</a>
                            <h3>Self-Care Checklist</h3>
                            {selfcareItems}
                            <SelfcareForm dayId={day.id} setAllSelfcare={handleSelfcare} />

                        </div>


                    </div>












                </div>
            </div>








        </div>
    )
}

export default NewDay