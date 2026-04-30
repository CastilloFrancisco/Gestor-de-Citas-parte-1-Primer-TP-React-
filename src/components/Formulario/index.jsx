import Campo from '../Campo'
import Subtitulo from '../Subtitulo'
import './Formulario.css'
import { useState } from "react";

export default function Formulario({ setCitas }) {

  const [cita, setCita] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const ValidacionCampo = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    });
  };

  const ValidacionEnvio = (e) => {
    e.preventDefault();

    if (Object.values(cita).includes("")) {
      alert("Completá todos los Campos");
      return;
    }

    setCitas((prev) => [...prev, cita]);

      setCita({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });
  };


  return (
    <>
      <Subtitulo text='Crear mi Cita' num=''></Subtitulo>
      <form onSubmit={ValidacionEnvio}>
        <Campo label="Nombre Mascota" name="mascota" value={cita.mascota} onChange={ValidacionCampo}/>
        <Campo label="Nombre Dueño" name="propietario" value={cita.propietario} onChange={ValidacionCampo}/>
        <Campo label="Fecha" type="date" name="fecha" value={cita.fecha} onChange={ValidacionCampo}/>
        <Campo label="hora" type="time" name="hora" value={cita.hora} onChange={ValidacionCampo}/>
        <Campo label="Síntomas" type="textarea" name="sintomas" value={cita.sintomas} onChange={ValidacionCampo}/>

        <button type="submit" className="u-full-width button-primary" >
          Agregar Cita
        </button>
      </form>
    </>
  )
}
