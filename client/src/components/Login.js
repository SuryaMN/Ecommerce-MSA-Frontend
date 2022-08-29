import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function postUser(event) {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", user)
      .then((result) => {
        if (
          result.data.msg === "User Doesn't Exist" ||
          result.data.msg === "Enter all fields" ||
          result.data.msg === "Password doesn't match with the username"
        )
          alert(result.data.msg);
        else {
          console.log(result.data);
          var user_id = jwt_decode(result.data.token).id;
          // localStorage.setItem("user_id", user_id);
          localStorage.setItem("token", result.data.token);
          window.location.href = "/inventory";
        }
      })
      .catch((err) => console.log("Error :" + err));
  }

  return (
    <div>
      <form onSubmit={postUser}>
        <h1>Login</h1>
        <input
          type="text"
          onChange={handleChange}
          name="username"
          placeholder="Username"
          value={user.username}
        />
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Password"
          value={user.password}
        />
        <input type="submit" name="" value="Login" />
        <p>
          New User? <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;