
const Project = (props) => {
    const { projects } = props;
    if (!projects || projects.length === 0) return <p>No projects, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Mes Projets</h2>
            {projects.map((project) => {
                return (
                    <li key={project.id} className='list'>
                        <span className='project-text'>{project.name} </span>
                        <span className='project-description'>{project.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default Project;