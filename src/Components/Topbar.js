import React, { useEffect, useState } from 'react';
import UserImage from '../assets/userImage.png';
import { Image } from 'semantic-ui-react';
export default function Topbar() {
  const [isTopMenu, setIsTopMenu] = useState(false)
  const [username, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [photoURL, setPhotoURL] = useState('')
  useEffect(() => {
    setUserName(localStorage.getItem('User Name'));
    setUserEmail(localStorage.getItem('User Email'))
    setPhotoURL(localStorage.getItem('PhotoURL'))
  }, [])

  const TopMenu = () => {
    setIsTopMenu(!isTopMenu)
  }
  return (
    <div className="right-float">
      <div className="topbar-container">
        <Image className="profile-image" size="mini" src={photoURL ? photoURL : UserImage} avatar onClick={TopMenu}/>
        <p className="welcome-text">Welcome, {username ? username : userEmail}</p>
      </div>
    </div>
  )
}
