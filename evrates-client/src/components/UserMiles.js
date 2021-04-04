import react from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const StyledInput = styled.input`
  background: #54c6eb;

  border-radius: 10px;
  align-content: center;
`;

const StyledBall = styled.div`
  positon: absolute;
  background: yellow;
  border-radius: 100%;
  height: 12px;
  width: 12px;
  border: 1px solid orange;
`;

const UserMiles = ({ handleMileChange, miles }) => {
  return (
    <div>
      <h3>How Many miles do you drive per year?</h3>
      <StyledInputWrapper>
        <StyledInput
          name='miles'
          value={miles}
          type='range'
          min='1000'
          max='100000'
          step='1000'
          onChange={handleMileChange}
        />
      </StyledInputWrapper>
      <p>{miles}</p>
    </div>
  );
};
export default UserMiles;
