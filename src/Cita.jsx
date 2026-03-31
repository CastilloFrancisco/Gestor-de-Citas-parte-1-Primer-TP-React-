function Cita({ cita, eliminarCita }) {
  return (
    <div className="cita">
      <p>Mascota: <h6>Firulais</h6></p>
      <p>Dueño: <h6>Bruno</h6></p>
      <p>Fecha: <h6>Hoy</h6></p>
      <p>Hora: <h6>67:67</h6></p>
      <p>Sintomas: <h6>VIH</h6></p>

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