function Cita({ cita, esconderCita }) {
  return (
    <div className="cita">
      <p>Mascota: <h6>{cita.mascota}</h6></p>
      <p>Dueño: <h6>{cita.propietario}</h6></p>
      <p>Fecha: <h6>{cita.fecha}</h6></p>
      <p>Hora: <h6>{cita.hora}</h6></p>
      <p>Sintomas: <h6>{cita.sintomas}</h6></p>

      <button
        className="button eliminar u-full-width"
        onClick={() => esconderCita(cita.id)}
      >
        Eliminar ×
      </button>
    </div>
  )
}


export default Cita