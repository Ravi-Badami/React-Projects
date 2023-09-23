import { styled } from "styled-components";
const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total score</p>
    </ScoreContainer>
  );
};

export default TotalScore;
const ScoreContainer = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  text-align: center;

  h1 {
    font-size: 5rem;
    line-height: 5rem;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500px;
  }
`;
