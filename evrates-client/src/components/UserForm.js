import React from "react";

import Modal from "react-modal";
import { useState } from "react";
import styled from "styled-components";
import UserTimeOfUse from "./UserTimeOfUse";
import UserMiles from "./UserMiles";
import UserRate from "./UserRate";
import { Row, Button, Input } from 'antd';
import { Carousel } from "react-responsive-carousel";

const UserForm = () => {
  const [rate, setRate] = useState("Rate A");
  const [miles, setMiles] = useState("20000");
  const [timeOfUse, setTimeOfUse] = useState("Between noon and 6pm");
  const [message, setMessage] = useState("");
  const [difference, setDifference] = useState("");
  const [savings, setSavings] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);

  const openModal = () => {
    setIsOpen(true);
  };
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
    setStep(1);
    setRate("Rate A");
    setMiles("20000");
    setTimeOfUse("Between noon and 6pm");
    setMessage("");
    setSavings("");
    setDifference("");
  }

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

  // const handleElectricChange = (e) => {
  //   const { value } = e.target;
  //   setElectricBill(value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(step +1 )
    let userRateA = "Your rate is Rate A";
    let userRateB = "Your rate is Rate B";
    let message_A = "Rate A is the Better Option.";
    let message_B = "Rate B is the Better Option";
    let savings = "Savings of!";
    let difference = "";
    let homeLoadA = 1350.56;
    let homeLoadB = 1033.0;
    let bill_A = 0.3 * 0.15 * miles + homeLoadA;
    let bill_B_high = 0.3 * 0.2 * miles + homeLoadB;
    let bill_B_low = 0.3 * 0.08 * miles + homeLoadB;
    //homeLoad per year was calculated by the sum of the Electricity:Facility column in the excel sheet then multiplied by the flat rate of $0.15/kwh
    //the total is $1350.56 per year or $112.55per month

    // let homerate =
    //rate A is Flat $0.15/ kWh
    //rate B is TOU rate of &0.20/ kWh between noon and 6pm, and $0.08/ kWh otherwise
    //homeloadB cost was calculated in excel creating a field to replicate the hours of use then multipling the sum of the high use hrs by $.20
    //the total during high usage was 521.1727199 the total during low usage was 511.8280342.
    //homeloadB= 1033.000754

    if (rate === "Rate A") {
      console.log("Between noon and 6pm", timeOfUse === "Between noon and 6pm");
      if (timeOfUse === "Between noon and 6pm") {
        if (bill_A < bill_B_high) {
          difference = bill_B_high - bill_A;
          return (
            setMessage(message_A),
            setDifference(difference),
            setSavings(savings)
          );
        }
        difference = bill_A - bill_B_high;
        return (
          setMessage(message_B), setDifference(difference), setSavings(savings)
        );
      }
      if (timeOfUse === "Between 7pm and 11am") {
        if (bill_A < bill_B_low) {
          difference = bill_B_low - bill_A;
          return (
            setMessage(message_A),
            setDifference(difference),
            setSavings(savings)
          );
        }
        difference = bill_A - bill_B_low;
        return (
          setMessage(message_B), setDifference(difference), setSavings(savings)
        );
      }
      // return setMessageA(message_A);
    } else if (rate === "Rate B") {
      if (timeOfUse === "Between noon and 6pm") {
        if (bill_A < bill_B_high) {
          return setMessage(message_A);
        }
        return setMessage(message_B);
      }
      if (timeOfUse === "Between 7pm and 11am") {
        if (bill_A < bill_B_low) {
          return setMessage(message_A);
        }

        return setMessage(message_B), { bill_B_low };
      }
    }
    //   return (setMessageB(message_B));

    console.log(rate);
    console.log(miles);
    console.log(timeOfUse);
    setRate("Rate A");
    setMiles("20000");
    setTimeOfUse("Between noon and 6pm");
    setMessage("");
    setSavings("");
    setDifference("");
    
  };

  return (
    <div>
      <div>
        <button className="modal-button" onClick={openModal}>Get your Electric Rate </button>

        <Modal
          className='modal-container modal-backdrop fade show'
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          
          
        >
          <div className='modal-header'>
            <p>step 1 of {step}</p>
            <div onClick={closeModal} style={{ cursor: "pointer" }}>
              ✖
            </div>
          </div>

          <form className='modal-form' onSubmit={handleSubmit}>
            {step === 1 && (
              <UserRate handleRateChange={handleRateChange} rate={rate} />
            )}
            {step === 2 && (
              <UserMiles handleMileChange={handleMileChange} miles={miles} />
            )}
            {step === 3 && (
              <UserTimeOfUse
                handleTOUChange={handleTOUChange}
                timeOfUse={timeOfUse}
              ></UserTimeOfUse>
            )}
            {step === 4 && (
              <div className="form-component">
               
                <h3>{message}</h3>
                <h3>{savings}</h3>
                <h2>{difference.toFixed(2)}</h2>{" "}
              </div>
            )}
          </form>
          <div className='button-container'>
            
            {(step === 2 || step === 3) && (
              <button onClick={() => setStep(step - 1)}>previous </button>
            )}
            {(step === 1 || step === 2) && (
              <button onClick={() => setStep(step + 1)}>next </button>
            )}
            {step === 3 && (
              <button type='submit' onClick={handleSubmit}>
                
                Submit
              </button>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
};
export default UserForm;
