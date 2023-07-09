import React, { useState } from 'react';
import Modal from 'react-modal';
import { useProjects } from '../api/useApi';
import styles from '../styles/ProjectModal.module.scss'; // Import the associated CSS file

Modal.setAppElement('#root');  // Needed to hide warning for accessibility reasons

const ProjectModal = () => {
  const { projects, submitData,  updateProject, deleteProject } = useProjects();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [projectData, setProjectData] = useState({ name: '', description: '', linkURL: '',image: '' });
  const [projectId, setProjectId] = useState(null);

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
    setProjectData({ name: '', description: '', linkURL: '' });
    setProjectId(null);
  };

  const handleSave = () => {
    if (projectId) {
      updateProject(projectId, projectData);
    } else {
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

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalButton} onClick={() => openModal()}>Create New Project</button>
      <button className={styles.modalButton} onClick={toggleShowProjects}>Show Projects</button>

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
        <input type="file" onChange={e => setProjectData({ ...projectData, imageFile: e.target.files[0] })} />

        <input 
          type="text"
          value={projectData.linkURL}
          onChange={e => setProjectData({ ...projectData, linkURL: e.target.value })}
          placeholder="Project Link URL"
        />
        <button className={styles.modalButton} onClick={handleSave}>Save</button>
        {projectId && <button className={styles.modalButton} onClick={handleDelete}>Delete</button>}
        <button className={styles.modalButton} onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ProjectModal;
