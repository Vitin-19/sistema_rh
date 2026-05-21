import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginScreen from './screens/LoginScreen'
import SolicitacoesProfessorScreen from './screens/SolicitacaoProfessorScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SolicitacoesProfessorScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
