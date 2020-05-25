import React from "react";
import Storage from "../images/storage.png";
import User2 from "../images/user2.png";
import Left from "../images/left.png";

const Infobanner = () => {
  return (
    <div>
      <div className='info-banner'>
        <div className='arrow-area'>
          <img src={Left} className='arrow' />
          <h1>mailspace</h1>
        </div>
        <div className='d-flex flex-column'>
          <div className='d-flex'>
            <img src={Storage} className='mr-2' />
            <h1>5 GB</h1>
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
        <div className='d-flex flex-column'>
          <div className='d-flex'>
            <img src={User2} className='mr-2' />
            <h1>100</h1>
          </div>
          <div>
            <p className='mb-1 mt-3'>Disk Space</p>
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
  );
};

export default Infobanner;
