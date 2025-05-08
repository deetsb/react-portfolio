import './project.css'


function Project({ project }) {
    return (
        <div className="project">
            <h2>{project.title}</h2>
            <img src={project.image} alt={project.title} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    );
}

export default Project;