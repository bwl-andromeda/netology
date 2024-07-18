export default function ProjectList(props) {
    const { projects } = props;

    return (
        <main className="project-list">
            {projects.map((project, index) =>
                <img key={index} className="project-list-item" src={project.img} alt={project.description || ""} data-category={project.category} />
            )}
        </main>
    );
}