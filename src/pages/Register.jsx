import { Layout } from '../components/page/Layout'

export function Register() {
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
              <form className="register-form">
                <div className="form-group">
                  <label htmlFor="firstname">
                    Firstname
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    placeholder="Customer Firstname"
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
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address_first">
                    First address line
                    <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="address_first"
                    placeholder="First Address Line"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address_second">Second address line</label>
                  <input
                    type="text"
                    id="address_second"
                    placeholder="Second Address Line (optional)"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="postcode">
                    Postcode
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="postcode" placeholder="Postcode" />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    <span className="required">*</span>
                  </label>
                  <input type="email" id="email" placeholder="Customer Email" />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone
                    <span className="required">*</span>
                  </label>
                  <input type="text" id="phone" placeholder="Customer Mobile" />
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