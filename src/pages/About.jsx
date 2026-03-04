import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>About Viyasan General Contracting | GTA Renovation Experts</title>
                <meta name="description" content="Learn about the team behind Viyasan General Contracting. We are dedicated to quality, integrity, and customer satisfaction on every renovation project." />
            </Helmet>

            <div className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: "url('/home/featured_projects/about_bg.jpg')" }}></div>
                <div className="page-header-overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">About Us</h1>
                    <p className="text-xl opacity-90">Dedicated to Quality, Integrity, and Craftsmanship.</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2 className="section-title">Our Story</h2>
                            <p className="about-text">
                                Viyasan General Contracting was founded on the belief that a home should not just be built, but carefully crafted. Based in the Greater Toronto Area, we've successfully managed hundreds of residential and commercial renovation projects, earning a reputation for reliability and impeccable quality.
                            </p>
                            <p className="about-text">
                                Our approach is deeply rooted in transparency. From the initial consultation to the final walkthrough, we ensure our clients are informed and confident every step of the way. We manage every detail—design, permits, construction, and finishing—so you don't have to worry about a thing.
                            </p>

                            <h3 className="core-values-title">Our Core Values</h3>
                            <ul className="values-list">
                                <li><CheckCircle className="value-icon" /> Uncompromising Quality & Workmanship</li>
                                <li><CheckCircle className="value-icon" /> Transparent & Honest Communication</li>
                                <li><CheckCircle className="value-icon" /> Strict Adherence to Timelines & Budgets</li>
                                <li><CheckCircle className="value-icon" /> Total Customer Satisfaction</li>
                            </ul>
                        </div>
                        <div className="about-image-wrapper">
                            <img
                                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                                alt="Contractor at work"
                                className="about-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
