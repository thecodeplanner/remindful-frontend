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
                    <NavLink to="/calendar">
                        <li>my calendar</li>
                    </NavLink>
                    <NavLink to="/today">
                        <li>today</li>
                    </NavLink>
                    <NavLink to="/entries">
                        <li>all entries</li>
                    </NavLink>
                    <NavLink to="/profile">
                        <li>profile</li>
                    </NavLink>
                    <li onClick={handleLogout}>logout</li>
                </> : 
                    <NavLink to="/">
                    <li> remindful </li>
                    </NavLink>
            }

            {/* need logout button */}

        </div>

    )
}

export default Navbar

