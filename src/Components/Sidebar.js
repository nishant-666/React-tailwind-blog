import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import './Sidebar.css';
export default function Sidebar() {
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('User Name');
        localStorage.removeItem('User Email');
        sessionStorage.removeItem('Auth Key');
        navigate('/React-tailwind-blog/login')
    }
    return (
        <div className="sidebar-main">
            <div className="sidebar-menu">
                <ul>
                    <Link to={'/React-tailwind-blog/createBlogs'}>
                        <li className='sidebar-lists'>Create Blogs</li>
                    </Link>
                    <Link to={'/React-tailwind-blog/readBlogs'}>
                        <li className='sidebar-lists'>Public Blogs</li>
                    </Link>
                    
                    <li className='sidebar-lists' onClick={handleLogout}>Log out</li>
                </ul>
            </div>
        </div>
    )
}
