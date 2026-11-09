import { Layout } from '../components/page/Layout'

export function Profile() {
  return (
    <>
      <Layout>
        <div className="order-section">
          <div className="page-header">
            <h2>Customer Name</h2>
            <h3>Manage Your Profile</h3>
          </div>
          <div className="profile-container">
            <form method="POST">
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
                    value="John"
                    title="Firstname"
                    placeholder="Firstname"
                    aria-label="Firstname"
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
                    value="Doe"
                    title="Lastname"
                    placeholder="Lastname"
                    aria-label="Lastname"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address1">
                    First address line
                    <span className="required">*</span>
                  </label>
                  <input
                    id="address1"
                    name="address1"
                    type="text"
                    value="123 Street"
                    title="First address line"
                    placeholder="First address line"
                    aria-label="First address line"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Second address line</label>
                  <input
                    id="address2"
                    name="address2"
                    type="text"
                    title="Second address line"
                    placeholder="Second address line"
                    aria-label="Second address line"
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
                    value="AB12CD"
                    title="Postcode"
                    placeholder="Postcode"
                    aria-label="Postcode"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email - view only</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value="john.doe@mail.com"
                    disabled
                    title="Email (view only)"
                    placeholder="Email"
                    aria-label="Email (view only)"
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
                    value="06701234567"
                    title="Phone"
                    placeholder="Phone number"
                    aria-label="Phone number"
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