export function Layout({children}) {
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
                <li><a href="/" className="nav-link">Events</a></li>

                <li><a href="/login" className="nav-link">Login</a></li>

                <li><a href="/profile" className="nav-link">Profile</a></li>
                
                <li className="basket-link">
                  <a href="/basket" className="nav-link">
                    Basket
                    <span className="basket-count">0</span>
                  </a>
                </li>

                <li><a href="/logout" className="nav-link">Logout</a></li>

                <li><a href="/register" className="nav-link">Register</a></li>
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