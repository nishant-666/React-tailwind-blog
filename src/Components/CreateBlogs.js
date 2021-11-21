import React, { useState, useEffect } from 'react';
import { Form, Select, Button, Icon } from 'semantic-ui-react';
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from 'react-router-dom'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
const countryOptions = [
    { key: 'private', value: 'private', text: 'Private' },
    { key: 'public', value: 'public', text: 'Public' },
]

export default function CreateBlogs({ databaseRef }) {
    let navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [banner, setBanner] = useState('');
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState({});
    const [privacy, setPrivacy] = useState(null);
    const [blogPost, setBlogPost] = useState([])
    const getPrivacy = (e) => {
        setPrivacy(e.target.outerText)
    }
    const BlogBodyChange = (blog) => {
        setBlogPost(blog.blocks)
    }

    const submitBlogs = () => {
        if (title && privacy && author && blogPost) {
            addDoc(databaseRef, {
                title: title,
                privacy: privacy,
                author: author,
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
        let userToken = sessionStorage.getItem('Auth Key')
        if (!userToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className="create-form-container">
            <div className="read-button">
                <button class="btn btn-green" onClick={() => navigate('/readBlogs')}>
                    Read Blogs
                </button>
            </div>
            <h3 className="blog-text">Create a Blog..</h3>
            <ToastContainer />
            <Topbar />
            <div className="sidebar-body">
                <Sidebar />
            </div>
            <Form>
                <Form.Field>
                    <label className="form-label">Title</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Title'
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
                <Form.Field className="form-field">
                    <label className="form-label">Content</label>
                    <Editor
                        // editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onChange={BlogBodyChange}
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

                <Form.Field>
                    <label className="form-label">Author Name</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Author Name'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Field>
                <div className="btn-container">
                    <button class="btn btn-green" onClick={submitBlogs}>
                        Submit your Blog
                    </button>
                </div>
            </Form>
        </div>
    )
}
