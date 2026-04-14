import "./Cita.css";
import Boton from "../Boton";

export default function Cita ({ mascota, dueño, fecha, hora, sintomas, onEliminar }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{dueño}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Síntomas: <span>{sintomas}</span></p>

      <Boton onClick={onEliminar}/>

    </div>
  );
}