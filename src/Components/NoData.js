import React from 'react';
import NoDataImg from '../assets/NoDataImg.jpg';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function NoData() {
    let auth = getAuth();
    let navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth)
        .then(() => {
            localStorage.removeItem('User Name');
            localStorage.removeItem('User Email');
            localStorage.removeItem('PhotoURL');
            navigate('/login')
        })
    }
    return (
        <div className="no-data-container">
            <img className="no-data-image" src={NoDataImg} />
            <p className="no-data-text">No Blogs Found.. ☹️</p>
            <button class="btn btn-green mt-3" onClick={() => navigate('/createBlogs')}>
                Write a Blog..
            </button>

            <div className="logout-mobile">
                <button class="btn btn-green mt-3" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        </div>
    )
}
