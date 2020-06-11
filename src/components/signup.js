import React from "react";
import firebase from "./fireConfig";
import { Formik } from "formik";
import * as Yup from "yup";

const Signup = (props) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  let errors = {};

  if (!username) {
    errors.username = "Username is required";
  } else if (
    !/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/i.test(
      username
    )
  ) {
    errors.username = "Invalid username";
  }

  if (!email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password is required";
  } else if (/^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*)$/i.test(password)) {
    errors.password =
      "Password has to be at least 8 characters, one letter and one number";
  }

  const createUser = async () => {
    try {
      await firebase.signup(username, email, password);
      props.history.replace("/mailspace");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      {error ? (
        <div className='alert-container'>
          <div
            class='alert alert-warning alert-dismissible fade show'
            role='alert'
          >
            {error}
            <button
              type='button'
              class='close'
              data-dismiss='alert'
              aria-label='Close'
            ></button>
          </div>
        </div>
      ) : null}
      <div className='d-md-flex h-md-100 align-items-center'>
        <div className='left col-md-6 p-0 h-md-100'>
          <div className='text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center'>
            <div className='logoarea pt-5 pb-5 banner-text'>
              Get into your space
            </div>
          </div>
        </div>

        <div className='right col-md-6 p-0 bg-white h-md-100'>
          <div className='d-md-flex align-items-center h-md-100 p-5 justify-content-center'>
            <form>
              <div className='mb-4 dostow'>Sign Up Here</div>
              <div className='form-group'>
                <label for='exampleInputEmail1' className='bmd-label-floating'>
                  Username
                </label>
                <input
                  type='text'
                  className='form-control'
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />

                <span className='bmd-help'>{errors.username}</span>
              </div>
              <div className='form-group'>
                <label for='exampleInputEmail1' className='bmd-label-floating'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <span className='bmd-help'>{errors.email}</span>
              </div>
              <div className='form-group'>
                <label
                  for='exampleInputPassword1'
                  className='bmd-label-floating'
                >
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className='bmd-help'>{errors.password}</span>
              </div>

              <div className='mt-5 button-area'>
                <button
                  type='button'
                  onClick={createUser}
                  disabled={
                    errors.username || errors.email || errors.password
                      ? true
                      : false
                  }
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
