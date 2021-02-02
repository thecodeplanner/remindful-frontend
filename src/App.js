import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import CalendarPage from './CalendarPage'
import Today from './Today'
import Profile from './Profile'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [days, setDays] = useState([])

  console.log(currentUser)

  useEffect(() => {
    fetch('http://localhost:3000/days')
      .then(res => res.json())
      .then(daysData => setDays(daysData)
      )
  },[])

  if (currentUser) {
    const userDays = days.filter((days) => {
      return days.user_id === currentUser.id
    })
    setDays(userDays)
  }

   console.log(days)

  

  return (
    <div>
     <Router>
       <Navbar />
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
           <CalendarPage />
         </Route>
         <Route exact path='/today'>
           <Today days={days} />
         </Route>
         <Route exact path='/profile'>
           <Profile currentUser={currentUser} />
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
