import './Cita.css'

function Cita({ cita, esconderCita }) {
  return (
    <div className="cita">
      
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
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