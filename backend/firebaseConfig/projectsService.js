//const db = require('./firebaseConfig'); 

// async function getAllProjects() {
//     const projectsCol = db.collection('projects');
//     const projectsSnapshot = await projectsCol.get();
//     const projectsList = projectsSnapshot.docs.map(doc => doc.data());

//     return projectsList;
// };

// async function submitData(data) {
//     const projectsCol = db.collection('projects');

//     try {
//         const docRef = await projectsCol.add(data);
//         console.log('Document written with ID: ', docRef.id);
//         return docRef.id;
//     } catch (error) {
//         console.error("Error adding document: ", error);
//         throw error;
//     }
// };

//module.exports = { getAllProjects, submitData };
