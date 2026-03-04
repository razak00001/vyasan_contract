import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Button from '../components/Button';
import {
    Home,
    Building,
    ArrowDownToLine,
    Droplet,
    Hammer,
    Paintbrush,
    Wind
} from 'lucide-react';
import '../styles/ServicePage.css';

const serviceData = {
    'home-renovation': {
        title: 'Home Renovation (Full Interior)',
        metaTitle: "Full Interior Home Renovation | Viyasan General Contracting",
        metaDesc: "Transform your home with Viyasan's expert full interior residential renovation services.",
        intro: "Complete interior remodeling to transform your living spaces, tailored to your lifestyle and comfort.",
        heroImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Our Home Renovation Services Include:',
        subservices: [
            { name: 'Complete Gut & Remodel', icon: Home },
            { name: 'Custom Kitchens', icon: Droplet },
            { name: 'Luxury Bathrooms', icon: Droplet },
            { name: 'Open Concept Layouts', icon: Hammer }
        ]
    },
    'renovation-addition': {
        title: 'Renovation with Addition',
        metaTitle: "Renovation with Addition | Viyasan General Contracting",
        metaDesc: "Seamlessly expand and upgrade your home with custom additions.",
        intro: "Seamlessly expand and upgrade your home with custom additions that match your existing design.",
        heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Addition Options:',
        subservices: [
            { name: 'Living Room Expansions', icon: Home },
            { name: 'In-Law Suites', icon: Building },
            { name: 'Sunrooms', icon: Wind },
            { name: 'Kitchen Bump-Outs', icon: Hammer }
        ]
    },
    'home-extensions': {
        title: 'Home Extensions',
        metaTitle: "Home Extensions | Viyasan General Contracting",
        metaDesc: "Add valuable square footage to your property.",
        intro: "Add valuable square footage to your property with built-out or built-up story extensions.",
        heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'We Specialize In:',
        subservices: [
            { name: 'Second Story Additions', icon: ArrowDownToLine },
            { name: 'Rear Extensions', icon: Home },
            { name: 'Garage Conversions', icon: Hammer },
            { name: 'Side Extensions', icon: Building }
        ]
    },
    'commercial-renovation': {
        title: 'Commercial Renovation',
        metaTitle: "Commercial Renovation | Viyasan General Contracting",
        metaDesc: "Expert commercial build-outs and renovations.",
        intro: "Create an inspiring and functional environment for your business. We deliver on time and on budget.",
        heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Commercial Services:',
        subservices: [
            { name: 'Offices & Retail Spaces', icon: Building },
            { name: 'Restaurants & Cafes', icon: Home },
            { name: 'Spas & Salons', icon: Droplet },
            { name: 'Medical & Dental Offices', icon: Building }
        ]
    },
    'condo-renovations': {
        title: 'Condo Renovations',
        metaTitle: "Condo Renovations | Viyasan General Contracting",
        metaDesc: "Specialized condo remodeling navigating strata rules.",
        intro: "Specialized condo remodeling navigating condo board rules while maximizing your space and luxury.",
        heroImage: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Condo Renovation Services:',
        subservices: [
            { name: 'Kitchen & Bathroom Updates', icon: Home },
            { name: 'Flooring Changes', icon: Hammer },
            { name: 'Open Concept Conversions', icon: Building },
            { name: 'Custom Millwork', icon: Paintbrush }
        ]
    },
    'flooring': {
        title: 'Carpet and Flooring Service',
        metaTitle: "Carpet and Flooring Service | Viyasan General Contracting",
        metaDesc: "High-quality hardwood, laminate, tile, and carpet installation.",
        intro: "High-quality hardwood, laminate, tile, and carpet installation for a flawless finish.",
        heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Flooring Options:',
        subservices: [
            { name: 'Hardwood & Engineered Wood', icon: Hammer },
            { name: 'Laminate & Vinyl', icon: Paintbrush },
            { name: 'Ceramic & Porcelain Tile', icon: Home },
            { name: 'Plush & Commercial Carpeting', icon: Building }
        ]
    },
    'multi-family': {
        title: 'Multi-Family and Apartment Renovations',
        metaTitle: "Multi-Family and Apartment Renovations | Viyasan",
        metaDesc: "Large-scale renovation solutions for multi-family units.",
        intro: "Large-scale renovation solutions for apartment buildings and multi-family units to increase property value.",
        heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
        sublistHeading: 'Focus Areas:',
        subservices: [
            { name: 'Tenant Turnovers', icon: ArrowDownToLine },
            { name: 'Common Area Upgrades', icon: Building },
            { name: 'Exterior Facelifts', icon: Paintbrush },
            { name: 'Code Compliance Updates', icon: Hammer }
        ]
    }
};

const ServicePage = () => {
    const { slug } = useParams();
    const data = serviceData[slug];

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="service-page">
            <Helmet>
                <title>{data.metaTitle}</title>
                <meta name="description" content={data.metaDesc} />
            </Helmet>

            {/* Modern Animated Hero */}
            <section className="service-hero">
                <div className="service-hero-bg" style={{ backgroundImage: `url(${data.heroImage})` }}></div>
                <div className="service-hero-overlay"></div>
                <div className="container service-hero-content text-center">
                    <h1>{data.title}</h1>
                </div>
            </section>

            <section className="section bg-white">
                <div className="container">
                    <p className="service-intro-text text-center">{data.intro}</p>

                    <h2 className="section-title text-center mt-60">{data.sublistHeading}</h2>

                    <div className="subservices-grid">
                        {data.subservices.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className="subservice-item">
                                    <div className="subservice-icon"><Icon size={28} /></div>
                                    <h3 className="subservice-title">{item.name}</h3>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="section service-process">
                <div className="container text-center">
                    <h2 className="section-title">Our Renovation Process</h2>
                    <div className="process-steps">
                        <div className="process-step">
                            <div className="step-num">1</div>
                            <h4>Consultation</h4>
                        </div>
                        <div className="process-step">
                            <div className="step-num">2</div>
                            <h4>Design & Planning</h4>
                        </div>
                        <div className="process-step">
                            <div className="step-num">3</div>
                            <h4>Construction</h4>
                        </div>
                        <div className="process-step">
                            <div className="step-num">4</div>
                            <h4>Final Walkthrough</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section cta-section text-center">
                <div className="container cta-container">
                    <h2>Ready to renovate?</h2>
                    <p>Contact us for a free in-home consultation.</p>
                    <Button to="/contact" variant="accent" className="mt-30">Get Your Free Estimate</Button>
                </div>
            </section>

        </div>
    );
};

export default ServicePage;
