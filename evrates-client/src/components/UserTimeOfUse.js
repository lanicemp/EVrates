import react from "react";


const UserTimeOfUse = ({handleTOUChange,timeOfUse }) => {
  return (
    <div>
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
    </div>
  );
};
export default UserTimeOfUse
