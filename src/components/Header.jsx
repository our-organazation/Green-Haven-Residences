import "./styles/header.css"

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <a href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="logo-icon"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
              Green Haven
            </a>
          </div>

          <nav className="main-nav">
            <ul>
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/properties">Properties</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <a href="/contact" className="contact-btn">
              Contact us
            </a>
          </div>

          <button className="mobile-menu-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

