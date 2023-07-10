import React, { useState } from 'react';
import Modal from 'react-modal';
import { useProjects } from '../api/useApi';
import styles from '../styles/ProjectModal.module.scss'; // Import the associated CSS file

Modal.setAppElement('#root');  // Needed to hide warning for accessibility reasons

const ProjectModal = () => {
    const { projects, submitData, updateProject, deleteProject } = useProjects();
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showProjects, setShowProjects] = useState(false);
    const [projectData, setProjectData] = useState({ name: '', description: '', linkURL: '', image: '' });
    const [projectId, setProjectId] = useState(null);
    const [imageUrl, setImageUrl] = useState();

    const [file, setFile] = useState(null); // Add this line


    const openModal = (id) => {
        if (id) {
            const project = projects.find((project) => project.id === id);
            if (project) {
                setProjectData(project);
                setProjectId(id);
            }
        }
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setProjectData({ name: '', description: '', linkURL: '', image: '' });
        setProjectId(null);
    };

    const handleSave = () => {
        if (projectId) {
            updateProject(projectId, projectData);
        } else {
            console.log(projectData,"handleSafe")
            submitData(projectData);
        }
        closeModal();
    };

    const handleDelete = () => {
        deleteProject(projectId);
        closeModal();
    };

    const toggleShowProjects = () => {
        setShowProjects(!showProjects);
    };

    const handleTest = async event => {
        console.log("click")
        const myFile = event.target.files[0];
        const formData = new FormData();
        formData.append('file', myFile);
        
        const response = await fetch('http://localhost:3000/nicolae/imageupload', { method: "post", body: formData})
        const responseJSON = await response.json();
        setImageUrl(responseJSON.url)
        console.log(responseJSON)
        setProjectData({...projectData,image: responseJSON.url})
        console.log(projectData)

    }

    return (
        <div className={styles.modalContainer}>
            {console.log(projectData)}
            <button className={styles.modalButton} onClick={() => openModal()}>Create New Project</button>
            <button className={styles.modalButton} onClick={toggleShowProjects}>Show Projects</button>
            <button onClick={handleTest} >test</button>

            {showProjects && projects.map(project => (
                <div key={project.id} className={styles.projectItem}>
                    <img src={project.image} alt={project.name} className={styles.projectImage} />
                    <div>{project.name}</div>
                    <button onClick={() => openModal(project.id)}>Edit</button>
                    <button onClick={() => deleteProject(project.id)}>Delete</button>
                </div>
            ))}


            <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className={styles.modal}>
                <input
                    type="text"
                    value={projectData.name}
                    onChange={e => setProjectData({ ...projectData, name: e.target.value })}
                    placeholder="Project Name"
                />
                <input
                    type="text"
                    value={projectData.description}
                    onChange={e => setProjectData({ ...projectData, description: e.target.value })}
                    placeholder="Project Description"
                />

                <input
                    type="text"
                    value={projectData.linkURL}
                    onChange={e => setProjectData({ ...projectData, linkURL: e.target.value })}
                    placeholder="Project Link URL"
                />
                <input type="file" onChange={handleTest} /> {/* Modify this line */}

                <button className={styles.modalButton} onClick={handleSave}>Save</button>
                {projectId && <button className={styles.modalButton} onClick={handleDelete}>Delete</button>}
                <button className={styles.modalButton} onClick={closeModal}>Cancel</button>
            </Modal>
        </div>
    );
};

export default ProjectModal;
