import * as React from 'react'
import { Link } from 'react-router-dom'

const HomeScreen = () => {
    return (
        <div className="app">
            <h5>Welcome to the</h5>
            <h1>Leave Request Portal</h1>
            <div className='btnContainer'>
                <Link to={`/dashboard`} className='btn blue'>Proceed</Link>
            </div>
        </div>
    )
}

export default HomeScreen