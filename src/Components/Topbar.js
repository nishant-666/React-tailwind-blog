import React from 'react';
import UserImage from '../assets/userImage.png';
import { Image } from 'semantic-ui-react';
export default function Topbar() {
  let username = localStorage.getItem('User Name');
  let userEmail = localStorage.getItem('User Email');
  let photoURL = localStorage.getItem('PhotoURL');
  return (
    <div className="right-float">
      <div className="topbar-container">
        <Image
          className="profile-image"
          size="mini"
          src={photoURL ? photoURL : UserImage} avatar />
        <p className="welcome-text">Welcome, {username ? username : userEmail}</p>
      </div>
    </div>
  )
}
