import { Link } from "react-router-dom"
import "../styles/about.css"

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Green Haven</h1>
            <p>Redefining eco-friendly luxury living in South Africa</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content">
              <h2>Our Story</h2>
              <p>
                Founded in 2024, Green Haven Residences was born from a vision to create living spaces that harmonize
                luxury with environmental responsibility. What began as a small development project has grown into one of
                South Africa's most innovative eco-friendly property developers.
              </p>
              <p>
                Our journey started when our founders, experienced architects and environmental scientists, recognized
                the growing need for sustainable living solutions that don't compromise on comfort or style. They set out
                to prove that eco-friendly homes could be both luxurious and accessible.
              </p>
              <p>
                Today, Green Haven stands as a testament to that vision, with award-winning developments across the
                country that combine cutting-edge sustainable technology with elegant design and premium amenities.
              </p>
            </div>
            <div className="about-image">
              <img src="https://i.pinimg.com/736x/e6/b3/d2/e6b3d249e8467de54a4cd5c912dd91d8.jpg" alt="Green Haven building exterior" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="about-section about-mission">
        <div className="container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Green Haven, we're committed to creating sustainable, luxurious living spaces that minimize
              environmental impact while maximizing comfort and quality of life.
            </p>

            <div className="mission-values">
              <div className="value-card">
                <div className="value-icon">
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
                  >
                    <path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8z"></path>
                    <path d="M12 11V5a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v6"></path>
                    <path d="M6 11V5a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v6"></path>
                  </svg>
                </div>
                <h3>Sustainability</h3>
                <p>
                  We integrate renewable energy, water conservation systems, and eco-friendly materials in all our
                  developments.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
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
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>
                  We never compromise on quality, using premium materials and working with the best craftsmen and
                  contractors.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
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
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3>Community</h3>
                <p>
                  We design spaces that foster connection and community, with shared amenities and gathering spaces.
                </p>
              </div>

              <div className="value-card">
                <div className="value-icon">
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
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                </div>
                <h3>Innovation</h3>
                <p>
                  We continuously research and implement the latest sustainable technologies and design practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section">
        <div className="container">
          <h2>Our Leadership Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="team-photo">
                <img src="/placeholder.svg?height=300&width=300" alt="Sarah Johnson" />
              </div>
              <h3>Sarah Johnson</h3>
              <p className="team-title">Founder & CEO</p>
              <p className="team-bio">
                With over 20 years of experience in sustainable architecture, Sarah leads our vision for eco-friendly
                luxury living.
              </p>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src="/placeholder.svg?height=300&width=300" alt="David Nkosi" />
              </div>
              <h3>David Nkosi</h3>
              <p className="team-title">Chief Architect</p>
              <p className="team-bio">
                David's award-winning designs blend modern aesthetics with traditional South African elements and
                sustainable principles.
              </p>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src="/placeholder.svg?height=300&width=300" alt="Thandi Mbeki" />
              </div>
              <h3>Thandi Mbeki</h3>
              <p className="team-title">Sustainability Director</p>
              <p className="team-bio">
                Thandi ensures all our developments meet and exceed international sustainability standards.
              </p>
            </div>

            <div className="team-member">
              <div className="team-photo">
                <img src="/placeholder.svg?height=300&width=300" alt="Michael van der Merwe" />
              </div>
              <h3>Michael van der Merwe</h3>
              <p className="team-title">Head of Operations</p>
              <p className="team-bio">
                Michael oversees all construction and ensures our projects are delivered on time and to the highest
                standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="about-section about-achievements">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement">
              <div className="achievement-number">15+</div>
              <div className="achievement-text">Completed Projects</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">500+</div>
              <div className="achievement-text">Happy Residents</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">12</div>
              <div className="achievement-text">Industry Awards</div>
            </div>
            <div className="achievement">
              <div className="achievement-number">30%</div>
              <div className="achievement-text">Energy Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Experience Green Haven?</h2>
            <p>Discover our available properties or schedule a viewing today.</p>
            <div className="cta-buttons">
              <Link to="/properties" className="btn btn-primary">
                View Properties
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
