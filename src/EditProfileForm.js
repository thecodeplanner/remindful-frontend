import React, {useState} from 'react'


function EditProfileForm({currentUser, onHandleUpdate}) {
  const [username, setUsername] = useState(currentUser.username)
  const [firstName, setFirstName] = useState(currentUser.first_name)
  const [lastName, setLastName] = useState(currentUser.last_name)
  const [password, setPassword] = useState('')

  console.log(username)

  function handleSubmit(e) {
    e.preventDefault()

    const updatedUserInfo = {
      id: currentUser.id,
      username,
      first_name: firstName,
      last_name: lastName,
      password
    }
    console.log(updatedUserInfo)

    // onHandleUpdate(updatedUserInfo)

    fetch(`http://localhost:3000/users/${currentUser.id}`, {
      method: "PATCH", 
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedUserInfo)
  })
      .then(res => res.json())
      .then(userData => {onHandleUpdate(userData)})

      // How to update form after submit? 

      // setFirstName(userData.first_name)
      // setLastName(userData.last_name)
      // setUsername(userData.username)

  }


  return (
   

    <div className='ui form'>
      <form onSubmit={handleSubmit} >
        <div className='field'>
        <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className='field'>
        <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className='field'>
        <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className='field'>
        <label>Change Password</label>
          <input
            type="password"
            value={password}
            placeholder='change password'
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input className=" ui small basic button" type="submit" value="save changes" />
      </form>
    </div>
  )
}

export default EditProfileForm