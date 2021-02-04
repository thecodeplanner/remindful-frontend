import React from "react"

function Profile({currentUser}) {

    function handleEdit() {
        console.log('edit profile')
        return(
            <div className="ui active modal">
                <form>
                    <input type="text"></input>
                </form>
        </div>
        )

        
    }

    return (
        <div>
            <h1> My Profile</h1>
            <img className="profile-img" src={currentUser.image} alt='profile'/>
            <h3>Name: {(currentUser.first_name) + ' ' + (currentUser.last_name)} </h3>
            <h4>Username: {currentUser.username}</h4>
            <h4>Days Logged: {currentUser.days.length} days</h4>
            <button onClick={handleEdit}>Edit Profile</button>
            
            </div>
        
        
        
    )
}

export default Profile