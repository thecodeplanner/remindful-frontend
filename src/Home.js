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
        <>
        <div id="home-page">
            <img src="remindful.png" alt="remindful-logo"/>
        </div>
        <div className="signin-buttons">
            <div>
                <button onClick={handleLogin} >login</button>
                <button onClick={handleSignup} >sign up</button>
            </div>
        </div>
        
        
       
        </>
    )

}

export default Home