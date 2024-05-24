import React, { useState, useEffect } from 'react'

function UserProfile() {
    const [displayName, setDisplayName] = useState("")
    useEffect(() => {
      if (sessionStorage.getItem("existingUser")) {
        const { username } = JSON.parse(sessionStorage.getItem("existingUser"))
        setDisplayName(username)
      } else {
        setDisplayName("")
      }
    }, [])
  return (
    <>
    <div id='style' style={{fontSize:'13px'}} className='me-4'><i class="fa-regular fa-user me-2"> {displayName?.split(" ")[0]} </i></div>    
       
    </>
  )
}

export default UserProfile