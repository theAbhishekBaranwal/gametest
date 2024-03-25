import { useState } from 'react'

import './App.css'
import Deck from './components/Deck'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Exploding Kittens Game</h1>
      <Deck />
    </>
  )
}

export default App
