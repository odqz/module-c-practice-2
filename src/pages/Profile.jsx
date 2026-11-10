import { useEffect, useState } from 'react'
import { Layout } from '../components/page/Layout'
import { API } from '../components/api/Api'

export function Profile() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')
  const [postalCode, setPostalCode] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  function getAuthUser() {
    API.get('/user/me')
    .then(res => {
      setFirstName(res.data.firstName)
      setLastName(res.data.lastName)
      setAddress(res.data.address.address)
      setCountry(res.data.address.country)
      setPostalCode(res.data.address.postalCode)
      setEmail(res.data.email)
      setPhone(res.data.phone)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  function updateAuthUser(e) {
    e.preventDefault()

    API.patch('/users/2', {firstName, lastName, 'address': {address, country, postalCode}, email, phone})
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.error(err))
  }

  return (
    <>
      <Layout>
        <div className="order-section">
          <div className="page-header">
            <h2>Customer Name</h2>
            <h3>Manage Your Profile</h3>
          </div>
          <div className="profile-container">
            <form method="POST" onSubmit={updateAuthUser}>
              <div className="form-inner">
                <div className="form-group">
                  <label htmlFor="firstname">
                    Firstname
                    <span className="required">*</span>
                  </label>
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    title="Firstname"
                    placeholder="Firstname"
                    aria-label="Firstname"
                    onChange={e => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">
                    Lastname
                    <span className="required">*</span>
                  </label>
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    title="Lastname"
                    placeholder="Lastname"
                    aria-label="Lastname"
                    onChange={e => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">
                    Address line
                    <span className="required">*</span>
                  </label>
                  <input
                    id="address"
                    name="addressa"
                    type="text"
                    title="Address line"
                    placeholder="Address line"
                    aria-label="Address line"
                    onChange={e => setAddress(e.target.value)}
                    value={address}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="country">
                    Country
                  </label>
                  <input
                    id="country"
                    name="country"
                    type="text"
                    title="Country"
                    placeholder="Country"
                    aria-label="Country"
                    onChange={e => setCountry(e.target.value)}
                    value={country}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="postcode">
                    Postcode
                    <span className="required">*</span>
                  </label>
                  <input
                    id="postcode"
                    name="postcode"
                    type="text"
                    title="Postcode"
                    placeholder="Postcode"
                    aria-label="Postcode"
                    onChange={e => setPostalCode(e.target.value)}
                    value={postalCode}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email - view only</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    disabled
                    title="Email (view only)"
                    placeholder="Email"
                    aria-label="Email (view only)"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone
                    <span className="required">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    title="Phone"
                    placeholder="Phone number"
                    aria-label="Phone number"
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
              <button type="submit" className="button-primary">
                Update My Profile
              </button>
            </form>
          </div>
        </div>
      </Layout>
    </>
  )
}