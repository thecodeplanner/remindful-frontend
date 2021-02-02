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
  const [days, setDays] = useState(null)

  // console.log(currentUser)

  if (!days && currentUser) {
      fetch(`http://localhost:3000/users/${currentUser.id}`)
        .then(res => res.json())
        .then(data => setDays(data.days))
  }
  
  // console.log(days)

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
           <CalendarPage days={days}/>
         </Route>
         <Route exact path='/today'>
           <Today currentUser={currentUser} days={days} setDays={setDays} />
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
