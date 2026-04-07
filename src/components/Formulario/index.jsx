import Campo from '../Campo'
import Subtitulo from '../Subtitulo' 
import './Formulario.css'

export default function Formulario() {
  return (
    <>
      <Subtitulo text='Crear mi Cita'></Subtitulo>
      <form>
        <Campo label="Nombre Mascota" type="text" name="mascota" placeholder="Nombre Mascota" />
        <Campo label="Nombre Dueño" type="text" name="propietario" placeholder="Nombre dueño de la mascota" />
        <Campo label="Fecha" type="date" name="fecha" />
        <Campo label="hora" type="time" name="hora" />

        <Campo label="Síntomas" type='textarea' name="sintomas" />

        <button type="submit" className="u-full-width button-primary" >
          Agregar Cita
        </button>
      </form>
    </>
  )
}
