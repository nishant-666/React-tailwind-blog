import React, { useEffect, useState } from 'react';
import { getDocs, doc, deleteDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';
import { Dimmer, Loader, Image, Popup, Divider, Icon } from 'semantic-ui-react';
import Topbar from './Topbar';
import NoData from './NoData';
import UserImage from '../assets/userImage.png';
import { database } from '../firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsThreeDotsVertical } from "react-icons/bs";
export default function SavedBlogs({ savedRef }) {
    let navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [savedEmail, setEmail] = useState('')
    const [photoURL, setPhotoURL] = useState('');
    const getBlogs = async () => {
        const blogs = await getDocs(savedRef);
        setBlogs(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        setDataLoading(false);
    }
    useEffect(() => {
        let userToken = sessionStorage.getItem('Auth Key')
        if (!userToken) {
            navigate('/login')
        }
        else {
            setEmail(localStorage.getItem('User Email'))
            getBlogs();
            setPhotoURL(localStorage.getItem('PhotoURL'))
        }
    }, [])

    const handleEdit = (data) => {
        navigate('/createBlogs', {
            state: {
                blogData: data,
            }
        })
    }
    const handleLogout = () => {
        localStorage.removeItem('User Name');
        localStorage.removeItem('User Email');
        sessionStorage.removeItem('Auth Key');
        navigate('/login')
    }

    const handleDelete = (id) => {
        const data = doc(database, 'saved-blogs', id);
        deleteDoc(data)
            .then(() => {
                getBlogs()
                toast.success("Data Deleted Successfully!", {
                    pauseOnHover: true
                });
            })
    }

    const readOneBlog = (data) => {
        navigate(`/read/${data.id}`, {
            state: {
                blogData: data,
            }
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
                            Write a Blogs
                        </button>
                        <button class="btn btn-green ml-3" onClick={handleLogout}>
                            Log out
                        </button>
                    </div>
                    <div className="create-button">
                        <button class="btn btn-green" onClick={() => navigate('/savedBlogs')}>
                            Saved Blogs
                        </button>
                        <button class="btn btn-green ml-3" onClick={() => navigate('/myBlogs')}>
                            My Blogs
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
                                blog.userEmail === savedEmail ? (
                                    <div class="blog-posts">
                                        <div class="blog-content">
                                            <div className="three-dots">
                                                <Popup
                                                    on='click'
                                                    position='bottom right'
                                                    trigger={<BsThreeDotsVertical size="1.5rem" />}
                                                >
                                                    <div className="popup-container">
                                                        <p className="delete-blog" onClick={() => handleEdit(blog)}>
                                                            <Icon size="large" name="edit" />
                                                            Edit Post
                                                        </p>
                                                        <Divider />
                                                        <p className="delete-blog" onClick={() => handleDelete(blog.id)}>
                                                            <Icon size="large" name="trash" />
                                                            Delete Post
                                                        </p>
                                                    </div>
                                                </Popup>
                                            </div>
                                            {/* <div className="banner-container">
                                                <Image src={blog.banner} className="banner-image" />
                                            </div> */}
                                            <p class="blog-timestamp">{blog.timestamp} / <span className="tags-container">{blog.tag}</span></p>
                                            <p class="blog-title">{blog.title}</p>
                                            <div className="author-container">
                                                <Image className="avatar-img" size="mini" src={blog.avatar ? blog.avatar : UserImage} avatar />
                                                <p class="author-name">{blog.author.substring(0, 21)}</p>
                                            </div>
                                            <p class="blog-post">
                                                <div dangerouslySetInnerHTML={{ __html: `${blog.blogPost.substring(0, 100)}..` }}></div>
                                            </p>
                                            <div className='readMore' onClick={() => readOneBlog(blog)}>
                                                Read More..
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )
                            )
                        })
                    ) : (
                        <NoData />
                    )
                )}
        </div>
    )
}
