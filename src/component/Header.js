import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [isActive, setIsActive] = useState(false)
    let Navigate = useNavigate();
    const getToken = localStorage.getItem("user-loggedIn")
    const userLoggedIn = getToken ? true : false
    const handleLogout = () => {
        localStorage.setItem('user-loggedIn','')
        Navigate('/')
        setIsActive(false);
    }
    const handleDropdown = () => {
        setIsActive(!isActive)
    }
  return <div className="ui top attached header">
            <i className="edit outline icon"></i>
            <div className="content">
                Todo App
            </div>
            {userLoggedIn && (
                <div className='d-flex align-items-center position-relative loginfo'>
                    <div onClick={handleDropdown} className='d-inline-block profile'>
                        {getToken.split('@')[0]}
                        <i className='angle down icon'></i>
                    </div>
                    <span className={`profileLogout ${isActive ? 'active' : ''}`} onClick={handleLogout}>Logout</span>
                </div>
            )}
        </div>
}

export default Header;
