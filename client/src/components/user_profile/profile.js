import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileItem from "./profileItem";

export default function Profile() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/users`).then((response) => {
      setUsers(response.data);
      console.log(response.data);
    });
  }, []);

  //return users.map((user) => {
  return (
    <ProfileItem
    // username={user.username}
    // avatar={user.avatar}
    // location={user.location}
    // created_at={user.created_at}
    // about_me={user.about_me}
    />
  );
  //});
}
