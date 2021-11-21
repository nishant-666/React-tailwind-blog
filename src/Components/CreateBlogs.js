import React, { useState, useEffect } from 'react';
import { Form, Select } from 'semantic-ui-react';
import { Editor } from "react-draft-wysiwyg";
import { useNavigate } from 'react-router-dom'
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { addDoc } from 'firebase/firestore';
import Sidebar from './Sidebar';
const countryOptions = [
    { key: 'private', value: 'private', text: 'Private' },
    { key: 'public', value: 'public', text: 'Public' },
]

export default function CreateBlogs({ databaseRef }) {
    let navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [privacy, setPrivacy] = useState(null);
    const [blogPost, setBlogPost] = useState([])
    const getPrivacy = (e) => {
        setPrivacy(e.target.outerText)
    }
    const BlogBodyChange = (blog) => {
        setBlogPost(blog.blocks)
    }

    const submitBlogs = () => {
        addDoc(databaseRef, {
            title: title,
            privacy: privacy,
            author: author,
            blogPost: blogPost
        })
            .then(() => {
                navigate('/readBlogs')
            })
    }

    useEffect(() => {
        let userToken = sessionStorage.getItem('Auth Key')
        if (!userToken) {
            navigate('/login')
        }
    }, [])
    return (
        <div className="create-form-container">
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
                    <label className="form-label">Author Name</label>
                    <input
                        className="form-input"
                        placeholder='Please Enter the Author Name'
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </Form.Field>

                <button class="btn btn-green" onClick={submitBlogs}>
                    Submit your Blog
                </button>
            </Form>
        </div>
    )
}
