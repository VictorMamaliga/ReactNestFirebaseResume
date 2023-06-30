//import myJson from './key.json'
import { useEffect, useState } from "react";

import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyCbE-89DmPr7RzsIxKBwn75abbjqznMO9c",
    authDomain: "victor-resume-63b88.firebaseapp.com",
    projectId: "victor-resume-63b88",
    storageBucket: "victor-resume-63b88.appspot.com",
    messagingSenderId: "794406126769",
    appId: "1:794406126769:web:5fd8c05aafcccd13c5ce90"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const useProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const citiesCol = collection(db, 'projects');
      const citySnapshot = await getDocs(citiesCol);
      const cityList = citySnapshot.docs.map(doc => doc.data());
      setProjects(cityList);
    }

    fetchProjects();
  }, []);

  return projects;
};


// const db = getFirestore(app);


// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries



// // Initialize Firebase

// const db = getFirestore(app);
// const [projects, setProjects] = useState([]);

//     useEffect(() => {
//         const fetchProjects = async () => {
//             const citiesCol = collection(db, 'projects');
//             const citySnapshot = await getDocs(citiesCol);
//             const cityList = citySnapshot.docs.map(doc => doc.data());
//             setProjects(cityList);
//         }

//         fetchProjects();
//     }, []);
    
// export {projects};

// // Get a list of cities from your database

// const projectsCol = collection(db, 'projects');

// getDocs(projectsCol)
//     .then((snapshot) => {
//         console.log(snapshot.docs)
//     })



// // const cityList = citySnapshot.docs.map(doc => doc.data());
// // return cityList;



// import { initializeApp } from '../../../backend/node_modules/firebase/app';
// import { getFirestore, collection, getDocs } from '../../../backend/node_modules/firebase/firestore';
// import { useState, useEffect } from 'react';

// const firebaseConfig = {
//   apiKey: "AIzaSyCbE-89DmPr7RzsIxKBwn75abbjqznMO9c",
//   authDomain: "victor-resume-63b88.firebaseapp.com",
//   projectId: "victor-resume-63b88",
//   storageBucket: "victor-resume-63b88.appspot.com",
//   messagingSenderId: "794406126769",
//   appId: "1:794406126769:web:5fd8c05aafcccd13c5ce90"
// };

// const app = initializeApp(firebaseConfig);