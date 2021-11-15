import React from "react";
import "../styles/Postfeed.css";
import { Avatar, Button } from "@material-ui/core";
import axios from "axios";
import { useState, useEffect } from "react";

function PostBox() {
  const [caption, setCaption] = useState('');
  const [postImg, setPostImg] = useState('');
  const [points, setPoints] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [username, setUsername] = useState('');
  const [data,setData] =useState(false);

  const handleSubmit = () => {
    const data = {
      caption:caption, 
      points:points,
      postImg:postImg, 
      username:username,
    }
      axios.post('https://datastax-hackathon-api.herokuapp.com/',data)
          .then(response => setData(response.data));
          setCaption(' ');
          setPoints(' ');
          setPostImg(' ');
          setUsername(' ');
        }

  return (
    <div className="postBox">
      <form>
        <div className="postBox__input">
          <Avatar src="https://w7.pngwing.com/pngs/439/1008/png-transparent-ethan-hunt-mission-impossible-impossible-missions-force-paramount-s-film-mission-impossible-emblem-label-trademark-thumbnail.png" 
          value={profilePicture}
          onChange={e => setProfilePicture(e.target.value)}/>
          <input
            placeholder="Status Report?"
            type="text"
            value={caption}
            onChange={e => setCaption(e.target.value)}
          />
        </div>
        <input
        className="postBox__imageInput"
          placeholder="Timing"
          type="text"
          value={points}
          onChange={e => setPoints(e.target.value)}
        />
        <input
          className="postBox__imageInput"
          placeholder="Visual Report"
          type="text"
          value={postImg}
          onChange={e => setPostImg(e.target.value)}
        />
        <input
        className="postBox__imageInput"
          placeholder="CodeName"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />

        <Button
          type="submit"
          className="postBox__postButton"
          onClick={handleSubmit}>
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostBox;