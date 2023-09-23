import { useState } from "react";
import { styled } from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/Dice/dice_${currentDice}.png`} alt="dice 1" />
      </div>
    </DiceContainer>
  );
};

export default RoleDice;
const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;

  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;

    img {
      height: 10rem;
      size: 10px;
    }
  }

  p {
    font-size: 24px;
  }
`;
