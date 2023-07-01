import { useProjects } from "../../../backend/firebaseConfig";
import styles from '../styles/Projects.module.scss'

const Projects = () => {


    const projects = useProjects();

    return (
        <section id="projects" className={styles.projectsContainer}>
            <div className={styles.container}>
                <h2>Projects</h2>
                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <div className={styles.projectItem} key={index}>
                            <img src={project.image} alt={`project ${index + 1}`} />
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <a href={project.linkURL} target='blank' className={styles.btn}>Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};



export default Projects;
