import { useState } from 'react'
import Titulo from './components/Titulo'
import Formulario from './components/Formulario'
import ListaCitas from './components/ListaCitas'
import './App.css'

function App() {

  const [citas, setCitas] = useState([
{
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
]);

  return (
      <>
      <Titulo t='ADMINISTRADOR DE PACIENTES'/>

      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario setCitas={setCitas}/>
          </div>

          <div className="one-half column">
            <ListaCitas citas={citas} setCitas={setCitas}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App