import React from "react";
import { useState } from "react";
import styled from "styled-components";
import UserTimeOfUse from "./UserTimeOfUse";
import UserMiles from "./UserMiles";
import UserMonthlyBill from "./UserMonthlyBill";
import UserRate from "./UserRate";

const UserForm = () => {
  const [rate, setRate] = useState("Rate A");
  const [miles, setMiles] = useState("20000");
  const [timeOfUse, setTimeOfUse] = useState("Between midnight and 5am");
  const [message_A, setMessageA] = useState("");
  const [electricBill, setElectricBill] = useState("");

  //   const [message_B, setMessageB] = (useState = "");

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

  const handleElectricChange = (e) => {
    const { value } = e.target;
    setElectricBill(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let message_A = "Rate A is the Better Option";
    let message_B = "Rate B is the Better Option";
    let bill_A = "";
    // let homerate =
    //rate A is Flat $0.15/ kWh
    //rate B is TOU rate of &0.20/ kWh between noon and 6pm, and $0.08/ kWh otherwise
    console.log(rate === "Rate A");
    console.log(miles);
    console.log(0.3 * 0.15 * miles);
    if (rate === "Rate A") {
      bill_A = 0.3 * 0.15 * miles;
      console.log(bill_A);
      return setMessageA(message_A);
    }
    //   return (setMessageB(message_B));

    console.log(rate);
    console.log(miles);
    console.log(timeOfUse);
    setRate("Rate A");
    setMiles("20000");
    setTimeOfUse("Between midnight and 5am");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserRate handleRateChange={handleRateChange} rate={rate} />
        <UserMonthlyBill
          handleElectricChange={handleElectricChange}
          electricBill={electricBill}
        />
        <UserMiles handleMileChange={handleMileChange} miles={miles} />
        <UserTimeOfUse
          handleTOUChange={handleTOUChange}
          timeOfUse={timeOfUse}
        ></UserTimeOfUse>
        <button type='submit'>Submit</button>
      </form>

      <h2>{message_A}</h2>
      {/* <h2>{message_B}</h2> */}
    </div>
  );
};
export default UserForm;
