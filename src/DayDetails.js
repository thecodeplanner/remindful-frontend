import React, { useState, useEffect } from "react"
import TaskDetails from './TaskDetails'
import SelfcareDetails from './SelfcareDetails'
import TaskForm from './TaskForm'
import SelfcareForm from './SelfcareForm'
import { useParams } from "react-router-dom";
import EditDay from './EditDay';
import EditMood from './EditMood';
import { useHistory } from "react-router-dom";

function NewDay({ onHandleUpdate, days }) {
    const [day, setDay] = useState(null);
    const [date, setDate] = useState(null)
    const [entry, setEntry] = useState(null)
    const [mood, setMood] = useState(null)
    const [water, setWater] = useState(null)
    const [tasks, setTasks] = useState(null)
    const [selfcare, setSelfcare] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)

    const [isEditingEntry, setIsEditingEntry] = useState(false)
    const [isEditingMood, setIsEditingMood] = useState(false)

    const history = useHistory()


    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/days/${params.id}`)
            .then(r => r.json())
            .then((day) => {
                setDay(day)
                formatDate(day.date)
                setEntry(day.entry)
                setMood(day.mood)
                setWater(day.water_intake)
                setTasks(day.tasks)
                setSelfcare(day.selfcares)
                setIsLoaded(true)
            })
    }, [params.id])

    if (!isLoaded) return <h2>Loading...</h2>;

    function formatDate(date) {
        let formattedDate = new Date(date.split('-'))
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
        return setDate(formattedDate.toLocaleDateString('en-US', options))
    }

    const taskItems = tasks.map((task) => {
        return (
            <TaskDetails key={task.id} description={task.description} status={task.complete} id={task.id} day_id={task.day_id} handleUpdate={handleUpdateTask} onDelete={handleDeleteTask} />
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

        const updatedTasks = {
            id: day.id,
            entry,
            mood,
            date: day.date,
            water_intake: water,
            tasks: newTaskList,
            selfcares: selfcare
        }
        onHandleUpdate(updatedTasks)
    }


    // FUNCTION TO HANDLE TOGGLE BETWEEN COMPLETE AND NOT COMPLETE TASKS //

    function handleUpdateTask(updatedTask) {

        const findTask = tasks.map((task) => {
            return task.id === updatedTask.id ? updatedTask : task
        })

        setTasks(findTask)

        const updatedStatusTask = {
            id: day.id,
            entry,
            mood,
            date: day.date,
            water_intake: water,
            tasks: findTask,
            selfcares: selfcare
        }

        onHandleUpdate(updatedStatusTask)
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

    //// WATER UPDATES ////

    function handleUpdateWaterEight() {
        const updateWater = {
            id: day.id,
            entry,
            mood,
            date: day.date,
            water_intake: day.water_intake += 8,
            tasks,
            selfcares: selfcare
        }
        onHandleUpdate(updateWater)

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
            id: day.id,
            entry,
            mood,
            date: day.date,
            water_intake: day.water_intake += 16,
            tasks,
            selfcares: selfcare
        }
        onHandleUpdate(updateWater)

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

    // HANDLE DELETE TASK //

    function handleDeleteTask(id) {
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id
        })
        setTasks(updatedTasks)

        const deletedTask = {
            id: day.id,
            entry,
            mood,
            date: day.date,
            water_intake: water,
            tasks: updatedTasks,
            selfcares: selfcare
        }
        onHandleUpdate(deletedTask)
    }

    function handleDeleteSelfcare(id) {
        const updatedSelfcare = selfcare.filter((sc) => {
            return sc.id !== id
        })
        setSelfcare(updatedSelfcare)
    }

    // HANDLE PAGINATION


    const dayIds = days.map((day) => {
        return (day.id)
    })

    // console.log(dayIds)


    function handleBack() {
       
        const findId = day.id - 1

        if (dayIds.includes(findId)) {
            history.push(`/day/${findId}`)
        }else {
            alert("You've reached the end of your entries!")
        }

         // for loop

         // let x = day.id

         // if dayId === findId, find the index from array and get the id previous or after
        // then push to that id
        }

       



    function handleNext() {
        const findId = day.id + 1

        if (dayIds.includes(findId)) {
            history.push(`/day/${findId}`)
        }else {
            alert("You've reached the end of your entries!")
        }
    }


    return (
        <div className='ui raised segment'>

<div id='page-buttons'>
                <button className='clear-button arrows' onClick={handleBack}><i className='chevron circle left icon'> </i>
                </button>
                <button className='clear-button arrows' onClick={handleNext}><i className='chevron circle right icon'> </i>
                </button>
            </div>
            <div className='date-page'>
                <h2 className='bungee-font'>{date}</h2>

            </div>

            


            {/* GRATITUDE DIV */}
            <div className='column'>
                <div className=' ui raised segment ' style={{ backgroundColor: '#ffcfdf' }}>
                    <a className="ui pink ribbon label" id='gratitude-label'><i className='heart icon'></i>gratitude</a>
                    <h3 className='grateful-title'>Today I'm grateful for ...</h3>

                    <button className='clear-button pencil' onClick={() => setIsEditingEntry(isEditingEntry => !isEditingEntry)}>
                        <i className="pencil alternate icon" />
                    </button>

                    {isEditingEntry ? <EditDay dayEntry={entry} id={day.id} date={day.date} water={water} selfcare={selfcare} tasks={tasks} mood={mood} onUpdateEntry={handleUpdateEntry} onHandleUpdate={onHandleUpdate} /> : <div className='grateful'> {entry} </div>}

                </div>

                {/* TO DO DIV */}

                <div className='ui two column grid'>
                    <div className="column" >
                        <div className='ui raised segment' style={{ backgroundColor: '#fefdca' }}>

                            <a className="ui yellow ribbon label" id='priorities-label'><i className='bookmark icon'></i>priorities</a>
                            <h3 className='to-do'>To Do</h3>
                            {taskItems}
                            <TaskForm setAllTasks={handleAddTask} dayId={day.id} />
                        </div>

                        {/* MOOD DIV */}

                        <div className='ui raised segment' style={{ backgroundColor: '#a5dee5' }}>
                            <a className="ui teal ribbon label" id='mood-label'><i className='smile outline icon'></i>mood</a>
                            <h4 className='mood-title'> How I'm feeling . . .</h4>

                            <button className='clear-button pencil' onClick={() => setIsEditingMood(isEditingMood => !isEditingMood)}>
                                <i className="pencil alternate icon" />
                            </button>

                            {isEditingMood ? <EditMood dayMood={mood} id={day.id} date={day.date} water={water} selfcare={selfcare} tasks={tasks} entry={entry} onUpdateMood={handleUpdateMood} onHandleUpdate={onHandleUpdate} /> : <p className='mood'>{mood}</p>}

                        </div>
                    </div>

                    <div className='column'>

                        {/* WATER DIV */}

                        <div className='ui raised segment'>
                            <a className="ui blue right ribbon label" id='water-label'><i className='tint icon' />daily water intake</a>
                            <h4 className='water-title'>I drank {water} oz. of water today</h4>
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

                        <div className='ui raised segment' style={{ backgroundColor: '#e0f9b5' }}>
                            <a className="ui olive right ribbon label" id='mindful-label'><i className='cloud icon'></i>mindfulness  </a>
                            <h3 className='selfcare-title'>self-care checklist</h3>
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