import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'
import UserProfile from './UserProfile'

function Header({ insideProfile }) {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext)

  const navigate = useNavigate()
  const logout = () => {
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <div>
      <Navbar style={{ backgroundColor: 'black' }} className="card shadow  w-100">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} style={{ textDecoration: 'none', color: 'orange' }}>
              <i style={{ color: 'orange' }} className="fa-solid fa-comments-dollar me-3"></i>
              Spend Smartly
            </Link>
          </Navbar.Brand>
          {
            insideProfile ?
              <div className='d-flex align-items-center justify-content-center'>
                <button style={{ color: 'white', fontSize: '16px' }} className='btn '><UserProfile /></button>
                <button onClick={logout} style={{ border: '1px solid orange', color: 'white', fontSize: '16px' }} className='btn '> <Link style={{ color: 'white', textDecoration: 'none' }} to={'/'}>Logout </Link>
                </button>
              </div>
              :
              <div>
                <button style={{ border: '1px solid orange', color: 'white', fontSize: '14px' }} className='btn '><Link style={{ color: 'white', textDecoration: 'none' }} to={'/login'}>Sign In</Link></button>
                <button style={{ border: '1px solid orange', color: 'white', fontSize: '14px' }} className='btn ms-4'> <Link style={{ color: 'white', textDecoration: 'none' }} to={'/register'}>Sign Up</Link></button>
              </div>
          }

        </Container>
      </Navbar>

    </div>
  )
}

export default Header