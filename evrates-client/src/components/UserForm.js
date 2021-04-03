import React from "react";
import { useState } from "react";

const UserForm = () => {
  const [rate, setRate] = useState("Rate A", "Rate B");
  const [miles, setMiles] = useState("");
  const [timeOfUse, setTimeOfUse] = useState("");

  const handleRateChange = (e) => {
    const { value } = e.target;
    setRate(value);
  };
  const handleMileChange = (e) => {
    const { value } = e.target;

    setMiles(value);
  };
  const handleTOUChange = (e) => {
    const { value } = e.target;
    setTimeOfUse(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(rate);
    console.log(miles);
    console.log(timeOfUse);
    setRate("");
    setMiles("");
    setTimeOfUse("");
  };

  return (
    <div>
      <h1></h1>
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
          type='range'
          min='1000'
          max='100000'
          step='1000'
          value='20000'
          onChange={handleMileChange}
        ></input>
        <h3>What hours of the day do you plan to charge your EV? </h3>
        <select
          name='time-of-use'
          value={timeOfUse}
          type='number'
          onChange={handleTOUChange}
        >
          <option value='Between midnight and 5am'>
            Between midnight and 5am
          </option>
          <option value='Between 5am and 9pm'>Bewteen 5am and 9pm</option>
          <option value='Between 9pm and midnight'>
            Between 9pm and midnight
          </option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};
export default UserForm;
