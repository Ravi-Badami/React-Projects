import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <img src="/images/dices.png" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;
const Container = styled.div`
  /* max-width: 1180px; */
  border: 1px solid black;
  height: 85vh;
  width: 85vw;
  border-radius: 25px;
  box-shadow: 1px 3px 10px 0 black;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 55%;
    width: 40%;
  }

  .content {
    h1 {
      font-size: 50px;
      white-space: nowrap;
    }
  }
`;
