import Cita from "../Cita"
import './ListaCitas.css'
import Subtitulo from '../Subtitulo' 

export default function ListaCitas() {

  const citas = [
    {
      mascota: "Nina",
      dueño: "Martin",
      fecha: "2021-08-05",
      hora: "08:20",
      sintomas: "Le duele la pierna"
    },
    {
      mascota: "Sifon",
      dueño: "Flecha",
      fecha: "2023-08-05",
      hora: "09:24",
      sintomas: "Duerme mucho"
    },
    {
      mascota: "Floki",
      dueño: "Ari",
      fecha: "2023-08-05",
      hora: "16:15",
      sintomas: "No está comiendo"
    }
  ];
  return (
    <>
     <Subtitulo text={'Administra tus citas'}></Subtitulo>

      {citas.map((cita, index) => (
        <Cita key={index} {...cita} />
      ))}
    </>
  );

}
