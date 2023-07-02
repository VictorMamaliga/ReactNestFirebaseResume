import { useEffect, useState } from "react";

const useProjects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const submitData = async (data, onSuccess, onError) => {
        try {
            const response = await fetch('http://localhost:3000/nicolae', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            console.log('Document written with ID: ', result.id);
            onSuccess && onSuccess();
        } catch (error) {
            console.error("Error adding document: ", error);
            onError && onError(error);
        }
    };


    useEffect(() => {
        fetch('http://localhost:3000/nicolae')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProjects(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return { projects, loading, error ,submitData};

    
};



export { useProjects };
