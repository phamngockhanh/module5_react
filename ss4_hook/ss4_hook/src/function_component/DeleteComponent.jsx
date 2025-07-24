import {Button, Modal} from "react-bootstrap";
import {deleteStudent, listAll} from "../service/student";
import React from "react";
const DeleteComponent =({studentDelete, isShowModal, handleCloseModal}) =>{
    const handleDelete = () =>{
        deleteStudent(studentDelete.id);
        console.log(listAll);
        handleCloseModal();
    }
return <>
        {console.log("------delete modal-------------")}
        <Modal show={isShowModal} onHide={handleCloseModal}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có muốn xoá sinh viên {studentDelete.name}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseModal}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default React.memo(DeleteComponent);