import React, { useState } from 'react';
import Modal from 'react-modal';
import { useForm } from 'react-hook-form';
import { submitData } from '../../../backend/firebaseConfig';

Modal.setAppElement('#root');

const AddElementModal = () => {
    const { register, handleSubmit, reset } = useForm();
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const onSuccess = () => {
        reset();
        setModalIsOpen(false);
    };

    const onSubmit = (data) => {
        submitData(data, onSuccess).catch(error => console.error("Error adding document: ", error));
    };


    // Styles for the modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            // More styles here...
        },
    };

    return (
        <>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                style={customStyles} // Apply the styles here
            >
                <h2>Add New Element</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("imageURL")} placeholder="Image URL" />
                    <input {...register("description")} placeholder="Description" />
                    <input {...register("linkURL")} placeholder="Link URL" />
                    <input {...register("name")} placeholder="Name" />
                    <input type="submit" />
                </form>
                <button onClick={() => setModalIsOpen(false)}>Close</button>
            </Modal>
        </>
    );

}
export default AddElementModal;
