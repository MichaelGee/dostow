import React from "react";
import firebase from "./fireConfig";

const Signup = (props) => {
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmpassword, setConfirmpassword] = React.useState("");

  const createUser = async () => {
    try {
      await firebase.signup(username, email, password);
      props.history.replace("/mailspace");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
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
              </div>
              <div className='form-group'>
                <label for='exampleInputEmail1' className='bmd-label-floating'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className='bmd-help'>
                  We'll never share your email with anyone else.
                </span>
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
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className='bmd-help'>
                  Make sure it's more than 6 characters.
                </span>
              </div>
              <div className='form-group'>
                <label
                  for='exampleInputPassword1'
                  className='bmd-label-floating'
                >
                  Re-enter password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  required
                  value={confirmpassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                />
                <span className='bmd-help'>
                  Repeat your password to confirm.
                </span>
                <div className='mt-4 button-area'>
                  <button type='button' onClick={createUser}>
                    Sign Up
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
