import React, { useState } from "react"
import { useHistory } from "react-router-dom"

function Signup({setCurrentUser}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:3000/signup', {
            method: "POST",
        })
            .then((res) => res.json())
            .then(setCurrentUser)
        return (
            history.push('/calendar')
        )
    }

    return(
        <div className='ui raised segment centered' style={{backgroundColor: '#e0f9b5'}}>
            <div className='ui four column centered grid'>
                <div className='column'>
                   
                    <h2 className='login-title'>let's get started!</h2>
                    <div className='ui form'>
                        <form className="login-form" onSubmit={handleSubmit}>
                        <div className='field'>
                                <input
                                    type="text"
                                    placeholder="first name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="last name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className='field'>
                                <input
                                    type="text"
                                    placeholder="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>


                            <div className='field'>
                                <input
                                    type="password"
                                    placeholder="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <input className="ui basic button" type="submit" value="create new account" />
                        </form>

                       
                   



                    </div>
                    




                </div>



            </div>


        </div>


    )
}

export default Signup