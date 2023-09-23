import { styled } from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>-Select any number</p>
        <p>-Click on dice image</p>
        <p>
          -after click on dice if selected number is equal to dice number you
          will get same point as dice
        </p>
        <p>
          -if you get wrong guess than 2 point will be <span>deducted</span>{" "}
        </p>
      </div>
    </RulesContainer>
  );
};

export default Rules;
const RulesContainer = styled.div`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border: 1px solid black;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;
  box-shadow: 1px 3px 10px 0 black;

  h2 {
    font-size: 1rem;
  }
  .text {
    margin-top: 1rem;
    p span {
      color: red;
    }
  }
`;
