import './Campo.css'

export default function Campo({ label, name, type = 'text', placeholder = '' }) {
  if (type === 'textarea') {
    return (
      <div className="form-field">
        <label htmlFor={name}>{label}</label>
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue=""
          className="form-textarea"
        />
      </div>
    )
  }

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} placeholder={placeholder} defaultValue="" />
    </div>
  )
}
