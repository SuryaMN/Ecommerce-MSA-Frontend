import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import client from "../utils/client";

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
    client
      .post("/login", user)
      .then((result) => {
        if (
          result.data.msg === "User Doesn't Exist" ||
          result.data.msg === "Enter all fields" ||
          result.data.msg === "Password doesn't match with the username"
        )
          alert(result.data.msg);
        else {
          console.log(result.data.logged_user);
          // var user_id = jwt_decode(result.data.token).id;
          localStorage.setItem("user_id", result.data.logged_user.id);
          localStorage.setItem("username", result.data.logged_user.username);
          localStorage.setItem("token", result.data.token);
          window.location.href = "/inventory";
        }
      })
      .catch((err) => console.log("Error :" + err));
  }

  return (
    <div className="container">
      <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex justify-content-center py-4">
                <a
                  href="index.html"
                  className="logo d-flex align-items-center w-auto"
                >
                  <img src="assets/img/logo.png" alt="" />
                  <span className="d-none d-lg-block">Ecommerce Website</span>
                </a>
              </div>

              <div className="card mb-3">
                <div className="card-body">
                  <div className="pt-4 pb-2">
                    <h5 className="card-title text-center pb-0 fs-4">
                      Login to Your Account
                    </h5>
                    <p className="text-center small">
                      Enter your username & password to login
                    </p>
                  </div>

                  <form
                    className="row g-3 needs-validation"
                    noValidate
                    onSubmit={postUser}
                  >
                    <div className="col-12">
                      <label htmlFor="yourUsername" className="form-label">
                        Username
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          name="username"
                          className="form-control"
                          id="yourUsername"
                          onChange={handleChange}
                          placeholder="Username"
                          value={user.username}
                          required
                        />
                        <div className="invalid-feedback">
                          Please enter your username.
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <label htmlFor="yourPassword" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        id="yourPassword"
                        onChange={handleChange}
                        placeholder="Password"
                        value={user.password}
                        required
                      />
                      <div className="invalid-feedback">
                        Please enter your password!
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="remember"
                          value="true"
                          id="rememberMe"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="rememberMe"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100" type="submit">
                        Login
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Don't have account? <Link to="/signup">Signup</Link>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
