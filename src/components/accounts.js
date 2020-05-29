import React from "react";

const Accounts = () => {
  return (
    <div>
      <div>
        <div className='d-flex justify-content-between account'>
          <div className='d-flex flex-column'>
            <div className='mb-4'>
              <p className='email'>michaelgatesjr@gmail.com</p>
            </div>
            <div className='options'>
              <a>Set Quota</a>
              <a>Set password</a>
              <a>Webmail</a>
              <a>Delete</a>
            </div>
          </div>
          <div>
            <div className='d-flex'>
              <h1>
                <span className='font-weight-bold'>5</span>
                <span className='font-weight-light'>GB</span>
              </h1>
            </div>
            <div>
              <p className='mt-3 mb-1'>Disk Space</p>
              <div class='progress'>
                <div
                  class='progress-bar'
                  role='progressbar'
                  aria-valuenow='0'
                  aria-valuemin='0'
                  aria-valuemax='100'
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
