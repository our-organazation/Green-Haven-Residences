import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "../styles/header.css"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActive = (path) => {
    return location.pathname === path ? "active" : ""
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <Link to="/">
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
            </Link>
          </div>

          <nav className={`main-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <ul>
              <li>
                <Link to="/" className={isActive("/")}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className={isActive("/properties")}>
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className={isActive("/about")}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className={isActive("/blog")}>
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className={isActive("/contact")}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header-actions">
            <Link to="/contact" className="contact-btn">
              Contact us
            </Link>
          </div>

          <button
            className={`mobile-menu-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
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

