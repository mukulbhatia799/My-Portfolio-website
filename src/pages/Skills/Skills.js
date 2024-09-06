import './skills.css'
import { data } from '../../data';

const Skills = () => {
    const { skills } = data;
    return (
        <>  
            <div className="skills-container" id="tech-section">
                <h1 className="text-success text-center">Technologies</h1><hr />
                <div className="skills-tech-stack mt-5">
                    {skills.map(tech => {
                        return <DisplayTech key={tech.title} title={tech.title} icon={tech.icon} />
                    })}
                </div>
            </div>
        </>
    )
}

const DisplayTech = ({ title, icon }) => {
    return <div className="skills-tech-div">
        <img src={icon} alt={title} width="50vw"/>
        <h1>{title}</h1>
    </div>
}

export default Skills;