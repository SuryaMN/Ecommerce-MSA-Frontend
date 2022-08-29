import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Profile() {
  const [username, setUsername] = useState("");

  const user_id = jwt_decode(localStorage.getItem("token")).id;
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/user/" + user_id)
      .then((name) => {
        setUsername(name.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      I am <h3>{username}</h3>
    </div>
  );
}

export default Profile;
