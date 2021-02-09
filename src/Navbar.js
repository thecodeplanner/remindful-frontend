import React from "react"
import { NavLink, useHistory } from "react-router-dom"

function Navbar({ currentUser, setCurrentUser }) {
    const history = useHistory()

    function handleLogout() {
        setCurrentUser(null)
        history.push('/')
    }

    return (
        <div className="navbar">
            {currentUser ?
                <>
                    <NavLink to="/calendar" exact className="button">
                        <li>my calendar</li>
                    </NavLink>
                    <NavLink to="/today" exact className="button">
                        <li>today</li>
                    </NavLink>
                    <NavLink to="/entries" exact className="button">
                        <li>all entries</li>
                    </NavLink>
                    <NavLink to="/profile" exact className="button">
                        <li>profile</li>
                    </NavLink>
                    <a className='button' onClick={handleLogout}>logout</a>
                </> : 
                    <NavLink to="/" exact className="button">
                    <li> remindful </li>
                    </NavLink>
            }

        </div>

    )
}

export default Navbar

