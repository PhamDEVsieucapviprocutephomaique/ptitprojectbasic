import React, { useId } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import models from "../../modelData/models";

import "./styles.css";
import { use } from "react";

/**
 * Define TopBar, a React component of Project 4.
 */
function TopBar () {

  const location =useLocation()
  const getcontext=()=>{
    const username = models.userModel(location.pathname.split('/')[2]);  
    if(username){

      if(location.pathname.includes("photos")){
        return " ảnh của " + username.first_name
      }
      if(location.pathname.includes("users"))
      {
        return " thong tin của " +username.first_name
      }
    }
  }


  
    return (
      <AppBar className="topbar-appBar" position="absolute">
      <Toolbar className="anfo">
        <Typography variant="h5" color="inherit" className="left-item">
          PHẠM MINH ĐỨC - B22DCCN240 - THỰC HÀNH NHÓM 10
        </Typography>
        <Typography variant="h5" color="inherit" className="right-item">
          {getcontext()}
        </Typography>
      </Toolbar>
      </AppBar>
    );
}

export default TopBar;
