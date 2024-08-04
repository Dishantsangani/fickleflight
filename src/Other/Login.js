import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
function Loginpage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Error
  const [emailerror, setEmailerror] = useState(false);
  const [passworderror, setPassworderror] = useState(false);

  // Email Validations
  function emailhandler(val) {
    if (val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      setEmailerror(false);
    } else {
      setEmailerror(true);
    }
    setEmail(val);
  }

  // Password Validations
  function passwordhandler(e) {
    let item = e.target.value;
    if (item.length < 4) {
      setPassworderror(true);
    } else {
      setPassworderror(false);
    }
    setPassword(item);
  }

  // Submit Handling
  const HandleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("login", true);
    if (password.length < 4) {
      navigate("/*");
    }
    useEffect(() => {
      let login = localStorage.getItem("login");
      if (login) {
        navigate("/");
      }
      axios
        .post("https://reqres.in/api/login", {
          email: email,
          password: password,
        })
        .then((result) => {
          localStorage.setItem("Login Data", JSON.stringify(result.data));
          navigate("/");
        })
        .catch((error) => {
          navigate("/*");
          console.log(error);
        });
      navigate("/");
    });
  };
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
                  <form>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => emailhandler(e.target.value)}
                      />
                      <label
                        className="form-label login-title"
                        htmlFor="form3Example3"
                      >
                        Email address
                      </label>
                    </div>
                    {emailerror ? (
                      <span className="sp">Email Is Not To Valid</span>
                    ) : (
                      ""
                    )}
                    {/* Password input */}
                    <div data-mdb-input-init="" className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => passwordhandler(e)}
                      />
                      <label
                        className="form-label  login-title "
                        htmlFor="form3Example4"
                      >
                        Password
                      </label>
                    </div>
                    {passworderror ? (
                      <span className="sp">Password Must Be A 4 Char</span>
                    ) : (
                      ""
                    )}

                    {/* Submit button */}
                    <button
                      type="submit"
                      data-mdb-button-init=""
                      data-mdb-ripple-init=""
                      className="btn btn-primary btn-block mb-3 submitbutton"
                      onClick={HandleSubmit}
                    >
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center  login-title">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1  login-title"
                      >
                        <i className="fab fa-facebook-f" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1  login-title"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1  login-title"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        data-mdb-button-init=""
                        data-mdb-ripple-init=""
                        className="btn btn-link btn-floating mx-1  login-title"
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
