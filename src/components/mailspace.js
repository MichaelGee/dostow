import React from "react";
import Navbar from "./navbar";
import Infobanner from "./infobanner";

const Mailspace = () => {
  return (
    <div>
      {/* Right Drawer */}
      <div className=' bmd-layout-container bmd-drawer-f-r bmd-drawer-overlay'>
        <div id='dw-p1' className='bmd-layout-drawer bg-faded'>
          <ul className='list-group'>
            <a className='list-group-item'>Link 1</a>
            <a className='list-group-item'>Link 2</a>
            <a className='list-group-item'>Link 3</a>
          </ul>
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
