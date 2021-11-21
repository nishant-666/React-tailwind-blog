import React, { useEffect, useState } from 'react'
export default function Topbar() {
  const [username, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  useEffect(() => {
    setUserName(localStorage.getItem('User Name'));
    setUserEmail(localStorage.getItem('User Email'))
  }, [])
  return (
    <div className="float-right text-bold">
      {/* <div className="menu-icon" onClick={openMenu}>
        {isMenuOpened ? <AiOutlineMenuUnfold size="3em" onClick={openMenu} /> : <AiOutlineMenuFold size="3em" onClick={openMenu} />}
      </div> */}
      <div className="welcome-text-container">
        <p>Welcome, {username ? username : userEmail} 🙌</p>
      </div>
      {/* {isMenuOpened ?
        <div className="left-drawer">
          <div className="drawer-btn-container">
            <button class="btn btn-green" onClick={goToRead}>
              Read the Blogs
            </button>
            <button class="btn mob-btn-red mt-4">
              Log out
            </button>
          </div>
        </div> :

        ""} */}
    </div>
  )
}
