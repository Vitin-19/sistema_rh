import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginScreen from './screens/LoginScreen'
import SolicitacoesProfessorScreen from './screens/SolicitacaoProfessorScreen';
import JustificativaFaltaScreen from './screens/JustificativaFaltaScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SolicitacaoResponsavelScreen/>}/>
        <Route path='/Justificativa' element={<JustificativaFaltaScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
