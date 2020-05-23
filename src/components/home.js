import React from "react";

const Home = () => {
  return (
    <div>
      <div className='d-md-flex h-md-100 align-items-center'>
        <div className='right col-md-6 p-0 h-md-100'>
          <div className='text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center'>
            <div className='logoarea pt-5 pb-5 banner-text'>
              Get into your space
            </div>
          </div>
        </div>

        <div className='left col-md-6 p-0 bg-white h-md-100'>
          <div className='d-md-flex align-items-center h-md-100 p-5 justify-content-center'>
            <form className='w-50'>
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
                  className='form-control is-valid'
                  id='exampleInputPassword1'
                  required
                />
                <button type='button' class=' login-btn mt-4'>
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
