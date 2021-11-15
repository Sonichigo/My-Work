import React from "react";
import { useState } from "react";
import "../styles/SideBar.css";
import profileData from "../data/profile";

const SideBar = () => {
  const [profile, setProfile] = useState(profileData);

  return (
    <div>
      <figure className="card">
        <img
          src="https://cdn.pixabay.com/photo/2019/10/25/09/40/sci-fi-4576494_1280.jpg"
          alt="sample87"
        />
        <figcaption>
          <img src={profile.img} alt="profile" className="profile" />
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
        </figcaption>
        <button onclick='/Connect'><h2>Connect</h2></button>
      </figure>
    </div>
  );
};

export default SideBar;
