import React, { useEffect, useState } from 'react';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Dimmer, Loader, Image, Popup, Button, Icon } from 'semantic-ui-react';
import Topbar from './Topbar';
import NoData from './NoData';
import UserImage from '../assets/userImage.png';
import { database } from '../firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsThreeDotsVertical } from "react-icons/bs";
export default function ReadBlogs({ databaseRef }) {
    let navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [photoURL, setPhotoURL] = useState('')
    const getBlogs = async () => {
        const blogs = await getDocs(databaseRef);
        setBlogs(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
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

    const handleDelete = (id) => {
        const data = doc(database, 'react-blogs', id);
        deleteDoc(data)
            .then(() => {
                getBlogs()
                toast.success("Data Deleted Successfully!", {
                    pauseOnHover: true
                });
            })
    }

    return (
        <div className="read-form-container mt-3 mb-2">
            <ToastContainer />
            <Topbar />
            <div className="sidebar-body">
                <Sidebar />
            </div>
            {blogs.length > 0 ? (
                <div className="mobile-only">
                    <div className="create-button">
                        <button class="btn btn-green" onClick={() => navigate('/createBlogs')}>
                            Create Blogs
                        </button>
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
                                        <div className="three-dots">
                                            <Popup
                                                on='click'
                                                position='bottom right'
                                                trigger={<BsThreeDotsVertical size="35px" />}
                                            >
                                                <div className="popup-container">
                                                    <p className="delete-blog" onClick={() => handleDelete(blog.id)}>
                                                        <Icon size="large" name="trash" />
                                                        Delete Post
                                                    </p>
                                                </div>
                                            </Popup>
                                        </div>
                                        <div className="author-container">
                                            <Image size="mini" src={photoURL ? photoURL : UserImage} avatar />
                                            <p class="author-name">{blog.author}</p>
                                        </div>
                                        <div className="banner-container">
                                            <Image src={blog.banner} className="banner-image" />
                                        </div>
                                        <p class="blog-timestamp">{blog.timestamp} / <span className="tags-container">{blog.tag}</span></p>
                                        <p class="blog-title">{blog.title}</p>
                                        <p class="blog-post">
                                            {blog.blogPost.map((blogPost) => {
                                                return (
                                                    <p>
                                                        {blogPost.inlineStyleRanges.length > 0 ?
                                                            blogPost.inlineStyleRanges[0].style === 'BOLD' ?
                                                                <p className="text-bold">{blogPost.text}</p> :
                                                                blogPost.inlineStyleRanges[0].style === 'ITALIC' ?
                                                                    <p className="italic-text">{blogPost.text}</p> :
                                                                    blogPost.inlineStyleRanges[0].style === 'UNDERLINE' ?
                                                                        <p className="underlined-text">{blogPost.text}</p> : <p>{blogPost.text}</p>
                                                            : <p>{blogPost.text}</p>
                                                        }
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
