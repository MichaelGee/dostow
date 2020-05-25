import React from "react";
import Navbar from "./navbar";
import Infobanner from "./infobanner";

const Mailspace = () => {
  return (
    <div>
      <Navbar />
      <Infobanner />
      <div className='email-banner'>
        <h1>E-Mail Accounts</h1>
        <button type='button' className='add-button btn bmd-btn-fab'>
          +
        </button>
      </div>
    </div>
  );
};

export default Mailspace;
