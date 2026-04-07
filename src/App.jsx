import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'
import './App.css'

function App() {

  return (
      <>
      <Titulo t='ADMINISTRADOR DE PACIENTES'/>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>

          <div className="one-half column">
            <ListaCitas />
          </div>
        </div>
      </div>
    </>
  )
}

export default App