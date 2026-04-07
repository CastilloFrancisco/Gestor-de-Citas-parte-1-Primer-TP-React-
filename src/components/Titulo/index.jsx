import './Titulo.css'

export default function Titulo({ text, level = 'h1' }) {
  const Tag = level

  return <Tag className={`titulo titulo-${level}`}>{text}</Tag>
}
