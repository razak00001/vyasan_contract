import { Link } from 'react-router-dom';
import { Phone, Mail, Instagram, Facebook, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-grid">

                    {/* Brand Info */}
                    <div className="footer-col">
                        <Link to="/" className="footer-logo">
                            <img src="/logo.jpg" alt="Viyasan General Contracting Logo" className="footer-logo-img" />
                        </Link>
                        <p className="footer-desc">
                            Expert design, build, and contracting services for commercial and residential projects across the Greater Toronto Area.
                        </p>
                        <div className="social-links">
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon">
                                <Instagram size={20} />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <nav className="footer-nav">
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/our-work">Project Gallery</Link>
                            <Link to="/service-area">Service Area</Link>
                            <Link to="/contact">Contact Us</Link>
                        </nav>
                    </div>

                    {/* Services */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Our Services</h4>
                        <nav className="footer-nav">
                            <Link to="/services/home-renovation">Home Renovation</Link>
                            <Link to="/services/renovation-addition">Renovation & Addition</Link>
                            <Link to="/services/home-extensions">Home Extensions</Link>
                            <Link to="/services/commercial-renovation">Commercial Renovation</Link>
                            <Link to="/services/condo-renovations">Condo Renovations</Link>
                            <Link to="/services/flooring">Carpet & Flooring</Link>
                            <Link to="/services/multi-family">Multi-Family Renovations</Link>
                        </nav>
                    </div>

                    {/* Contact */}
                    <div className="footer-col">
                        <h4 className="footer-heading">Contact Us</h4>
                        <div className="footer-contact">
                            <a href="tel:1-855-849-2726" className="contact-item">
                                <Phone size={18} /> 1-855-VIYASAN
                            </a>
                            <a href="mailto:info@viyasan.ca" className="contact-item">
                                <Mail size={18} /> info@viyasan.ca
                            </a>
                            <div className="contact-item">
                                <MapPin size={18} /> Serving the Greater Toronto Area (GTA)
                            </div>
                        </div>
                    </div>

                </div>

                <div className="footer-bottom">
                    <p>&copy; {currentYear} Viyasan General Contracting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
