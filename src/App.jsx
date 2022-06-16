import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import { CompHeader } from './components/CompHeader/CompHeader'
import { CompFotter } from './components/CompFotter/CompFotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompHeader></CompHeader>
    <Button>INICIAR</Button>
    <CompFotter></CompFotter>
    </>
  )
}

export default App
