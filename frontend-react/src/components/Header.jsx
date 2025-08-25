import {useContext} from 'react'
import Button from './Button'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Header = () => {
  const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    setIsLoggedIn(false)
    console.log('Logged out.')
    navigate('/login')

  }

  return (
    <>
        <nav className='navbar container pt-3 pb-3 align-items-start'>
            <Link className='navbar-brand text-light' to="/">Stock Prediction Portal</Link>

            <div>
              {isLoggedIn ? (
                <>
                  <Button text='Dashboard' class='btn btn-outline-success' url='/dashboard' />
                  &nbsp;
                  <button className='btn btn-outline-secondary' onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <Button text='Login' class='btn btn-outline-info' url="/login" />
                  &nbsp;
                  <Button text='Register' class='btn-info' url="/register" />
                </>
              )}
                
            </div>
        </nav>
    </>
  )
}

export default Header
