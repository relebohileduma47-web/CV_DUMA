import React from 'react';

import profileImg from '../assets/Profile.jpg'; 

function Header({ name, title, email, phone, location }) {
  return (
    <header className="header">
      <div className="sidebar-img-container">
        
        <img src={profileImg} alt="Profile" className="profile-pic" />
      </div>
      <h1>{name}</h1>
      <h2>{title}</h2>
      <div className="contact-info">
        <p> {email}</p>
        <p> {phone}</p>
        <p> {location}</p>
      </div>
    </header>
  );
}

export default Header;