
import { useContext } from 'react';
import { UserContext } from './UserContext'

const UserDetails = () => {
    const userContext = useContext(UserContext)
    const handleLoggedIn = () => {
        if (userContext) {
            userContext.setUser({
                name: 'Prasanth',
                email: 'prasanthreddy.chittapu@gmail.com'
            })
        }
    }
    const handleLoggedout = () => {
        if (userContext) {
            userContext.setUser(null)
        }
    }

    return (
        <div>
            <button onClick={handleLoggedIn}>Login</button>
            <button onClick={handleLoggedout}>Logout</button>
            <div>User name is {userContext?.user?.name} </div>
            <div>User email is {userContext?.user?.email}  </div>
        </div>
    )
}

export default UserDetails