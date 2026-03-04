import { Link } from 'react-router-dom';
import '../styles/ServiceCard.css';

const ServiceCard = ({ icon: Icon, title, description, linkTo }) => {
    return (
        <div className="service-card">
            <div className="service-icon-wrapper">
                {Icon && <Icon size={36} strokeWidth={1.5} />}
            </div>
            <h3 className="service-title">{title}</h3>
            <p className="service-desc">{description}</p>
            <Link to={linkTo} className="service-link">
                Learn More &rarr;
            </Link>
        </div>
    );
};

export default ServiceCard;
