import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginScreen from './screens/LoginScreen'
import TipoDocumentoScreen from './screens/TipoDocumentoScreen'
import SolicitacaoProfessorScreen from './screens/SolicitacaoProfessorScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
        <Route path='/solicitacaoprofessor' element={<SolicitacaoProfessorScreen/>}/>
        <Route path='/tipodocumento' element={<TipoDocumentoScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
