import React, { useState, useEffect } from 'react'
import Graph from '../components/Graph'
// import Forms from '../components/Forms'
import Header from '../components/Header'
import View from '../components/View'
import UserProfile from '../components/UserProfile'
// import ExpenseChart from '../components/ExpenseChart'

function Profile() {
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
      <Header insideProfile={true} />
      <div className="App ">
        <div className='mb-5 d-flex align-items-center justify-content-center'>
          <div style={{ backgroundColor: 'orange', width: '1300px', height: '100px' }} className='d-flex align-items-center justify-content-center border rounded'>
            <h1 style={{ backgroundColor: 'orange' }} className="text-4xl ms-4   text-white ">Expense Tracker</h1>
          </div>
        </div>


        {/* <div className='row'>
          <div className='col-lg-6'>
            <Graph></Graph>
          </div>
          <div className='col-lg-6'>
            <UserProfile />
          </div>
        </div> */}
        <div className='row mt-5'>
          <div className='col-lg-1'></div>
          <div className='col-lg-10 '>
            <View></View>

          </div>
          <div className='col-lg-1'></div>
        </div>



      </div>
    </>
  )
}

export default Profile