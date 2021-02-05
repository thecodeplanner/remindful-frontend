import React, { useState } from "react"
import EditProfileForm from './EditProfileForm'

function Profile({currentUser}) {

    const [isEditing, setIsEditing] = useState(false)
    const [firstName, setFirstName] = useState(currentUser.first_name)
    const[lastName, setLastName] = useState(currentUser.last_name)
    const [username, setUsername] = useState(currentUser.username)

    function handleUpdate(updatedInfo) {
        setFirstName(updatedInfo.first_name)
        setLastName(updatedInfo.last_name)
        setUsername(updatedInfo.username)
        setIsEditing(false)
    }

    return (
        <div className='ui raised segment'>
           
            <button className='clear-button pencil' onClick={() => setIsEditing(isEditing => !isEditing)}>
            Update Profile  <i className="pencil alternate icon" />
            </button>
            
            {isEditing ? <EditProfileForm currentUser={currentUser} onHandleUpdate={handleUpdate}/> 
            : 
            <>
            <h3>{(firstName) + ' ' + (lastName)} </h3>
            <img className="profile-img" src={currentUser.image} alt='profile'/>
            <h4>username: {username}</h4>
            <h4>Days Logged: {currentUser.days.length} days</h4>
            
            
            </> }


            </div>
        
        
        
    )
}

export default Profile