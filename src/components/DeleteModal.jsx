import { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../features/posts/postSlice";
import { Button, Modal } from "react-bootstrap";

export default function DeleteModal({ post }) {
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);


    const handleDeletePost = () => {
        handleClose();
        dispatch(deletePost(post));
    };

    return (
        <>
            <Button onClick={handleShow} variant="outline-danger">
                <i className="bi bi-trash"></i>
            </Button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        cancel
                    </Button>
                    <Button variant="danger" onClick={handleDeletePost}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
