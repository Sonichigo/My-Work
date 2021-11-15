import React from "react";
import "../styles/CreateFeed.css";
import Post from "./Post";
import PostBox from "./Postfeed";
import FlipMove from "react-flip-move";
import Feed from "../data/feed";
import axios from "axios";
import { useState, useEffect } from "react";

const CreateFeed = () => {

  const [quests, setQuests] = useState(Feed);

  const getQuests = async () => {
     try {
       const data = await axios
         .get("https://datastax-hackathon-api.herokuapp.com/")
         .then((res) => {
           setQuests(res.data);
         });
       return data;
     } catch (e) {
       console.log(e);
     }
   };

   useEffect(() => {
     getQuests();
   }, []);

  return (
    <React.Fragment>
      <div className="feed custom">
        <div className="feed__header">
          <h2>Home</h2>
        </div>

        <PostBox />

        <FlipMove>
          {quests.map((data, key) => (
            <Post
              key={key}
              username={data.username}
              verified="True"
              text={data.caption}
              image={data.postImg}
              avatar={data.profilePicture}
            />
          ))}
        </FlipMove>
      </div>
    </React.Fragment>
  );
};

export default CreateFeed;
