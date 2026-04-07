import Titulo from '../Titulo'
import Cita from './Cita'
import './ListaCitas.css'

export default function ListaCitas({ citas, eliminarCita }) {
  return (
    <section className="lista-citas">
      <Titulo text="Administra tus citas" level="h2" />

      {citas.map((cita) => (
        <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
      ))}
    </section>
  )
}
