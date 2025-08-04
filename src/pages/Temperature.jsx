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
        console.error(err)
        setError('Failed to fetch temperature data.')
        setLoading(false)
      })
  }, [])

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '600px',
      margin: '0 auto',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Smart Home Temperature</h1>

      {loading && <p>Loading temperature...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {temp !== null && !loading && !error && (
        <div style={{ marginTop: '1rem' }}>
          <p style={{ fontSize: '2rem' }}>
            <strong>{temp}° {unit}</strong>
          </p>
          <p style={{ fontSize: '0.9rem', color: '#555' }}>
            Last updated: {new Date(timestamp).toLocaleString()}
          </p>
        </div>
      )}
    </div>
  )
}
