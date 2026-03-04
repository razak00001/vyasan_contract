import { Routes, Route, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home';
import ServicePage from './pages/ServicePage';
import OurWork from './pages/OurWork';
import About from './pages/About';
import ServiceArea from './pages/ServiceArea';
import Contact from './pages/Contact';

function App() {
  const location = useLocation();

  return (
    <div className="app-wrapper">
      <Helmet>
        <title>Viyasan General Contracting | Toronto's Trusted Renovation Experts</title>
        <meta name="description" content="Viyasan General Contracting offers expert design, build, and contracting services for commercial and residential projects across the GTA. Specializing in kitchens, basements, and complete home renovations." />
      </Helmet>

      <Header />

      <main style={{ minHeight: '80vh' }}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServicePage />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
