import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button } from 'antd'
import { CompHeader } from './components/CompHeader/CompHeader'
import { CompFotter } from './components/CompFotter/CompFotter'
import CompFormFunko from './components/CompFormFunko/CompFormFunko'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CompHeader></CompHeader>
    <CompFormFunko></CompFormFunko>
    <CompFotter></CompFotter>
    </>
  )
}

export default App
