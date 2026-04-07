import Titulo from '../Titulo'
import Campo from '../Campo'
import Boton from '../Boton'
import './Formulario.css'

export default function Formulario() {
  return (
    <section className="formulario">
      
    
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <Titulo text="Crear mi Cita" level="h2" />

      <form className="formulario-contenido" onSubmit={(event) => event.preventDefault()}>
        <Campo label="Nombre Mascota" name="mascota" placeholder="Nombre Mascota" />
        <Campo label="Nombre Dueño" name="propietario" placeholder="Nombre dueño de la mascota" />
        <Campo label="Fecha" name="fecha" type="date" />
        <Campo label="Hora" name="hora" type="time" />
        <Campo label="Sintomas" name="sintomas" type="textarea" placeholder="Describe los síntomas" />
        <Boton type="submit" className="button-primary u-full-width">
          Agregar Cita  
        </Boton>
      </form>
    </section>
  )
}
