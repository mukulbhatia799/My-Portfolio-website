import { data } from '../../data'
import './project.css'
import ProjectCard from '../../components/ProjectCard/ProjectCard'

const Project = () => {
    const { projects } = data;

    return (
        <div className="project-outer-div">
            <h1 className="text-success text-center">Projects</h1><hr />
            <div className="project-inner-div overflow-auto my-5">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project}/>
                ))}
            </div>
        </div>
    )
}

export default Project