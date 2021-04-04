import react from "react";

const UserRate = ({ handleRateChange, rate }) => {
  //line 3 destructures handleRrateChange and HandleSubmit from props

  return (
    <div>
      <h3>Which rate do you currently use?</h3>
      <h3>Rate A .15 </h3>
      <h3> Rate B</h3>
      <select name='rate' value={rate} type='text' onChange={handleRateChange}>
        <option value='Rate A'>Rate A </option>
        <option value='Rate B'>Rate B</option>
      </select>
    </div>
  );
};
export default UserRate;
