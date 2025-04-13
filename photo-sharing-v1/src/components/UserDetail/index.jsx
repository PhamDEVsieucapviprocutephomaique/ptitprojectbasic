import React from "react";
import {Typography} from "@mui/material";

import "./styles.css";
import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams(); // lấy userId từ params
  const [user, setUser] = useState(models.userModel(userId));

 
  // useEffect(() => {
  //     const fetchUser = async () => {
  //         const fetchedUser = await models.userModel(userId)\
  //         setUser(fetchedUser);
  //     };
  //     fetchUser();
  // }, [userId]); 

    return (
        <>
            <Typography variant="body1">
            <div className="user-card">
      <div className="user-avatar">
        {user.first_name[0]}
      </div>
      <div className="user-info">
        <h2>{user.first_name} {user.last_name}</h2>
        <p><strong>📍 Location:</strong> {user.location}</p>
        <p><strong>💼 Occupation:</strong> {user.occupation}</p>
        <p><strong>📝 Description:</strong></p>
        <p className="user-desc">"{user.description}"</p>
        <p><strong>🆔 User ID:</strong> {user._id}</p>
        <p className="view-photos-link">
          👉 <Link to={`/photos/${user._id}`}>Xem ảnh người dùng</Link>
        </p>
      </div>
    </div>
            </Typography>
        </>
    );
}

export default UserDetail;
