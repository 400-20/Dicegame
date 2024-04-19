
import styled from "styled-components";
function NumberSelector({selectedNumber, setSelectedNumber,error,setError}) {
  const arr = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (num) =>{
    setSelectedNumber(num)
    setError("")
  }

  return (
    <NumberSelectorCont>
      <p className="error">{error}</p>
      <div className="dadada ">
        {arr.map((num) => (
          <Box
            isSelected={num === selectedNumber}
            key={num}
            onClick={() => numberSelectorHandler(num)}
          >
            {num}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorCont>
  );
}

export default NumberSelector;

const NumberSelectorCont = styled.div`
.error{
  color: red;
}
  display: flex;
  flex-direction: column;
  align-items: end;
  
  .dadada {
    display: flex;
    gap: 24px;
  }
  p {
    font-size: 24px;
    font-weight: 700px;
  }
`;

const Box = styled.div`

  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  &:hover {
    background-color: black;
    color: white;
  }
`;
