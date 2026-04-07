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
    }, {
      id: 2,
      mascota: "Nina",
      propietario: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    }, {
      id: 3,
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

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>

      <Titulo text="ADMINISTRADOR DE PACIENTES" level="h1" />
      <div className="app-container">
        <div className="row">
          <div className="one-half column">
            <h2>Crear mi Cita</h2>
          </div>
          <div className="one-half column"></div>
          <Formulario agregarCita={agregarCita} />
          <ListaCitas citas={citas} esconderCCita={eliminarCita} />
        </div>
      </div>
    </main>
  )
}

export default App