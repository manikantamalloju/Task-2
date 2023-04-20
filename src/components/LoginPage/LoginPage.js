import React, { useState } from "react";
import { useFormik } from "formik";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [showPassword, setshowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .min(3, "Username should be at least 3 characters long.")
        .matches(
          "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{4,}))",
          "needed one (upperCase,lowercase,symbol)"
        )
        .required("Required*"),
      password: Yup.string()
        .min(8, "password should be at least 8 characters long.")
        .matches(
          "((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))",
          "needed one (upperCase,lowercase,symbol)"
        )
        .required("Required*"),
      firstName: Yup.string()
        .min(3, "Fullname Should be at least 5 charactes")
        .required("Required*"),
      lastName: Yup.string()
        .min(3, "Fullname Should be at least 5 charactes")
        .required("Required*"),
      email: Yup.string()
        .email("invalid email id")
        .matches(
          "^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$",
          "Invalid Email"
        )
        .required("Required*"),
    }),
    onSubmit: (values) => {
      console.log(values);
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
              {...formik.getFieldProps("userName")}
              placeholder="Enter userName"
            />
            {formik.touched.userName && formik.errors.userName ? (
              <div className="error">{formik.errors.userName}</div>
            ) : null}
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <div className="password-row">
              <input
                className="password-input"
                type={showPassword ? "text" : "password"}
                id="password"
                {...formik.getFieldProps("password")}
                placeholder="Enter password"
              />
              <div
                className="icon-container"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>

            {formik.touched.password && formik.errors.password ? (
              <div className="error">{formik.errors.password}</div>
            ) : null}
          </div>
          <button type="submit">Login</button>
        </form>
        {/* {formik.values && <p>Login successful!</p>} */}
        <Link to="/signUp">
          <div className="signIn-routing-button">
            <p>signUp</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
