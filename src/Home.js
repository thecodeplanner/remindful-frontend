import React from "react"
import { useHistory } from "react-router-dom"

function Home() {
    const history = useHistory()

    function handleLogin() {
        history.push('/login')
    }

    function handleSignup() {
        history.push('/signup')
    }

    return (
        <div className='ui raised segment'>

            <div id="home-page">
                <img className='logo' src="remindful-logo-large.png" alt="remindful-logo" />
            </div>
            
            <div className="signin-buttons">

                <div class="ui medium basic buttons">
                    <button class="ui button" onClick={handleLogin}>login</button>
                    <div class="or"></div>
                    <button class="ui button" onClick={handleSignup}>sign up</button>
                </div>

            </div>

        </div>
    )

}

export default Home