import { useNavigate } from "react-router-dom"

export function Layout({children}) {
  const authToken = localStorage.getItem('auth-token')
  const nav = useNavigate()

  function logoutUser(e) {
    e.preventDefault()
    localStorage.removeItem('auth-token')
    nav('/login')
  }

  return (
    <>
      <div className="app-wrapper">
        {/* Header */}
        <header className="header">
          <div className="header-inner">
            <h1 className="logo">
              <span className="logo-img">
                <img src="../../../public/logo.svg" alt="Spark Studios logo" />
              </span>
              Spark Studios
            </h1>

            <nav className="nav">
              <ul>
                {/* Always shown */}
                <li><a href="/" className="nav-link">Events</a></li>

                {/* Only shown when logged out */}
                { authToken ? '' : <li><a href="/login" className="nav-link">Login</a></li> }
                { authToken ? '' : <li><a href="/register" className="nav-link">Register</a></li> }

                {/* Only shown when logged in */}
                { authToken ? <li><a href="/profile" className="nav-link">Profile</a></li> : '' }
                { authToken ? 
                  <li className="basket-link">
                    <a href="/basket" className="nav-link">
                      Basket
                      <span className="basket-count">0</span>
                    </a>
                  </li> : '' }
                { authToken ? <li onClick={logoutUser}><a href="/logout" className="nav-link">Logout</a></li> : '' }
              </ul>
            </nav>
          </div>
        </header>

        {/* Main page content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-inner">
            <h3 className="footer-heading">Find your Spark!</h3>
            <div className="footer-bottom">&copy; 2025 Spark Studios</div>
          </div>
        </footer>
      </div>
    </>
  )
}