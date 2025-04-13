import React from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import models from "../../modelData/models";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";


function UserPhotos () {
  const { userId } = useParams(); 
  const [photos, setPhotos] = useState(models.photoOfUserModel(userId));
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString(); // chuỗi thân thiện với người dùng
  }
  useEffect(() => {
    fetch(`/photosOfUser/${userId}`)
      .then((res) => res.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.error("Error loading photos:", err));
  }, [userId]);
  
  console.log(photos)
    return (
      <Typography variant="body1">
        <div className="user-photos-container">
      <h2 className="section-title">📸 Photos of User {userId}</h2>
      {photos.map((photo) => (
        <div key={photo._id} className="photo-card">
          <img
            src={`/images/${photo.file_name}`}
            alt="User Photo"
            className="user-photo"
          />
          <p className="photo-date">🕒 {formatDate(photo.date_time)}</p>

          <div className="comment-section">
            <h4 className="comment-title">💬 Comments</h4>
            {photo.comments && photo.comments.length > 0 ? (
              photo.comments.map((comment) => (
                <div key={comment._id} className="comment">
                  <p className="comment-meta">
                    {formatDate(comment.date_time)} —{" "}
                    <Link to={`/users/${comment.user._id}`} className="comment-user-link">
                      {comment.user.first_name} {comment.user.last_name}
                    </Link>
                  </p>
                  <p className="comment-text">{comment.comment}</p>
                </div>
              ))
            ) : (
              <p className="no-comment">Chưa có bình luận.</p>
            )}
          </div>
        </div>
      ))}
    </div>
      </Typography>
    );
}

export default UserPhotos;
