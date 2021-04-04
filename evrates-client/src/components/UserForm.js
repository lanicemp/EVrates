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
  const [timeOfUse, setTimeOfUse] = useState("Between noon and 6pm");
  const [message_A, setMessageA] = useState("");
  const [message_B, setMessageB] = useState("");
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
    
    
    let homeLoadA = 1350.56;
    let homeLoadB = 1033.0;
    let bill_A =(0.3 * 0.15 * miles) + homeLoadA;
    let bill_B_high = (0.3 * .20 * miles) + homeLoadB ;
    let bill_B_low = (0.3 * .08 * miles) + homeLoadB
    //homeLoad per year was calculated by the sum of the Electricity:Facility column in the excel sheet then multiplied by the flat rate of $0.15/kwh
    //the total is $1350.56 per year or $112.55per month

    // let homerate =
    //rate A is Flat $0.15/ kWh
    //rate B is TOU rate of &0.20/ kWh between noon and 6pm, and $0.08/ kWh otherwise
    //homeloadB cost was calculated in excel creating a field to replicate the hours of use then multipling the sum of the high use hrs by $.20
    //the total during high usage was 521.1727199 the total during low usage was 511.8280342.
    //homeloadB= 1033.000754

    console.log(rate === "Rate A");
    console.log("miles", miles);
    console.log("bill A ", 0.3 * 0.15 * miles + homeLoadA);
    if (rate === "Rate A") {
      console.log("Between noon and 6pm", timeOfUse === "Between noon and 6pm");
      if (timeOfUse === "Between noon and 6pm") {

        if(bill_A < bill_B_high){
          return setMessageA(message_A)
        }
       return setMessageB(message_B)
      }
      if (timeOfUse === "Between 7pm and 11am") {
        bill_A = 0.3 * 0.15 * miles + homeLoadA;
      }

      // return setMessageA(message_A);
    }
    //   return (setMessageB(message_B));

    console.log(rate);
    console.log(miles);
    console.log(timeOfUse);
    setRate("Rate A");
    setMiles("20000");
    setTimeOfUse("Between noon and 6pm");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <UserRate handleRateChange={handleRateChange} rate={rate} />
        
        <UserMiles handleMileChange={handleMileChange} miles={miles} />
        <UserTimeOfUse
          handleTOUChange={handleTOUChange}
          timeOfUse={timeOfUse}
        ></UserTimeOfUse>
        <button type='submit'>Submit</button>
      </form>

      <h2>{message_A}</h2>
      <h2>{message_B}</h2>
    </div>
  );
};
export default UserForm;
