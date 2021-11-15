import React, { useState } from "react";
import "../Style/TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Animesh",
      username: "sonichigo1219",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://media-exp1.licdn.com/dms/image/C5603AQGa7akBdRiQ_g/profile-displayphoto-shrink_400_400/0/1603204713734?e=1634774400&v=beta&t=N21dHNBGRAb_H7dhknIfNnaveZd04yTV1rZnVEIVSkY",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGa7akBdRiQ_g/profile-displayphoto-shrink_400_400/0/1603204713734?e=1634774400&v=beta&t=N21dHNBGRAb_H7dhknIfNnaveZd04yTV1rZnVEIVSkY" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Post
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;