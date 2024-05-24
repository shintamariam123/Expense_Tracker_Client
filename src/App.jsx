import { Route, Routes, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Profile from './pages/Profile'
import { useContext } from 'react'
import { tokenAuthContext } from './contexts/TokenAuth'

function App() {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
    <Routes>
       <Route path='/' element={<Home/>} /> 
       <Route path='/login' element={<Auth/>}/>
       <Route path='/register' element={<Auth insideRegister/>}/>
       <Route path='/profile' element={isAuthorised?<Profile/>:<Navigate to={'/login'}/>}/>
       <Route path='/*' element={<Navigate to={'/'}/>} />
     </Routes>
    </>
  )
}

export default App
