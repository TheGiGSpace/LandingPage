import './App.css'

// Import components 
import Header from './components/Header'
import Hero from './components/Hero'
import ProductBrief from './components/ProductBrief'
import HowItWorks from './components/HowItWorks'
import ScreenshotGallery from './components/ScreenshotGallery'
import MapSection from './components/MapSection'
import CTA from './components/CTA'
import Footer from './components/Footer'
// Import the new NavBar component demo
import { NavBarDemo } from './components/ui/navbar-demo'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <NavBarDemo />
      <main className="flex-grow">
        <Hero />
        <ProductBrief />
        <HowItWorks />
        <ScreenshotGallery />
        <MapSection />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
