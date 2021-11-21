import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
export default function Sidebar() {
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
                </ul>
            </div>
        </div>
    )
}
