import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import './Sidebar.css';
export default function Sidebar() {
    let navigate = useNavigate();
    const auth = getAuth()
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/login');
                localStorage.removeItem('User Name');
                localStorage.removeItem('User Email');
                localStorage.removeItem('PhotoURL');
            })
            .catch((error) => {
                console.log(error.message)
            });
    }
    return (
        <div className="sidebar-main">
            <div className="sidebar-menu">
                <ul>
                    <Link to={'/createBlogs'}>
                        <li className='sidebar-lists'>Write a Blog</li>
                    </Link>
                    <Link to={'/readBlogs'}>
                        <li className='sidebar-lists'>Public Blogs</li>
                    </Link>
                    <Link to={'/myBlogs'}>
                        <li className='sidebar-lists'>My Blogs</li>
                    </Link>
                    <Link to={'/savedBlogs'}>
                        <li className='sidebar-lists'>Saved Blogs</li>
                    </Link>
                    <li className='sidebar-lists' onClick={handleLogout}>Log out</li>
                </ul>
            </div>
        </div>
    )
}
