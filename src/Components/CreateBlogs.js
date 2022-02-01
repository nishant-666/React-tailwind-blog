import React, { useState, useEffect } from 'react';
import { Form, Select, Button, Icon, Divider } from 'semantic-ui-react';
import { Editor } from "react-draft-wysiwyg";
import { useNavigate, useLocation } from 'react-router-dom';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addDoc, doc, updateDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { app, database } from '../firebase-config'
import ReactQuill from 'react-quill';
import EditorToolbar, { modules, formats } from "./QuillToolbar";
import 'react-quill/dist/quill.snow.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import moment from 'moment';
const countryOptions = [
    { key: 'private', value: 'private', text: 'Private' },
    { key: 'public', value: 'public', text: 'Public' },
]

export default function CreateBlogs({ databaseRef }) {
    let navigate = useNavigate();
    const { state } = useLocation();
    const [title, setTitle] = useState('');
    const [tag, setTag] = useState('');
    const [banner, setBanner] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState({});
    const [privacy, setPrivacy] = useState(null);
    const [blogPost, setBlogPost] = useState('');
    const [username, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('');
    React.useEffect(() => {
        if (state) {
            const { blogData } = state;
            setTitle(blogData.title)
            setBanner(blogData.banner)
            setTag(blogData.tag)
            setPrivacy(blogData.privacy)
            setBlogPost(blogData.blogPost)
        }
    }, [])
    const getPrivacy = (e) => {
        setPrivacy(e.target.outerText)
    }
    const BlogBodyChange = (blog) => {
        setBlogPost(blog)
    }

    const submitBlogs = () => {
        if (title && privacy && blogPost) {
            addDoc(databaseRef, {
                title: title,
                privacy: privacy,
                tag: tag,
                avatar: localStorage.getItem('PhotoURL'),
                timestamp: moment().format('LL'),
                userEmail: userEmail,
                author: username ? username : userEmail,
                banner: banner,
                blogPost: blogPost
            })
                .then(() => {
                    navigate('/readBlogs')
                })
        }
        else {
            toast.error("Please fill all the fields...");
        }
    }

    const updateBlog = () => {
        const collectionById = doc(database, 'react-blogs', state.blogData.id)
        updateDoc(collectionById, {
            title: title,
            privacy: privacy,
            tag: tag,
            userEmail: userEmail,
            banner: banner,
            timestamp: moment().format('LL'),
            blogPost: blogPost
        }).then(() => {
            navigate('/readBlogs')
        })
    }

    const selectFile = (e) => {
        e.preventDefault();
        setFile(e.target.files[0])
    }

    const uploadFile = () => {
        const storage = getStorage();
        let uploadedImageName = (Math.random() + 1).toString(36).substring(7);
        const storageRef = ref(storage, uploadedImageName);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                setLoading(true)
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setLoading(false)
                    setBanner(downloadURL)
                    toast.success("Banner Added");
                });
            }
        );
    }

    useEffect(() => {
        let userToken = sessionStorage.getItem('Auth Key');
        setUserName(localStorage.getItem('User Name'));
        setUserEmail(localStorage.getItem('User Email'))
        if (!userToken) {
            navigate('/login')
        }
    }, [])

    const readBlogs = () => {
        window.scrollTo(0, 0)
        navigate('/readBlogs')
    }
    return (
        <div className="create-form-container">
            <Topbar />
            <p className="blog-text">Create a Blog..</p>
            <ToastContainer />
            <div className="sidebar-body">
                <Sidebar />
            </div>
            <Form>
                <Form.Field>
                    <label className="form-label">Title</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="form-label">Privacy</label>
                    <Select
                        className="form-input"
                        placeholder='Select the Privacy'
                        options={countryOptions}
                        onChange={(e) => getPrivacy(e)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="form-label">Content</label>
                    <div className='mt-4'>
                        <EditorToolbar />
                        <ReactQuill
                            theme="snow"
                            placeholder={"Write something awesome..."}
                            value={blogPost}
                            className='react-quill'
                            modules={modules}
                            formats={formats}
                            onChange={BlogBodyChange} />
                    </div>
                </Form.Field>

                <Form.Field>
                    <label className="form-label">Tags</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Tags'
                        value={tag}
                        onChange={(e) => setTag(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label className="form-label">Banner Image</label>
                    <input type="file" id="actual-btn" hidden onChange={selectFile} />
                    <div className="flex-inline">
                        <label for="actual-btn" className="file-label">
                            {file.name ? file.name : 'Choose Banner Image'}
                        </label>
                        <Button
                            loading={loading ? true : false}
                            primary
                            className="upload-button"
                            onClick={uploadFile}>
                            Upload
                        </Button>
                    </div>
                </Form.Field>

                {/* <Form.Field>
                    <label className="form-label">Author</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Author Name'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Field> */}
                <div className="btn-container">
                    {state ? (
                        <button class="btn btn-green" onClick={updateBlog}>
                            Update your Blog
                        </button>
                    ) : (
                        <button class="btn btn-green" onClick={submitBlogs}>
                            Submit your Blog
                        </button>
                    )}
                </div>
                <div className="mobile-only pb-5">
                    <Divider horizontal>Or</Divider>
                    <p className="read-blogs-text">Don't want to write..</p>
                    <button class="btn btn-green btn-block" onClick={readBlogs}>
                        Read Blogs
                    </button>
                    <button class="btn btn-green btn-block blogs-btn" onClick={() => navigate('/myBlogs')}>
                        My Blogs
                    </button>
                    <button class="btn btn-green btn-block blogs-btn" onClick={() => navigate('/savedBlogs')}>
                        Saved Blogs
                    </button>
                </div>
            </Form>
        </div>
    )
}
