import React, { useEffect, useState } from 'react';
import UserImage from '../assets/userImage.png';
import { Image } from 'semantic-ui-react';
export default function Topbar() {
  const [username, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('')
  useEffect(() => {
    setUserName(localStorage.getItem('User Name'));
    setUserEmail(localStorage.getItem('User Email'))
    setPhotoURL(localStorage.getItem('PhotoURL'))
  }, [])
  return (
    <div className="float-right">
      <div className="topbar-container">
        <Image size="mini" src={photoURL ? photoURL : UserImage} avatar />
        <p className="welcome-text">Welcome, {username ? username : userEmail}</p>
      </div>
    </div>
  )
}
