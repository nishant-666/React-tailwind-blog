import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Dimmer, Loader, Image } from 'semantic-ui-react';
import Topbar from './Topbar';
import NoData from './NoData';
import UserImage from '../assets/userImage.png';
export default function ReadBlogs({ databaseRef }) {
    let navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [photoURL, setPhotoURL] = useState('')
    const getBlogs = async () => {
        const blogs = await getDocs(databaseRef);
        setBlogs(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        console.log(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setDataLoading(false);
    }
    useEffect(() => {
        let userToken = sessionStorage.getItem('Auth Key')
        if (!userToken) {
            navigate('/login')
        }
        else {
            getBlogs();
            setPhotoURL(localStorage.getItem('PhotoURL'))
        }
    }, [])

    const handleLogout = () => {
        localStorage.removeItem('User Name');
        localStorage.removeItem('User Email');
        sessionStorage.removeItem('Auth Key');
        navigate('/login')
    }

    return (
        <div className="read-form-container mt-3 mb-2">
            <Topbar />
            <div className="sidebar-body">
                <Sidebar />
            </div>
            {blogs.length > 0 ? (
                <div className="flex-inline">
                    <div className="create-button">
                        <button class="btn btn-green" onClick={() => navigate('/createBlogs')}>
                            Create Blogs
                        </button>
                    </div>
                    <div className="logout-button">
                        <button class="btn btn-green ml-3" onClick={handleLogout}>
                            Log out
                        </button>
                    </div>
                </div>
            ) : (
                ""
            )}
            {
                dataLoading ? (
                    <Dimmer active>
                        <Loader indeterminate>Loading Blogs for you..</Loader>
                    </Dimmer>
                ) : (
                    blogs.length > 0 ? (
                        blogs.map((blog) => {
                            return (
                                <div class="blog-posts">
                                    <div class="blog-content">
                                        <div className="banner-container">
                                            <Image fluid src={blog.banner} />
                                        </div>
                                        <p class="blog-title">{blog.title}</p>
                                        <div className="author-container">
                                            <Image size="mini" src={photoURL ? photoURL : UserImage} avatar />
                                            <p class="author-name">{blog.author}</p>
                                        </div>
                                        <p class="blog-post">
                                            {blog.blogPost.map((blogPost) => {
                                                return (
                                                    <p>
                                                        {blogPost.inlineStyleRanges.length > 0 ?
                                                            blogPost.inlineStyleRanges[0].style === 'BOLD' ?
                                                                <p className="bold-text">{blogPost.text}</p> : blogPost.inlineStyleRanges[0].style === 'ITALIC' ?
                                                                    <p className="italic-text">{blogPost.text}</p> : blogPost.inlineStyleRanges[0].style === 'UNDERLINE' ?
                                                                        <p className="underlined-text">{blogPost.text}</p> : <p>{blogPost.text}</p> : <p>{blogPost.text}</p>}
                                                    </p>
                                                )
                                            })}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <NoData />
                    )
                )}
        </div>
    )
}
