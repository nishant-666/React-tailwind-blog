import React, { useEffect, useState } from 'react';
import { getDocs } from 'firebase/firestore';
import Sidebar from './Sidebar';
export default function ReadBlogs({ databaseRef }) {
    const [blogs, setBlogs] = useState([])
    const getBlogs = async () => {
        const blogs = await getDocs(databaseRef);
        setBlogs(blogs.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    useEffect(() => {
        getBlogs();
    }, [])
    return (
        <div className="read-form-container">
            <div className="sidebar-body">
                <Sidebar />
            </div>
            {blogs.map((blog) => {
                return (
                    <div class="blog-posts">
                        <div class="blog-content">
                            <p class="author-name">Author: {blog.author}</p>
                            <h4 class="blog-title">{blog.title}</h4>
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
            })}
        </div>
    )
}
