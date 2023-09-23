import { useState } from "react";
import StartGame from "./Components/StartGame";
import styled from "styled-components";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <Section1>
      {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
    </Section1>
  );
}

export default App;
const Section1 = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
