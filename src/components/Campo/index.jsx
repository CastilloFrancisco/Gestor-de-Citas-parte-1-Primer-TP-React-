import './Campo.css'

export default function Campo({ label, name, type = 'text', placeholder = '' }) {
  if (type === 'textarea') {
    return (
      <>
        <label>{label}</label>
        <textarea name={name} className="u-full-width" ></textarea>
      </>
    );

  }

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        className="u-full-width"
        placeholder={placeholder}
      />
    </>
  )
}