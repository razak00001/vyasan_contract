import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import Button from '../components/Button';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Contact Us | Get a Free Renovation Estimate | Viyasan General Contracting</title>
                <meta name="description" content="Ready to start your project? Contact Viyasan General Contracting today for a free, no-obligation consultation and estimate. Call 1-855-VIYASAN or use our online form." />
            </Helmet>

            <div className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: "url('/home/featured_projects/luxury_villa_project_downtown_area_residential.webp')" }}></div>
                <div className="page-header-overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Contact Viyasan General Contracting</h1>
                    <p className="text-xl opacity-90">Get in touch for your free, no-obligation estimate today.</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Info */}
                        <div className="contact-info-panel">
                            <h2 className="contact-info-title">Let's Discuss Your Project</h2>
                            <p className="contact-info-desc">
                                Whether you're ready to start building or just exploring your options, our team is here to answer your questions and provide expert guidance.
                            </p>

                            <div className="contact-methods">
                                <a href="tel:1-855-849-2726" className="contact-method-card">
                                    <div className="contact-icon"><Phone size={24} /></div>
                                    <div className="contact-method-content">
                                        <h3>Call Us</h3>
                                        <p className="primary-text">1-855-VIYASAN</p>
                                        <p className="secondary-text">(1-855-849-2726)</p>
                                    </div>
                                </a>

                                <a href="mailto:info@viyasan.ca" className="contact-method-card">
                                    <div className="contact-icon"><Mail size={24} /></div>
                                    <div className="contact-method-content">
                                        <h3>Email Us</h3>
                                        <p className="primary-text">info@viyasan.ca</p>
                                    </div>
                                </a>

                                <a href="https://www.viyasan.ca" target="_blank" rel="noreferrer" className="contact-method-card">
                                    <div className="contact-icon"><Globe size={24} /></div>
                                    <div className="contact-method-content">
                                        <h3>Website</h3>
                                        <p className="primary-text">www.viyasan.ca</p>
                                    </div>
                                </a>

                                <div className="contact-method-card service-area-card">
                                    <div className="contact-icon"><MapPin size={24} /></div>
                                    <div className="contact-method-content">
                                        <h3 className="text-primary">Service Area</h3>
                                        <p className="secondary-text">Proudly serving the entire Greater Toronto Area (GTA).</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-panel relative z-20">
                            <h3 className="contact-form-title">Request a Free Estimate</h3>

                            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label htmlFor="name">Full Name *</label>
                                    <input type="text" id="name" placeholder="John Doe" required />
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="email">Email Address *</label>
                                        <input type="email" id="email" placeholder="john@example.com" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="(416) 555-0123" />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="project-type">Project Type *</label>
                                    <select id="project-type" required>
                                        <option value="">Select a project type...</option>
                                        <option value="home-renovation">Home Renovation (Full Interior)</option>
                                        <option value="renovation-addition">Renovation with Addition</option>
                                        <option value="home-extensions">Home Extensions</option>
                                        <option value="commercial-renovation">Commercial Renovation</option>
                                        <option value="condo-renovations">Condo Renovations</option>
                                        <option value="flooring">Carpet and Flooring Service</option>
                                        <option value="multi-family">Multi-Family & Apartments</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Brief Project Description</label>
                                    <textarea id="message" rows="5" placeholder="Tell us about what you're looking to achieve..."></textarea>
                                </div>

                                <Button type="submit" variant="primary" className="btn-submit">
                                    Submit Request
                                </Button>
                                <p className="form-subtext">We typically respond within 24 business hours.</p>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
