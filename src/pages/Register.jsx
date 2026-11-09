import { useState } from 'react'
import { Layout } from '../components/page/Layout'
import { API } from '../components/api/Api'

export function Register() {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalcode] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')

  function createUser(e) {
    e.preventDefault()

    API.post('/users/add', {firstName, lastName, 'address': {address, country, postalCode}, email, password})
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <Layout>
        <div className="register-page">
          <div className="register-outer">
            <div className="register-box">
              {/* <!-- Header --> */}
              <div className="register-header">
                <h2>Register</h2>
                <h3>...and order instantly!</h3>
              </div>

              {/* <!-- Error --> */}
              <p className="register-error">Example error message goes here</p>

              {/* <!-- Form --> */}
              <form className="register-form" onSubmit={createUser}>
                <div className="form-group">
                  <label htmlFor="firstname">
                    Firstname
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Customer Firstname"
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastname">
                    Lastname
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    placeholder="Customer Lastname"
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastName}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    Address line
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Address Line"
                    required
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="country">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Country Line (optional)"
                    onChange={(e) => setCountry(e.target.value)}
                    value={country}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postcode">
                    Postcode
                    <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="postcode" 
                    placeholder="Postcode"
                    required
                    onChange={(e) => setPostalcode(e.target.value)}
                    value={postalCode}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    <span className="required">*</span>
                  </label>
                  <input 
                    type="email"
                    id="email" 
                    placeholder="Customer Email"
                    required
                    onChange={(e) => setEmail(e.target.value)} 
                    value={email}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone
                    <span className="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="phone" 
                    placeholder="Customer Mobile"
                    required
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>

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
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                </div>
                <button type="submit" className="button-primary register-btn">
                  Register
                </button>
              </form>

              {/* <!-- Footer --> */}
              <div className="register-footer">
                <p>Already have an account with us?</p>
                <a href="login.html" className="login-link">Login Now!</a>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}