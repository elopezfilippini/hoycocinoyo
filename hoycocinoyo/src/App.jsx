import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from "./Home"
import Login from './Login'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      
      </div>
    
      <div className="card">
      
      <h1 class="titulo">Hoy cocino yo</h1>

      </div>
      <p className="subtitulo">
        Logueése para poder ingresar
      </p>

       {/* RUTAS USERS */}
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/inicio" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
