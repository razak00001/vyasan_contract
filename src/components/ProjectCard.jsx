import { Link } from 'react-router-dom';
import '../styles/ProjectCard.css';

const ProjectCard = ({ imageSrc, title, category, linkTo = '/our-work' }) => {
    return (
        <div className="project-card">
            <img src={imageSrc} alt={title} className="project-img" loading="lazy" />
            <div className="project-overlay">
                <div className="project-info">
                    <span className="project-category">{category}</span>
                    <h3 className="project-title">{title}</h3>
                    <Link to={linkTo} className="project-link">View Project</Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
