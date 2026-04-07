import './Boton.css'

export default function Boton({ children, type = 'button', onClick, className = '' }) {
  return (
    <button type={type} onClick={onClick} className={`boton ${className}`}>
      {children}
    </button>
  )
}
