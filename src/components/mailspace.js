import React from "react";
import Navbar from "./navbar";
import Infobanner from "./infobanner";
import Accounts from "./accounts";

const Mailspace = () => {
  return (
    <div>
      {/* Right Drawer */}
      <div className=' bmd-layout-container bmd-drawer-f-r bmd-drawer-overlay'>
        <div id='dw-p1' className='bmd-layout-drawer bg-faded'>
          <div className='d-flex new-email-header'>
            <h1>New E-Mail Account</h1>
          </div>

          <form className='new-email-form'>
            <p>
              Create a new <span className='font-weight-bold'>E-Mail</span>{" "}
              account
            </p>
            <fieldset className='form-group'>
              <label htmlFor='exampleInputEmail1' className='bmd-label-static'>
                E-Mail
              </label>
              <input
                type='email'
                className='form-control'
                id='exampleInputEmail1'
                required
              />
            </fieldset>
            <fieldset className='form-group'>
              <label
                htmlFor='exampleInputPassword1'
                className='bmd-label-static'
              >
                New Password
              </label>
              <input
                type='password'
                className='form-control'
                id='exampleInputPassword1'
                required
              />
              <span className='bmd-help'>
                Make sure it's more than 6 characters.
              </span>
            </fieldset>
            <fieldset className='form-group'>
              <label htmlFor='exampleInputEmail1' className='bmd-label-static'>
                Quota
              </label>
              <input
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                required
              />
            </fieldset>
            <div className='mt-4 button-area'>
              <button type='button' className='login-btn'>
                Create
              </button>
              {/* <p className='mt-12 signup-link'>
                New? <Link to='/signup'>Sign Up</Link>
              </p> */}
            </div>
          </form>
        </div>
        <main className='bmd-layout-content'>
          <div>
            <Navbar />
            <Infobanner />
            <div className='email-banner'>
              <h1>E-Mail Accounts</h1>
              <button
                type='button'
                className='add-button btn bmd-btn-fab'
                data-toggle='drawer'
                data-target='#dw-p1'
              >
                +
              </button>
            </div>
          </div>
          <Accounts />
        </main>
      </div>
    </div>
  );
};

export default Mailspace;
