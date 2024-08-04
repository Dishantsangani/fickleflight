import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  // Email Validations
  function emailHandler(val) {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
    setEmail(val);
  }

  // Password Validations
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setPassword(item);
  }

  // Submit Handling
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for errors
    if (emailError || passwordError || !email || !password) {
      return;
    }

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((result) => {
        localStorage.setItem("Login Data", JSON.stringify(result.data));
        localStorage.setItem("login", true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Invalid login credentials");
      });
  };

  useEffect(() => {
    let login = localStorage.getItem("login");
    if (login) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <section className="text-center text-lg-start">
        <div className="container ">
          <div className="row g-0 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div
                className="card cascading-right"
                style={{
                  backdropFilter: "blur(10px)",
                  background: "#2c71b3",
                }}
              >
                <div className="card-body p-5 shadow-5 text-center">
                  <h2 className="fw-bold mb-5" style={{ color: "white" }}>
                    Login Now
                  </h2>
                  <form onSubmit={handleSubmit}>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => emailHandler(e.target.value)}
                      />
                      <label
                        className="form-label login-title"
                        htmlFor="form3Example3"
                      >
                        Email address
                      </label>
                    </div>
                    {emailError ? (
                      <span className="sp">Email is not valid</span>
                    ) : (
                      ""
                    )}
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => passwordHandler(e)}
                      />
                      <label
                        className="form-label login-title"
                        htmlFor="form3Example4"
                      >
                        Password
                      </label>
                    </div>
                    <p>
                      {passwordError ? (
                        <span className="sp">
                          Password must be at least 4 characters
                        </span>
                      ) : (
                        ""
                      )}
                    </p>

                    {/* Submit button */}
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-block mb-3 submitbutton"
                    >
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center login-title">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1 login-title"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-4 mb-0">
              <img
                src="Flight1.jpg"
                className="w-75 rounded-4 shadow-4 h-75 d-inline-block"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Jumbotron */}
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Loginpage;
