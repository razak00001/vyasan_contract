import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ProjectCard from '../components/ProjectCard';

const projects = [
    { id: 1, title: 'Modern Luxury Villa', category: 'Residential', image: '/home/featured_projects/luxury_villa_project_downtown_area_residential.webp' },
    { id: 2, title: 'Downtown Commercial Complex', category: 'Commercial', image: '/home/featured_projects/commercial_complex.webp' },
    { id: 3, title: 'Multi-Family Apartment Building', category: 'Multi-Family', image: '/home/featured_projects/apartment_building.webp' },
    { id: 4, title: 'Modern Open Concept Kitchen', category: 'Kitchens', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Luxury En-Suite Bath', category: 'Bathrooms', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Finished Walkout Basement', category: 'Basements', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' }
];

const filters = ['All', 'Residential', 'Commercial', 'Multi-Family', 'Kitchens', 'Bathrooms', 'Basements'];

const OurWork = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <div className="page-wrapper">
            <Helmet>
                <title>Project Gallery | Viyasan General Contracting</title>
                <meta name="description" content="View our portfolio of successful residential and commercial renovation projects in the GTA. See the quality and craftsmanship Viyasan General Contracting delivers." />
            </Helmet>

            {/* Page Header */}
            <div className="page-header">
                <div className="page-header-bg" style={{ backgroundImage: "url('/home/featured_projects/commercial_complex.webp')" }}></div>
                <div className="page-header-overlay"></div>
                <div className="container relative z-10 text-center">
                    <h1 className="text-5xl font-bold mb-4">Our Work</h1>
                    <p className="text-xl opacity-90">A showcase of our recent projects across the GTA.</p>
                </div>
            </div>

            <section className="section bg-white">
                <div className="container">
                    {/* Filters */}
                    <div className="project-filters">
                        {filters.map(filter => (
                            <button
                                key={filter}
                                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Grid */}
                    <div className="projects-grid mt-60">
                        {filteredProjects.map(proj => (
                            <ProjectCard
                                key={proj.id}
                                imageSrc={proj.image}
                                title={proj.title}
                                category={proj.category}
                                linkTo={`/contact`} /* Placeholder link */
                            />
                        ))}
                    </div>

                    {filteredProjects.length === 0 && (
                        <div className="text-center py-20 text-gray-500">
                            No projects found for this category yet.
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default OurWork;
