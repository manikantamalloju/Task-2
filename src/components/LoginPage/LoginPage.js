import React, { useState } from "react";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import axios from "axios";
import { Link } from "react-router-dom";

export const url = {
  API: "http://192.168.0.2:5000/",
  domain: "http://localhost:3002/",
};
//Formik Error Validation
const validate = (values) => {
  const errors = {};

  if (!values.userName) {
    errors.userName = "Enter UserName";
  }

  if (!values.password) {
    errors.password = "Enter Password";
  } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(values.password)) {
    errors.password =
      "Password should have at least 8 characters, one uppercase letter, one lowercase letter, and one number";
  }

  return errors;
};

const LoginPageMain = () => {
  const [showPassword, setshowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validate,
    onSubmit: (values) => {
      //console.log(values);
      axios
        .post("/login/", values)
        .then((response) => {
          console.log(response.data);
          if (response.statusText === "OK") {
            // Redirect to dashboard on successful login
            history.push("/dashboard");
          }
        })
        .catch((error) => {
          console.log(error);
          // Set error message to display to the user
        });
    },
  });
  //console.log(formik.values);
  return (
    <div className="login">
      <div className="login-container">
        <h1>Login</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="form-control">
            <label htmlFor="userName">UserName</label>
            <input
              type="text"
              id="userName"
              onChange={formik.handleChange}
              value={formik.values.userName}
              placeholder="Enter userName"
            />
            <div className="errors">
              <p className="error">{formik.errors.userName}</p>
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <div className="password-row">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Enter password"
              />
              <div
                className="icon-container"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            <div className="errors">
              <p className="error">{formik.errors.password}</p>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        {/* {formik.values && <p>Login successful!</p>} */}
        <Link to="/signUp">
          <div className="signIn-routing-button">
            <p>signIn</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPageMain;
