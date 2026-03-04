import { Helmet } from 'react-helmet-async';
import { Home as HomeIcon, Building, ArrowDownToLine, Droplet, CheckCircle } from 'lucide-react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import '../styles/Home.css';

const HomePage = () => {
    const services = [
        {
            title: 'Home Renovation (Full Interior)',
            desc: 'Complete interior remodeling to transform your living spaces, tailored to your lifestyle and comfort.',
            icon: HomeIcon,
            link: '/services/home-renovation'
        },
        {
            title: 'Renovation with Addition',
            desc: 'Seamlessly expand and upgrade your home with custom additions that match your existing design.',
            icon: ArrowDownToLine,
            link: '/services/renovation-addition'
        },
        {
            title: 'Home Extensions',
            desc: 'Add valuable square footage to your property with built-out or built-up story extensions.',
            icon: Building,
            link: '/services/home-extensions'
        },
        {
            title: 'Commercial Renovation',
            desc: 'Expert commercial build-outs and renovations to make your business space functional and stunning.',
            icon: Building,
            link: '/services/commercial-renovation'
        },
        {
            title: 'Condo Renovations',
            desc: 'Specialized condo remodeling navigating strata rules while maximizing your space and luxury.',
            icon: HomeIcon,
            link: '/services/condo-renovations'
        },
        {
            title: 'Carpet and Flooring Service',
            desc: 'High-quality hardwood, laminate, tile, and carpet installation for a flawless finish.',
            icon: Droplet,
            link: '/services/flooring'
        },
        {
            title: 'Multi-Family and Apartment Renovations',
            desc: 'Large-scale renovation solutions for apartment buildings and multi-family units to increase property value.',
            icon: Building,
            link: '/services/multi-family'
        }
    ];

    const projects = [
        {
            title: 'Modern Luxury Villa',
            category: 'Residential',
            image: '/home/featured_projects/luxury_villa_project_downtown_area_residential.webp',
            link: '/our-work'
        },
        {
            title: 'Downtown Commercial Complex',
            category: 'Commercial',
            image: '/home/featured_projects/commercial_complex.webp',
            link: '/our-work'
        },
        {
            title: 'Multi-Family Apartment Building',
            category: 'Multi-Family',
            image: '/home/featured_projects/apartment_building.webp',
            link: '/our-work'
        }
    ];

    return (
        <div className="home-page">
            <Helmet>
                <title>Viyasan General Contracting | Toronto's Trusted Renovation Experts</title>
            </Helmet>

            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg" style={{ backgroundImage: "url('/home/featured_projects/apartment_building.webp')" }}></div>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1>Design. Build. Contracting.</h1>
                    <h2>For all your Commercial & Residential Renovation and Construction Services.</h2>
                    <p className="hero-tagline">
                        WE SPECIALIZE IN: Home Renovation (Full Interior) | Renovation with Addition | Home Extensions | Commercial Renovation | Condo Renovations | Carpet and Flooring Service | Multi-Family and Apartment Renovations
                    </p>
                    <div className="hero-cta">
                        <Button to="/contact" variant="primary">Get a Free Consultation</Button>
                        <Button to="/our-work" variant="secondary" className="btn-hero-secondary">View Our Work</Button>
                    </div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="section intro-section">
                <div className="container text-center">
                    <h2>Welcome to Viyasan General Contracting</h2>
                    <p className="intro-text">
                        Viyasan General Contracting is a trusted, full-service construction and renovation company serving the Greater Toronto Area. We bring precision, care, and expertise to every project, from custom kitchens to complete commercial build-outs.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="section services-section">
                <div className="container">
                    <h2 className="section-title text-center">Our Core Services</h2>
                    <div className="services-grid">
                        {services.map((svc, idx) => (
                            <ServiceCard key={idx} icon={svc.icon} title={svc.title} description={svc.desc} linkTo={svc.link} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="section projects-section">
                <div className="container">
                    <h2 className="section-title text-center">Recent Projects</h2>
                    <div className="projects-grid">
                        {projects.map((proj, idx) => (
                            <ProjectCard key={idx} imageSrc={proj.image} title={proj.title} category={proj.category} linkTo={proj.link} />
                        ))}
                    </div>
                    <div className="text-center mt-40">
                        <Button to="/our-work" variant="secondary">View Full Gallery</Button>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section why-us-section">
                <div className="container">
                    <div className="why-us-grid">
                        <div className="why-us-content">
                            <h2>Why Work With Us?</h2>
                            <ul className="why-us-list">
                                <li><CheckCircle className="check-icon" /> Experienced & Skilled Team</li>
                                <li><CheckCircle className="check-icon" /> Full-Service: From Design to Final Walkthrough</li>
                                <li><CheckCircle className="check-icon" /> Specialized in Fire, Flood, & Mold Remediation</li>
                                <li><CheckCircle className="check-icon" /> Free Consultations & Transparent Estimates</li>
                            </ul>
                            <Button to="/contact" variant="accent" className="mt-30">Get Started Today</Button>
                        </div>
                        <div className="why-us-image">
                            <img src="https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&w=800&q=80" alt="Construction planning" className="rounded-image" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;
