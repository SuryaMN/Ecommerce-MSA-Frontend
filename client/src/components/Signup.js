import React, { useState } from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import client from "../utils/client";

function Signup() {
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
      .post("/signup", user)
      .then((result) => {
        if (
          result.data.msg === "User already exists" ||
          result.data.msg === "Enter all fields"
        )
          alert(result.data.msg);
        else {
          var userId = jwt_decode(result.data.token).id;
          // localStorage.setItem("user_id", userId);
          localStorage.setItem("token", result.data.token);
          console.log(result.data.msg);
          window.location.href = "/inventory";
        }
      })
      .catch((err) => console.log("Error :" + err));
  }

  return (
    // <div>
    //   <form onSubmit={postUser}>
    //     <h1>Signup</h1>
    //     <input
    //       type="text"
    //       onChange={handleChange}
    //       name="username"
    //       placeholder="Username"
    //       value={user.username}
    //     />
    //     <input
    //       type="password"
    //       onChange={handleChange}
    //       name="password"
    //       placeholder="Password"
    //       value={user.password}
    //     />
    //     <input type="submit" name="" value="Sign Up" />
    //   </form>
    // </div>

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
                      Sign Up
                    </h5>
                    <p className="text-center small">
                      Enter username & password to Signup
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
                          Please enter username
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
                        Please enter password
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
                        Signup
                      </button>
                    </div>
                    <div className="col-12">
                      <p className="small mb-0">
                        Already have an account? <Link to="/">Login</Link>
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

export default Signup;
