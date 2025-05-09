import React from "react";
import {
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

import "./styles.css";
import models from "../../modelData/models";
import { Link } from "react-router-dom";

/**
 * Define UserList, a React component of Project 4.
 */
function UserList () {
    const users = models.userListModel();
    return (
      <div>
        <Typography variant="body1">
          This is the user list, which takes up 3/12 of the window. You might
          choose to use <Link to="users/">Lists</Link>{" "}to
          display your users like so:
        </Typography>
        <List component="nav">
          {users.map((item) => (
            <>
              <ListItem>
                <Link className="item" to={`/users/${item._id}`}>
                {item.first_name}
                </Link>
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
        <Typography variant="body1">
          đói
        </Typography>
      </div>
    );
}

export default UserList;
