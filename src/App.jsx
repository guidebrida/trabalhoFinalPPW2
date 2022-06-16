import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import { CompHeader } from './components/CompHeader/CompHeader'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompHeader></CompHeader>
    <Button>INICIAR</Button>
    </>
  )
}

export default App
