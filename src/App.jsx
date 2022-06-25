import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import {LoginProvider} from './context/ContextLogin'

function App() {

  return (
    <LoginProvider>
      <AppRoutes />
    </ LoginProvider >
  )
}

export default App
