import React, { forwardRef } from "react";
import "../styles/Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


const Post = forwardRef(
  ({ username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
              <h3>
                {username}{" "}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} height="25%" width="60%" alt="" />
          <div className="post__footer">

            <ChatBubbleOutlineIcon fontSize="medium" />

            <FavoriteBorderIcon fontSize="medium" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;