import styled from 'styled-components'
import './App.css'
import Startgame from './components/Startgame'
import { useState } from 'react'
import Gameplay from './components/Gameplay'

const Button = styled.button`
background-color: black;
color: white;
padding: 16px;
`

function App() {
  const[isGameStarted, setIsGameStarted] = useState(false)

  const toggleGamePlay = () =>{
    setIsGameStarted((prev) => !prev)
  }

  return (
    <>
{isGameStarted? <Gameplay /> : <Startgame toggle={toggleGamePlay}/>}
</>
  )
}

export default App
