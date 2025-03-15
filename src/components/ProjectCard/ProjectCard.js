import React, { useState } from "react";
import "./projectCard.css";

const ProjectCard = ({ project }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Make sure to use the correct image paths
    const projectImages = project.images || [project.img];

    const openModal = () => {
        setCurrentImageIndex(0); // Start with the first image
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const nextImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === projectImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setCurrentImageIndex((prevIndex) => 
            prevIndex === 0 ? projectImages.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="bg-light project-card-div">
            <div className="project-thumbnail">
                <img 
                    src={project.img} 
                    alt={project.title} 
                    onClick={openModal}
                />
                <div className="buttons">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-lg btn-secondary text-light">Live</button>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-lg btn-dark">Github</button>
                    </a>
                </div>
            </div>

            <div className="">
                <div className="project-title">{project.title}</div>
                <div className="project-description">{project.desc}</div>
            </div>

            <div className="project-stack">
                {project.technologies.map((tech, index) => (
                    <div className="tech" key={index}>{tech}</div>
                ))}
            </div>

            {/* Image Modal with Slider */}
            {modalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close" onClick={closeModal}>&times;</span>
                    
                    <div className="modal-slider-container" onClick={(e) => e.stopPropagation()}>
                        {projectImages.length > 1 && (
                            <button className="slider-nav prev" onClick={prevImage}>&#10094;</button>
                        )}
                        
                        <img 
                            className="modal-content" 
                            src={projectImages[currentImageIndex]} 
                            alt={`${project.title} - Image ${currentImageIndex + 1}`} 
                        />
                        
                        {projectImages.length > 1 && (
                            <button className="slider-nav next" onClick={nextImage}>&#10095;</button>
                        )}
                    </div>
                    
                    {projectImages.length > 1 && (
                        <div className="image-counter">
                            {currentImageIndex + 1} / {projectImages.length}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;