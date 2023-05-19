import React from 'react';
import lightBox from "../assets/lightBox.png"
import "./LightProfile.css"

const LightProfile = () => {
  return (
    <div className="profile-container">
      <div className="wrapper-image">
        <img src={lightBox} alt="Profile image"/>
      </div>
      <div className="wrapper-description">
        <h1 className="description-header">Mike</h1>

       {/*<p>Surname: Kravchuk</p>*/}
       {/*<p>Name : 25 year</p>*/}
       {/* <p>City:</p>*/}
        <ul className="description-list">
        <li>Surname :Kravchuk </li>
        <li>City:Kiev</li>
        <li>Hobby:sport</li>
        <li>Dream:Go to Qatar</li>
        </ul>
      </div>
    </div>

  );
};

export default LightProfile;