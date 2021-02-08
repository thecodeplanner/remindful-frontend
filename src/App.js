import React, {useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import CalendarPage from './CalendarPage'
import Today from './Today'
import Profile from './Profile'
import DayDetails from './DayDetails'
import Days from './Days'
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [days, setDays] = useState(null)
  const history = useHistory()

  if (!days && currentUser) {
      fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setDays(data.days))
  }

  function handleDelete(id) {
    const updatedDays = days.filter((day) => {
      return day.id !== id
    })
      setDays(updatedDays)
  }

  function handleAddDay(newDay) {
    const updatedDays = [...days, newDay]
    setDays(updatedDays)
  }

  return (
    <div>
     <Router>
       <Navbar currentUser={currentUser} setCurrentUser={setCurrentUser}/>
       <Switch>
         <Route exact path ="/">
           <Home />
         </Route>
         <Route exact path ='/login'>
           <Login setCurrentUser={setCurrentUser} />
         </Route>
         <Route exact path ='/signup'>
           <Signup setCurrentUser={setCurrentUser}/>
         </Route>
         <Route exact path='/calendar'>
           <CalendarPage days={days} currentUser={currentUser} onAddDay={handleAddDay}/>
         </Route>
         <Route exact path='/today'>
           <Today currentUser={currentUser} days={days} setDays={setDays} />
         </Route>
         <Route exact path='/profile'>
           <Profile currentUser={currentUser} />
         </Route>
         <Route exact path='/entries'>
           <Days days={days} onDelete={handleDelete}/>
         </Route>
         <Route exact path='/day/:id'>
           <DayDetails  />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
