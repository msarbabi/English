import React, { useContext, useState } from "react";

import ExamContext from "../Context/examContext";
import { Link } from "react-router-dom";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const SignUp = () => {
    const context = useContext(ExamContext);

    const [name, setName] = useState(" ");
    const [disable, setDisable] = useState(true);

    const [open, setOpen] = useState(false);
    const [focusAfterClose] = useState(true);

    const toggle = () => setOpen(!open);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.length > 3) {
            context.name = name;
            localStorage.setItem("englishCourseWithMohamad", name);
            setDisable(false);
        } else {
            setOpen(true);
        }
    };

    return (
        <div className='container body'>
            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='name'>Your Name:</label>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Enter Name'
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type='submit' className='btn btn-light btn-sm'>
                    Save
                </button>
            </form>
            {disable ? null : (
                <Link to={`/books`} className='start-link'>
                    start
                </Link>
            )}
            <Modal returnFocusAfterClose={focusAfterClose} isOpen={open}>
                <ModalHeader toggle={toggle}>Error</ModalHeader>
                <ModalBody>Please enter currect name.</ModalBody>
            </Modal>
        </div>
    );
};

export default SignUp;
