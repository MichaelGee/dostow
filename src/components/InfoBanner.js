import React from "react";
import Storage from "../images/storage.png";
import User2 from "../images/user2.png";
import Left from "../images/left.png";

export const InfoBanner = () => {
  return (
    <div>
      <div className='info-banner'>
        <div className='arrow-area'>
          <img src={Left} className='arrow' />
          <h1 className='font-weight-bold'>mailspace</h1>
        </div>
        <div className='d-flex flex-column'>
          <div className='d-flex'>
            <img src={Storage} className='mr-3 banner-img' />
            <h1>
              <span className='font-weight-bold'>5</span>
              <span className='font-weight-light'>GB</span>
            </h1>
          </div>
          <div>
            <p className='mt-3 mb-1'>Disk Space</p>
            <div className='progress'>
              <div
                className='progress-bar'
                role='progressbar'
                aria-valuenow='5'
                aria-valuemin='0'
                aria-valuemax='100'
              ></div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column'>
          <div className='d-flex'>
            <img src={User2} className='mr-2 banner-img' />
            <h1>
              <span className='font-weight-bold'>100</span>
            </h1>
          </div>
          <div>
            <p className='mb-1 mt-3'>Disk Space</p>
            <div className='progress'>
              <div
                className='progress-bar'
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
  );
};


