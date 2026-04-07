export default function Campo({ label, name, type = 'text', placeholder = '' }) {
  if (type === 'textarea') {
    return (
      <div className="form-field">
        
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue=""
          className="u-full-width form-textarea"
        />
      </div>
    )
  }

  return (
    <div className="form-field">
      
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"></link>
      <link href="https://fonts.googleapis.com/css?family=Staatliches" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css"></link>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue=""
        className="u-full-width"
      />
    </div>
  )
}