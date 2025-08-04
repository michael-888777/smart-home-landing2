import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Temperature() {
  const [temp, setTemp] = useState(null)
  const [unit, setUnit] = useState('')
  const [timestamp, setTimestamp] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    axios.get('https://mrgvn.pythonanywhere.com/temperature')
      .then(res => {
        setTemp(res.data.temperature)
        setUnit(res.data.unit)
        setTimestamp(res.data.timestamp)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to fetch temperature.')
        setLoading(false)
      })
  }, [])

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>🌡️ Current Temperature</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {temp !== null && !loading && !error && (
        <div style={{
          background: '#f5f5f5',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          textAlign: 'center',
          minWidth: '250px'
        }}>
          <p style={{ fontSize: '2.5rem', margin: 0 }}>{temp}°</p>
          <p style={{ marginTop: '0.5rem' }}>{unit}</p>
          <p style={{ fontSize: '0.85rem', marginTop: '1rem', color: '#555' }}>
            Updated: {new Date(timestamp).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  )
}
