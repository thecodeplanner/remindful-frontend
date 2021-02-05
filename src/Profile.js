import React, { useState } from "react"
import EditProfileForm from './EditProfileForm'

function Profile({ currentUser }) {

    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(currentUser.first_name)
    const [lastName, setLastName] = useState(currentUser.last_name)
    const [username, setUsername] = useState(currentUser.username)

    function handleUpdate(updatedInfo) {
        setFirstName(updatedInfo.first_name)
        setLastName(updatedInfo.last_name)
        setUsername(updatedInfo.username)
        setIsEditing(false)
    }

    return (
        <div className='ui raised centered segment' style={{ backgroundColor: '#e0f9b5' }}>
            <a className="ui yellow ribbon label"><i className='user icon'></i>profile</a>


            <button className='clear-button pencil' onClick={() => setIsEditing(isEditing => !isEditing)}>
                update profile  <i className="edit outline icon" />
            </button>

            {isEditing ?
                <div className='ui three column centered grid'>
                    <div className='column'>


                        <EditProfileForm currentUser={currentUser} onHandleUpdate={handleUpdate} />
                    </div>
                </div>
                :
                <div className='ui two column centered grid'>
                    <div className='column'>
                        <div className='user-info'>
                            <h3 className='user-title'>{(firstName) + ' ' + (lastName)} </h3>
                            <img className="profile-img" src={currentUser.image} alt='profile' />
                            <h4 className='water-title'>username: {username}</h4>
                            <h4 className='water-title'>days logged: {currentUser.days.length} days</h4>
                        </div>
                    </div>

                </div>
            }

            {/* NEED TO ADD CLICK HANDLER */}
            <div id='delete-button'>
                <button className="ui mini negative basic button">Delete Account</button>
            </div>
        </div>



    )
}

export default Profile