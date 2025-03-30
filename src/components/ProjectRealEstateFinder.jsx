import { useState } from "react"
import './styles/RealEstateFinder.css'

export default function ProjectRealEstateFinder() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [priceRange, setPriceRange] = useState([150000, 800000])
  const [bedrooms, setBedrooms] = useState("any")
  const [selectedProperty, setSelectedProperty] = useState(null)
  const [showVirtualTour, setShowVirtualTour] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  // Sample property data for the complex
  const properties = [
    {
      id: 1,
      title: "Modern Studio Apartment",
      price: 150000,
      bedrooms: 0,
      bathrooms: 1,
      sqft: 450,
      type: "apartment",
      image: "https://i.pinimg.com/736x/80/43/7b/80437b538add83b1fcbdf056c89c28cf.jpg",
      location: { lat: 34.052, lng: -118.243 },
      features: ["Balcony", "Fitness Center", "Pet Friendly"],
      available: true,
    },
    {
      id: 2,
      title: "Luxury One Bedroom",
      price: 250000,
      bedrooms: 1,
      bathrooms: 1,
      sqft: 650,
      type: "apartment",
      image: "https://i.pinimg.com/736x/c6/a9/33/c6a933ec2b6ee4d972556f9a43bf2170.jpg",
      location: { lat: 34.053, lng: -118.245 },
      features: ["Balcony", "Pool", "Fitness Center", "Pet Friendly"],
      available: true,
    },
    {
      id: 3,
      title: "Spacious Two Bedroom",
      price: 350000,
      bedrooms: 2,
      bathrooms: 2,
      sqft: 950,
      type: "apartment",
      image: "https://i.pinimg.com/736x/c6/a9/33/c6a933ec2b6ee4d972556f9a43bf2170.jpg",
      location: { lat: 34.054, lng: -118.246 },
      features: ["Balcony", "Pool", "Fitness Center", "Pet Friendly", "Parking"],
      available: true,
    },
    {
      id: 4,
      title: "Premium Three Bedroom",
      price: 450000,
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1250,
      type: "apartment",
      image: "https://i.pinimg.com/736x/c6/a9/33/c6a933ec2b6ee4d972556f9a43bf2170.jpg",
      location: { lat: 34.055, lng: -118.247 },
      features: ["Balcony", "Pool", "Fitness Center", "Pet Friendly", "Parking", "Storage"],
      available: false,
    },
    {
      id: 5,
      title: "Garden Townhouse",
      price: 550000,
      bedrooms: 3,
      bathrooms: 2.5,
      sqft: 1450,
      type: "townhouse",
      image: "https://i.pinimg.com/736x/e6/b3/d2/e6b3d249e8467de54a4cd5c912dd91d8.jpg",
      location: { lat: 34.056, lng: -118.248 },
      features: ["Private Garden", "Pool", "Fitness Center", "Pet Friendly", "Parking", "Storage"],
      available: true,
    },
    {
      id: 6,
      title: "Penthouse Suite",
      price: 800000,
      bedrooms: 4,
      bathrooms: 3,
      sqft: 2000,
      type: "penthouse",
      image: "https://i.pinimg.com/736x/e6/b3/d2/e6b3d249e8467de54a4cd5c912dd91d8.jpg",
      location: { lat: 34.057, lng: -118.249 },
      features: ["Rooftop Terrace", "Pool", "Fitness Center", "Pet Friendly", "Parking", "Storage", "Concierge"],
      available: true,
    },
  ]

  // Filter properties based on selected criteria
  const filteredProperties = properties.filter((property) => {
    // Filter by type
    if (activeFilter !== "all" && property.type !== activeFilter) return false

    // Filter by price range
    if (property.price < priceRange[0] || property.price > priceRange[1]) return false

    // Filter by bedrooms
    if (bedrooms !== "any" && property.bedrooms !== Number.parseInt(bedrooms)) return false

    return true
  })

  const handlePropertyClick = (property) => {
    setSelectedProperty(property)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="real-estate-finder">
      {/* Header Section */}
      <header className="finder-header">
        <div className="container">
          <div className="finder-header-content">
            <h1>Green Haven Residences</h1>
            <p>Discover your perfect home in our exclusive new eco-friendly complex</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container">
        <div className="finder-content">
          {/* Property Detail Modal */}
          {selectedProperty && (
            <div className="property-detail-modal">
              <div className="modal-header">
                <h2>{selectedProperty.title}</h2>
                <button
                  className="close-button"
                  onClick={() => setSelectedProperty(null)}
                  aria-label="Close property details"
                >
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <div className="property-images">
                  <img src={selectedProperty.image || "/placeholder.svg"} alt={selectedProperty.title} />
                  <button className="virtual-tour-button" onClick={() => setShowVirtualTour(true)}>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                    Virtual Tour
                  </button>
                </div>

                <div className="property-info">
                  <div className="property-price">{formatPrice(selectedProperty.price)}</div>

                  <div className="property-specs">
                    <div className="spec">
                      <span className="spec-value">{selectedProperty.bedrooms}</span>
                      <span className="spec-label">Bedrooms</span>
                    </div>
                    <div className="spec">
                      <span className="spec-value">{selectedProperty.bathrooms}</span>
                      <span className="spec-label">Bathrooms</span>
                    </div>
                    <div className="spec">
                      <span className="spec-value">{selectedProperty.sqft}</span>
                      <span className="spec-label">Sq Ft</span>
                    </div>
                  </div>

                  <div className="property-features">
                    <h3>Features</h3>
                    <ul>
                      {selectedProperty.features.map((feature, index) => (
                        <li key={index}>
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
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="property-availability">
                    <span className={`availability-badge R{selectedProperty.available ? "available" : "unavailable"}`}>
                      {selectedProperty.available ? "Available" : "Reserved"}
                    </span>
                  </div>

                  <button className="btn btn-primary btn-full" onClick={() => setShowContactForm(true)}>
                    Contact Agent
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Virtual Tour Modal */}
          {showVirtualTour && (
            <div className="virtual-tour-modal">
              <div className="modal-header">
                <h2>Virtual Tour</h2>
                <button
                  className="close-button"
                  onClick={() => setShowVirtualTour(false)}
                  aria-label="Close virtual tour"
                >
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <div className="virtual-tour-placeholder">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="10 8 16 12 10 16 10 8"></polygon>
                  </svg>
                  <p>360° Virtual Tour Experience</p>
                  <span>Interactive 3D tour would be embedded here</span>
                </div>
              </div>
            </div>
          )}

          {/* Contact Form Modal */}
          {showContactForm && (
            <div className="contact-form-modal">
              <div className="modal-header">
                <h2>Contact Our Agent</h2>
                <button
                  className="close-button"
                  onClick={() => setShowContactForm(false)}
                  aria-label="Close contact form"
                >
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
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              <div className="modal-body">
                <form className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Enter your full name" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" placeholder="Enter your email address" required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="I'm interested in this property..."
                      required
                    ></textarea>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-full">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Sidebar with Filters */}
          <aside className="finder-sidebar">
            <div className="filter-section">
              <h3>Property Type</h3>
              <div className="filter-options">
                <button
                  className={`filter-button R{activeFilter === "all" ? "active" : ""}`}
                  onClick={() => setActiveFilter("all")}
                >
                  All
                </button>
                <button
                  className={`filter-button R{activeFilter === "apartment" ? "active" : ""}`}
                  onClick={() => setActiveFilter("apartment")}
                >
                  Apartments
                </button>
                <button
                  className={`filter-button R{activeFilter === "townhouse" ? "active" : ""}`}
                  onClick={() => setActiveFilter("townhouse")}
                >
                  Townhouses
                </button>
                <button
                  className={`filter-button R{activeFilter === "penthouse" ? "active" : ""}`}
                  onClick={() => setActiveFilter("penthouse")}
                >
                  Penthouses
                </button>
              </div>
            </div>

            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range">
                <div className="range-values">
                  <span>{formatPrice(priceRange[0])}</span>
                  <span>{formatPrice(priceRange[1])}</span>
                </div>
                <div className="range-slider">
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="50000"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number.parseInt(e.target.value), priceRange[1]])}
                  />
                  <input
                    type="range"
                    min="100000"
                    max="1000000"
                    step="50000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number.parseInt(e.target.value)])}
                  />
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3>Bedrooms</h3>
              <select className="bedroom-select" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)}>
                <option value="any">Any</option>
                <option value="0">Studio</option>
                <option value="1">1 Bedroom</option>
                <option value="2">2 Bedrooms</option>
                <option value="3">3 Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div className="filter-section">
              <h3>Complex Map</h3>
              <div className="map-placeholder">
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
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <p>Interactive Map</p>
                <span>Map integration would be displayed here</span>
              </div>
            </div>

            <div className="filter-section">
              <h3>Contact Agent</h3>
              <button className="btn btn-primary btn-full" onClick={() => setShowContactForm(true)}>
                Schedule a Viewing
              </button>
            </div>
          </aside>

          {/* Main Property Listings */}
          <main className="finder-main">
            <div className="finder-results-header">
              <h2>Available Properties</h2>
              <span className="results-count">{filteredProperties.length} properties found</span>
            </div>

            <div className="property-grid">
              {filteredProperties.map((property) => (
                <div key={property.id} className="property-card" onClick={() => handlePropertyClick(property)}>
                  <div className="property-image">
                    <img src={property.image || "/placeholder.svg"} alt={property.title} />
                    <span className={`property-badge R{property.available ? "available" : "unavailable"}`}>
                      {property.available ? "Available" : "Reserved"}
                    </span>
                  </div>

                  <div className="property-content">
                    <h3>{property.title}</h3>
                    <div className="property-price">{formatPrice(property.price)}</div>

                    <div className="property-details">
                      <span>
                        {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                      </span>
                      <span>
                        {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
                      </span>
                      <span>{property.sqft} Sq Ft</span>
                    </div>

                    <button className="btn btn-sm btn-outline">View Details</button>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

