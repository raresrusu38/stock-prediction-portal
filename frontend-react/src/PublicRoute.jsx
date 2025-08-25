import { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate } from 'react-router-dom'

const PublicRoute = (children) => {
    const { isLoggedIn } = useContext(AuthContext)
    return !LoggedIn ? (
        children
    ) : (
        <Navigate to='/dashboard' />
    ) 
}

export default PublicRoute
