import React, {useState} from 'react'


function EditProfileForm(currentUser) {
  const [username, setUsername] = useState(currentUser.username)

  function handleSubmit(e) {
    e.preventDefault()

    const updatedUserInfo = {
      username
    }

    console.log(updatedUserInfo)
  }


  return (
    <div className='ui form'>
      <form onSubmit={handleSubmit} className='fields'>
        <div className='field'>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <input className=" ui button" type="submit" value="add" />
      </form>
    </div>
  )
}

export default EditProfileForm