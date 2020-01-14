import React from 'react';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './ModalLayer.css';
import ShowMovieTimingsDetails from './ShowMovieTimingDetails'

function ModalLayer(props) {
    return (
        <div>
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Show Details
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className="show-grid movie-details" xs={12} md={4}>
                                <Row>
                                    <img src={props.moviedetails.Poster} alt={props.moviedetails.Title} />
                                </Row>
                                <Row>
                                    <h6>{props.moviedetails.Title}</h6>
                                </Row>
                            </Col>
                            <Col xs={6} md={8}>
                                <ShowMovieTimingsDetails />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default ModalLayer;