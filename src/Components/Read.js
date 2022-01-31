import React, { useState } from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import { useLocation } from 'react-router-dom';
import { Image } from 'semantic-ui-react';
import UserImage from '../assets/userImage.png';
export default function Read() {
    const { state } = useLocation();
    const [oneBlog, setOneBlog] = useState({})
    React.useEffect(() => {
        if (state) {
            window.scroll(0, 0)
            const { blogData } = state;
            setOneBlog(blogData)
        }
    }, [])
    return (
        <div className='read-form-container mt-3 mb-2'>
            <Topbar />
            <div className="sidebar-body">
                <Sidebar />
            </div>

            <div class="blog-posts">
                <div class="blog-content">
                    <div className="blog-main">
                        <div>
                            <p class="blog-timestamp">{oneBlog.timestamp} / <span className="tags-container">{oneBlog.tag}</span></p>
                            <p class="blog-title">{oneBlog.title}</p>
                            <div className="author-container">
                                <Image className="avatar-img" size="mini" src={oneBlog.avatar ? oneBlog.avatar : UserImage} avatar />
                                <p class="author-name">{oneBlog.author}</p>
                            </div>
                            <div className="banner-container">
                                <Image src={oneBlog.banner} className="banner-image" />
                            </div>
                            <p class="blog-post">
                                <div dangerouslySetInnerHTML={{ __html: `${oneBlog.blogPost}` }}></div>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}