import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      background: '#333',
      color: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div><strong>SmartHome</strong></div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
        <Link to="/temperature" style={linkStyle}>Temperature</Link>
      </div>
    </nav>
  )
}

const linkStyle = {
  color: 'white',
  textDecoration: 'none'
}
