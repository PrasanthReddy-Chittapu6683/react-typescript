import { useState } from 'react'

type AuthUser = {
    name?: string
    email?: string
}


const User = ({ name, email }: AuthUser) => {

    const [user, setUser] = useState<null | AuthUser>(null)
    const handleLoggedIn = () => {
        setUser({
            name: 'Prasanth',
            email: 'prasanthreddy.chittapu@gmail.com'
        })
    }
    const handleLoggedout = () => {
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLoggedIn}>Login</button>
            <button onClick={handleLoggedout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}

export default User