import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'

function App() {
  return (
    <div className="min-h-screen bg-background-dark">
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-30">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <AboutSection />
    </div>
  )
}

export default App