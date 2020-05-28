import React from "react";
import Navbar from "./navbar";
import Infobanner from "./infobanner";
import Close from "../images/close.svg";

const Mailspace = () => {
  return (
    <div>
      {/* Right Drawer */}
      <div className=' bmd-layout-container bmd-drawer-f-r bmd-drawer-overlay'>
        <div id='dw-p1' className='bmd-layout-drawer bg-faded'>
          <div className='d-flex new-email-header'>
            <h1>New E-Mail Account</h1>
            {/*             <img src={Close} alt='close' className='close' /> */}
          </div>

          <form className='new-email-form'>
            <p>
              Create a new <span className='font-weight-bold'>E-Mail</span>{" "}
              account
            </p>
            <fieldset class='form-group'>
              <label for='exampleInputEmail1' class='bmd-label-static'>
                E-Mail
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                required
              />
            </fieldset>
            <fieldset class='form-group'>
              <label for='exampleInputPassword1' class='bmd-label-static'>
                New Password
              </label>
              <input
                type='password'
                class='form-control'
                id='exampleInputPassword1'
                required
              />
              <span class='bmd-help'>
                Make sure it's more than 6 characters.
              </span>
            </fieldset>
            <fieldset class='form-group'>
              <label for='exampleInputEmail1' class='bmd-label-static'>
                Quota
              </label>
              <input
                type='text'
                class='form-control'
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
        </main>
      </div>
    </div>
  );
};

export default Mailspace;
