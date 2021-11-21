import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Sidebar.css';
export default function Sidebar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem('Auth Key');
        navigate('/login')
    }
    return (
        <div className="sidebar-main">
            <div className="sidebar-menu">
                <ul>
                    <Link to={'/createBlogs'}>
                        <li className='sidebar-lists'>Create Blogs</li>
                    </Link>
                    <Link to={'/readBlogs'}>
                        <li className='sidebar-lists'>Read Blogs</li>
                    </Link>
                    
                    <li className='sidebar-lists' onClick={handleLogout}>Log out</li>
                </ul>
            </div>
        </div>
    )
}
