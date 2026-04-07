import Titulo from '../Titulo'
import Cita from "../Cita"
import './ListaCitas.css'

export default function ListaCitas({ citas, eliminarCita }) {
  return (
    <section className="lista-citas">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      
      <Titulo text="Administra tus citas" level="h2" />

      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </section>
  )
}
