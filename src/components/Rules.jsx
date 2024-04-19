import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesCont>
        <h2>How To Play Dice Game</h2>
     <div>
     <p>Select Any Number </p>
     <p>Click On Dice Image </p>
     <p>After clicking on the dice if the selected number is equal to dice number you will get same point as</p>
     <p>If you get wrong guess then 2 point will be deducted from your score.</p>
     </div>
    </RulesCont>
  )
}

export default Rules
const RulesCont = styled.div`
max-width: 800px;
margin: 0 auto;
background-color: #fbf1f1;
padding: 20px;
margin-top: 40px;
border-radius:10px ;
h2{
    font-size: 24px;
}
.text{
    margin-top: 24px;

}
`