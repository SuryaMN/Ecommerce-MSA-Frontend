import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import client from "../utils/client";

function Profile() {
  const [username, setUsername] = useState("");

  const user_id = jwt_decode(localStorage.getItem("token")).id;
  useEffect(() => {
    client
      .get("/user/" + user_id)
      .then((name) => {
        setUsername(name.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>I am {username}</div>;
}

export default Profile;
