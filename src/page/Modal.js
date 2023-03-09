import React from 'react'
import {Modal, Button, Form} from 'react-bootstrap'

const PostWrite = (props) => {
    const {show, setShow} = props;
    return ( 
    <div>
        <Modal
            show={show}
            //onHide={setShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>몇명 뽑을건지</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                   
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={setShow(false)}>Close</Button>
            </Modal.Footer>
            </Modal>
    </div>
    )
}

export default PostWrite