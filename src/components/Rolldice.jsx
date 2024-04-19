
import styled from 'styled-components'

function Rolldice({currentDice, rollDice}) {

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt={`dice_${currentDice}`} />
        </div>
        <p>Click On Dice To Roll</p> 
    </DiceContainer>
  )
}

export default Rolldice

const DiceContainer = styled.div`
margin-top: 48px;
flex-direction: column;
display: flex;
align-items: center;

.dice{
    cursor: pointer;
}
    
`