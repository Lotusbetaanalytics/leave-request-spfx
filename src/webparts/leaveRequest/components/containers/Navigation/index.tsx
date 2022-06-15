import * as React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
import { AiFillLayout, AiOutlineFileDone, AiOutlineFileSearch, AiOutlineLogout } from 'react-icons/ai'

const Navigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.userProfile}>
                <div className={styles.photo}></div>
                <h3>John Doe</h3>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link to={`/dashboard`}><AiFillLayout /> Dashboard</Link></li>
                    <li><Link to={`/leave`}><AiOutlineFileDone />Leave</Link></li>
                    <li><Link to={`/logs`}><AiOutlineFileSearch />Logs</Link></li>
                </ul>
            </div>
            <div className={styles.links}>
                <ul>
                    <li><Link to={`/`}><AiOutlineLogout /> Logout</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation