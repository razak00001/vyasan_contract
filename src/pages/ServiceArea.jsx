import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin } from 'lucide-react';
import Button from '../components/Button';
import '../styles/ServiceArea.css';

const cities = [
    'Toronto', 'Mississauga', 'Brampton', 'Vaughan', 'Richmond Hill',
    'Markham', 'Ajax', 'Pickering', 'Whitby', 'Oakville', 'Burlington'
];

const ServiceArea = () => {
    const [selectedCity, setSelectedCity] = useState(cities[0]);

    // Google Maps Embed URL for the selected city
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(selectedCity + ', ON')}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Service Area | GTA Renovation Contractor | Viyasan General Contracting</title>
                <meta name="description" content="Proudly serving Toronto and the entire Greater Toronto Area (GTA). Viyasan General Contracting provides expert renovation services to homeowners and businesses." />
            </Helmet>

            <div className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: "url('/home/featured_projects/service_area_bg.jpg')" }}></div>
                <div className="page-header-overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="page-title">Proudly Serving the Greater Toronto Area</h1>
                    <p className="page-subtitle">
                        Viyasan General Contracting is proud to provide our expert renovation and construction services to clients across the GTA. No matter where you are, our team is ready to bring your project to life.
                    </p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container">

                    <div className="service-area-grid">
                        <div>
                            <h2 className="section-title mb-6">Cities We Serve</h2>
                            <div className="cities-grid">
                                {cities.map((city, idx) => (
                                    <div
                                        key={idx}
                                        className={`city-item ${selectedCity === city ? 'active' : ''}`}
                                        onClick={() => setSelectedCity(city)}
                                    >
                                        <MapPin className="city-icon" size={24} />
                                        <span className="city-name">{city}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="local-expertise-box">
                                <h3>Local Expertise</h3>
                                <p>
                                    We understand the specific building codes and architectural styles popular across the GTA. Contact us for a consultation tailored specifically to your neighborhood's requirements.
                                </p>
                            </div>

                            <div className="mt-8">
                                <Button to="/contact" variant="primary">Schedule a Consultation</Button>
                            </div>
                        </div>

                        <div className="map-placeholder">
                            <iframe
                                title={`Google Maps - ${selectedCity}`}
                                src={mapSrc}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default ServiceArea;
