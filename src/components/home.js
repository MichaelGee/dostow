import React from "react";
import { Link } from "react-router-dom";
import fire from "../components/fireConfig";

const Home = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [signedIn, setSignedIn] = React.useState(false);

  React.useEffect(() => {
    fire.isInitialized((user) => {
      setSignedIn(!!user);
    });
  });
  const login = async () => {
    try {
      await fire.login(email, password);
      console.log("Logged in successful");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (fire.getCurrentUser()) {
    props.history.push("/mailspace");
  }
  return (
    <div>
      <div className='d-md-flex h-md-100 align-items-center'>
        <div className='left col-md-6 p-0 h-md-100'>
          <div className='text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center'>
            <div className='logoarea pt-5 pb-5 banner-text font-weight-bold'>
              Get into your space
            </div>
          </div>
        </div>

        <div className='right col-md-6 p-0 bg-white h-md-100'>
          <div className='d-md-flex align-items-center h-md-100 p-5 justify-content-center'>
            <form>
              <div className='mb-4 dostow'>Dostow Spaces</div>
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
                <div className='mt-4 button-area'>
                  <button type='button' className='login-btn' onClick={login}>
                    Log In
                  </button>
                  <p className='mt-12 signup-link'>
                    New? <Link to='/signup'>Sign Up</Link>
                  </p>
                </div>
              </div>
              {signedIn ? props.history.replace("/mailspace") : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
