import './Boton.css'

export default function Boton({ children, type = 'button', onClick, className = '' }) {
  return (

    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <button type={type} onClick={onClick} className={`boton ${className}`}>
        {children}
      </button> </div>
  )
}
