import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import LoginScreen from './screens/LoginScreen';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
