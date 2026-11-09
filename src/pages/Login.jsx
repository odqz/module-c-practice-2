import { Layout } from '../components/page/Layout'
import { API } from '../components/api/Api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const nav = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function authenticateUser(e) {
    e.preventDefault()

    API.post('/auth/login', {username, password})
    .then(res => {
      localStorage.setItem('auth-token', res.data.accessToken)
      nav('/')
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <Layout>
        <div className="login-page">
          <div className="login-outer">
            <div className="login-box">
              <div className="login-header">
                <h2>Login</h2>
                <h3>To order from our high variety images!</h3>
              </div>

              {/* <!-- Error message placeholder --> */}
              <p className="login-error">Email and password are required!</p>

              <form className="login-form" onSubmit={authenticateUser}>
                {/* <!-- Email --> */}
                <div className="form-group">
                  <label htmlFor="username">
                    Username
                    <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="username" 
                    placeholder="Customer Username" 
                    required
                    onChange={(e) => {setUsername(e.target.value)}}
                    value={username}
                  />
                </div>

                {/* <!-- Password --> */}
                <div className="form-group">
                  <label htmlFor="password">
                    Password
                    <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Customer Password"
                    required
                    onChange={(e) => {setPassword(e.target.value)}}
                    value={password}
                  />
                </div>

                <button type="submit" className="login-btn">Login</button>
              </form>

              <div className="login-footer">
                <p>Not yet an account holder?</p>
                <a href="/register" className="register-link">Register Now!</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}