import './Boton.css';

export default function Boton({ onClick }) {
  return (
    <button className="button eliminar u-full-width" onClick={onClick}>
      Eliminar ×
    </button>
  );
}