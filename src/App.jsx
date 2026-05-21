import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginScreen from './screens/LoginScreen';
import SolicitacaoResponsavelScreen from './screens/SolicitacaoResponsavelScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SolicitacaoResponsavelScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
