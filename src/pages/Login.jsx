import { Layout } from '../components/page/Layout'

export function Login() {
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

              <form className="login-form">
                {/* <!-- Email --> */}
                <div className="form-group">
                  <label htmlFor="email">
                    Email
                    <span className="required">*</span>
                  </label>
                  <input type="email" id="email" placeholder="Customer Email" />
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