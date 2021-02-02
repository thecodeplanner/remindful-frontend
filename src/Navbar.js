import React from "react"
import { NavLink, useHistory } from "react-router-dom"

function Navbar() {
    const history = useHistory()
    return(
        <div>
            {/* <h1>remindful</h1> */}
            <NavLink to="/calendar">
                <li>my calendar</li>
            </NavLink>
            <NavLink to="/today">
                <li>today</li>
            </NavLink>
            <NavLink to="/profile">
                <li>profile</li>
            </NavLink>
            {/* need logout button */}

        </div>
        
    )
}

export default Navbar