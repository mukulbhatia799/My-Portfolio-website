import './projectCard.css'

const ProjectCard = ({ project }) => {
    return <div className="bg-light project-card-div">
        <div className="project-thumbnail">
            <img src={project.img} alt={project.title} width="100%"/>
            <div className="buttons">
                <a href={project.live}>
                    <button className="btn btn-lg btn-secondary text-light">Live</button>
                </a>
                <a href={project.github}>
                    <button className="btn btn-lg btn-dark">Github</button>
                </a>
            </div>
        </div>

        <div className="">
            <div className="project-title">{project.title}</div>
            <div className="project-description">{project.desc}</div>
        </div>
        <div className="project-stack">
            {project.technologies.map(tech => <div className="tech">{tech}</div>)}
        </div>

    </div>
}

export default ProjectCard 