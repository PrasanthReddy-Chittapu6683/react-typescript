import { useState } from 'react'

const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLoggedIn = () => {
        setIsLoggedIn(true)
    }
    const handleLoggedout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <button onClick={handleLoggedIn}>Login</button>
            <button onClick={handleLoggedout}>Logout</button>
            <div>User is {isLoggedIn ? 'Loggedin' : 'Logout'}</div>
        </div>
    )
}

export default LoggedIn