import { useState } from 'react'
import './App.css'

const API = 'http://localhost:4000'

function App() {
  const [mode, setMode] = useState('login') // 'login' or 'signup'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [user, setUser] = useState(() => {
    const s = localStorage.getItem('user')
    return s ? JSON.parse(s) : null
  })

  async function handleSignup(e) {
    e.preventDefault()
    setMessage('')
    if (!email || !password) return setMessage('Provide email and password')

    const res = await fetch(`${API}/users?email=${encodeURIComponent(email)}`)
    const existing = await res.json()
    if (existing.length) return setMessage('Email already registered')

    const create = await fetch(`${API}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    })
    if (create.ok) {
      setMessage('Signup successful — switch to Log in')
      setMode('login')
      setEmail('')
      setPassword('')
    } else {
      setMessage('Signup failed')
    }
  }

  async function handleLogin(e) {
    e.preventDefault()
    setMessage('')
    if (!email || !password) return setMessage('Provide email and password')

    const res = await fetch(`${API}/users?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`)
    const matched = await res.json()
    if (matched.length) {
      const u = matched[0]
      const token = btoa(u.email + ':' + u.password)
      const payload = { id: u.id, email: u.email, token }
      localStorage.setItem('user', JSON.stringify(payload))
      setUser(payload)
      setMessage('Logged in')
      setEmail('')
      setPassword('')
    } else {
      setMessage('Invalid credentials')
    }
  }

  function handleLogout() {
    localStorage.removeItem('user')
    setUser(null)
    setMessage('Logged out')
  }

  if (user) {
    return (
      <div style={{ padding: 16 }}>
        <h2>Welcome</h2>
        <p>Signed in as: {user.email}</p>
        <button onClick={handleLogout}>Log out</button>
      </div>
    )
  }

  return (
    <div style={{ padding: 16 }}>
      <h2>{mode === 'login' ? 'Log In' : 'Sign Up'}</h2>

      <form onSubmit={mode === 'login' ? handleLogin : handleSignup}>
        <div>
          <label>Email</label>
          <br />
          <input value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div style={{ marginTop: 8 }}>
          <label>Password</label>
          <br />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        <div style={{ marginTop: 12 }}>
          <button type="submit">{mode === 'login' ? 'Log In' : 'Sign Up'}</button>
          <button type="button" onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setMessage('') }} style={{ marginLeft: 8 }}>
            {mode === 'login' ? 'Switch to Sign Up' : 'Switch to Log In'}
          </button>
        </div>
      </form>

      {message && <p style={{ color: 'crimson' }}>{message}</p>}
    </div>
  )
}

export default App
