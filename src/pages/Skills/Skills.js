import './skills.css'
import { data } from '../../data';

const Skills = () => {
    const { skills } = data;
    
    // Group skills by category
    const categories = {
        "Programming Languages": skills.filter(skill => skill.category === "Programming Languages"),
        "Frameworks & Libraries": skills.filter(skill => skill.category === "Frameworks & Libraries"),
        "Cloud & DevOps": skills.filter(skill => skill.category === "Cloud & DevOps"),
        "Developer Tools": skills.filter(skill => skill.category === "Developer Tools")
    };

    return (
        <>  
            <div className="skills-container" id="tech-section">
                <h1 className="text-success text-center">Technologies</h1><hr />
                
                {Object.entries(categories).map(([categoryName, categorySkills]) => (
                    <div className="skills-category-section" key={categoryName}>
                        <h2 className="skills-category-title">{categoryName}</h2>
                        <div className="skills-tech-stack">
                            {categorySkills.map(tech => (
                                <DisplayTech key={tech.title} title={tech.title} icon={tech.icon} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

const DisplayTech = ({ title, icon }) => {
    return <div className="skills-tech-div">
        <img src={icon} alt={title} width="35vw"/>
        <p>{title}</p>
    </div>
}

export default Skills;