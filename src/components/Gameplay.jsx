import { TotalScore } from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import Rolldice from "./Rolldice";
import { useState } from "react";
import { Button, OutlineButton } from "./styled/Button";
import Rules from "./Rules";

function Gameplay() {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const[showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("Please select a number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectedNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  };


  const isClicked = () =>{
    return setShowRules((prev) => !prev)
  }
  return (
    <Maincont>
      <div className="topsection">
        <TotalScore score={score} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          error={error}
          setError={setError}
        />
      </div>
      <Rolldice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={isClicked}>{showRules ? "Hide" : "Show"} Rules</Button>
{ showRules? <Rules /> : null}
      </div>
    </Maincont>
  );
}

export default Gameplay;

const Maincont = styled.main`
  padding-top: 70px;
  .topsection {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }
  .btns {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 0.8rem;
  }
`;
