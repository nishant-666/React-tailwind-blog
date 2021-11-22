import React from 'react';
import NoDataImg from '../assets/NoDataImg.jpg';
import { useNavigate } from 'react-router-dom'

export default function NoData() {
    let navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('User Name');
        localStorage.removeItem('User Email');
        sessionStorage.removeItem('Auth Key');
        navigate('/login')
    }
    return (
        <div className="no-data-container">
            <img className="no-data-image" src={NoDataImg} />
            <h1 className="no-data-text">Please Write Some Blogs! ☹️</h1>
            <button class="btn btn-green" onClick={() => navigate('/createBlogs')}>
                Write a Blog..
            </button>

            <button class="btn btn-green mt-3" onClick={handleLogout}>
                Log out
            </button>

        </div>
    )
}
