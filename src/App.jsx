import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import Header from "./components/Header"
import ProjectRealEstateFinder from "./components/ProjectRealEstateFinder"
import Footer from "./components/Footer"
import AboutPage from "./pages/about"
import ContactPage from "./pages/contact"

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<ProjectRealEstateFinder />} />
          <Route path="/properties" element={<ProjectRealEstateFinder />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/virtual-tours" element={<VirtualToursPage />} />
          <Route path="/eco-features" element={<EcoFeaturesPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}


const BlogPage = () => (
  <div className="container page-container">
    <h1>Blog</h1>
    <p>Content coming soon...</p>
  </div>
)

const VirtualToursPage = () => (
  <div className="container page-container">
    <h1>Virtual Tours</h1>
    <p>Content coming soon...</p>
  </div>
)
const EcoFeaturesPage = () => (
  <div className="container page-container">
    <h1>Eco Features</h1>
    <p>Content coming soon...</p>
  </div>
)
const PrivacyPage = () => (
  <div className="container page-container">
    <h1>Privacy Policy</h1>
    <p>Content coming soon...</p>
  </div>
)
const TermsPage = () => (
  <div className="container page-container">
    <h1>Terms of Service</h1>
    <p>Content coming soon...</p>
  </div>
)

export default App

