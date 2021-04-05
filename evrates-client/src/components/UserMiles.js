import React from "react";
import styled from "styled-components";
import"../CSS/UserMiles.css"


// `;

const UserMiles = ({ handleMileChange, miles }) => {
  return (
    <div className='form-component'>
        <div className= "modal-question">
      <h3>How Many miles do you drive per year?</h3>
      </div>
      <br></br>

      <input
      className="miles-bar"
        name='miles'
        value={miles}
        type='range'
        min='1000'
        max='100000'
        step='1000'
        width='100'
        
        onChange={handleMileChange}
      />
      <br></br>
<div className="miles">
      <h3>{miles}</h3>
      </div>
    </div>
  );
};
export default UserMiles;
