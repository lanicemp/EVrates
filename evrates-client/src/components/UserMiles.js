import React from "react";
import styled from "styled-components";


// `;

const UserMiles = ({ handleMileChange, miles }) => {
  return (
    <div className='form-component'>
      <h3>How Many miles do you drive per year?</h3>
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

      <h3>{miles}</h3>
    </div>
  );
};
export default UserMiles;
