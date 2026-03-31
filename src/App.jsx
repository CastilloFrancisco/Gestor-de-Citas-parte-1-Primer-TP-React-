import { useState } from 'react'

import Cita from './Cita'

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

  return (
    <>
      <h1><Cita/></h1>
    </>
  )
}

function esconderCita(){
    const nuevasCitas = citas.filter(cita => cita.id !== id)
  setCitas(nuevasCitas)
}

export default App