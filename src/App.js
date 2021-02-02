import React, {useEffect, useState} from 'react'
import Calendar from 'react-calendar';
import { format } from 'date-fns'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'

// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {

  useEffect(() => {
    fetch('http://localhost:3000/days')
      .then(res => res.json())
      .then(daysData => console.log(daysData))
  })

  return (
    <div>
     <Router>
       <Switch>
         <Route exact path ="/">
           <Home />
         </Route>
         <Route exact path ='/login'>
           <Login />
         </Route>
         <Route exact path ='/signup'>
           <Signup/>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
