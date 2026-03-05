import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    return (
        <header className="header">
            <div className="container header-container">
                {/* Logo */}
                <Link to="/" className="logo">
                    <img src="/logo.jpg" alt="Viyasan General Contracting Logo" />
                </Link>

                {/* Desktop Navigation */}
                <nav className="desktop-nav">
                    <Link to="/" className="nav-link">Home</Link>

                    <div
                        className="dropdown-wrapper"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                    >
                        <div className="nav-link dropdown-trigger">
                            Services <ChevronDown size={16} />
                        </div>
                        {isServicesOpen && (
                            <div className="dropdown-menu">
                                <Link to="/services/home-renovation" className="dropdown-item">Home Renovation</Link>
                                <Link to="/services/renovation-addition" className="dropdown-item">Renovation & Addition</Link>
                                <Link to="/services/home-extensions" className="dropdown-item">Home Extensions</Link>
                                <Link to="/services/commercial-renovation" className="dropdown-item">Commercial Renovation</Link>
                                <Link to="/services/condo-renovations" className="dropdown-item">Condo Renovations</Link>
                                <Link to="/services/flooring" className="dropdown-item">Carpet & Flooring</Link>
                                <Link to="/services/multi-family" className="dropdown-item">Multi-Family Renovations</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/our-work" className="nav-link">Our Work</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/service-area" className="nav-link">Service Area</Link>
                    <Link to="/contact" className="nav-link">Contact</Link>
                </nav>

                {/* Actions */}
                <div className="header-actions">
                    <a href="tel:1-855-849-2726" className="phone-link">
                        <Phone size={18} />
                        <span>1-855-VIYASAN</span>
                    </a>

                    <button className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <nav className="mobile-nav">
                    <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                    <div className="mobile-section-title">Services</div>
                    <Link to="/services/home-renovation" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Home Renovation</Link>
                    <Link to="/services/renovation-addition" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Renovation & Addition</Link>
                    <Link to="/services/home-extensions" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Home Extensions</Link>
                    <Link to="/services/commercial-renovation" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Commercial Renovation</Link>
                    <Link to="/services/condo-renovations" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Condo Renovations</Link>
                    <Link to="/services/flooring" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Carpet & Flooring</Link>
                    <Link to="/services/multi-family" className="mobile-sublink" onClick={() => setIsMobileMenuOpen(false)}>Multi-Family Renovations</Link>
                    <Link to="/our-work" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Our Work</Link>
                    <Link to="/about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link to="/service-area" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Service Area</Link>
                    <Link to="/contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </nav>
            )}
        </header>
    );
};

export default Header;
