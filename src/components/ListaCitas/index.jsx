import Cita from "../Cita"
import './ListaCitas.css'
import Subtitulo from '../Subtitulo'

export default function ListaCitas({ citas, setCitas }) {
  const eliminarCita = (index) => {

    const nuevas = citas.filter((_, i) => i !== index);
    setCitas(nuevas);
  }

  return (
    <>
      <Subtitulo text={'Administra tus citas'} />

      {citas.map((cita, index) => (
        <Cita
          key={index}
          {...cita}
          Eliminar={() => eliminarCita(index)}
        />
      ))}
    </>
  );
}

