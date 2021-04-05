// import react from "react";

const UserRate = ({ handleRateChange, rate }) => {
  //line 3 destructures handleRrateChange and HandleSubmit from props

  return (
    <div className="form-component">
      <h3 >Which rate do you currently use?</h3>
      <br></br>
      <div className="rate-info">
      <h4>Rate A is a flat rate</h4>
      <h4> Rate B is based on your time of Use</h4>
      </div>
      <br></br>
      <select name='rate' value={rate} type='text' onChange={handleRateChange}>
        <option value='Rate A'>Rate A </option>
        <option value='Rate B'>Rate B</option>
      </select>
    </div>
  );
};
export default UserRate;
