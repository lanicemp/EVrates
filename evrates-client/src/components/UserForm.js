import React from "react";
import { useState } from "react";

const UserForm = () => {
  const [rate, setRate] = useState("Rate A", "Rate B");
  const [miles, setMiles] = useState("");

  const handleRateChange = (e) => {
    const { value } = e.target;
    setRate(value);
  };
  const handleMileChange = (e) => {
    const { value } = e.target;

    setMiles(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rate)
    console.log(miles);
    setRate("")
    setMiles("")
  };

  return (
    <div>
      <h1>UserForm</h1>
      <h3>Which rate do you currently use?</h3>
      <form onSubmit={handleSubmit}>
        <h3>Rate A </h3>
        <h3> Rate B</h3>
        <select
          name='rate'
          value={rate}
          type='text'
          onChange={handleRateChange}
        >
          <option value='RateA'>Rate A </option>
          <option value='RateB'>Rate B</option>
        </select>
        <h3>How Many miles do you drive per year?</h3>
        <input
          name='miles'
          value={miles}
          type='integer'
          onChange={handleMileChange}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
