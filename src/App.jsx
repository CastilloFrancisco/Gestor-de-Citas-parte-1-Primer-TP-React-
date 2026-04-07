import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'
import './App.css'

function App() {
  const [citas, setCitas] = useState([
    {
      id: 1,
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    }
  ])

  function agregarCita(cita) {
    cita.id = Date.now()
    setCitas([...citas, cita])
  }

  function eliminarCita(id) {
    const nuevasCitas = citas.filter(cita => cita.id !== id)
    setCitas(nuevasCitas)
  }

  return (
    <main className="app">
      <Titulo text="ADMINISTRADOR DE PACIENTES" level="h1" />
      <div className="app-grid">
        <Formulario agregarCita={agregarCita} />
        <ListaCitas citas={citas} esconderCCita={eliminarCita} />
      </div>
    </main>
  )
}

export default App