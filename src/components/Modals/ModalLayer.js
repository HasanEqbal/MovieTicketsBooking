import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Modal, Container, Row, Col, Button } from 'react-bootstrap';
import './ModalLayer.css';
import ShowMovieTimingsDetails from './ShowMovieTimingDetails';
import { selectedMovieDetails } from '../../action';


function ModalLayer(props) {
    console.log(props)
    return (
        <div className="shows-display">
            <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Show Details
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col className="show-grid movie-details" xs={9} md={6}>
                                <Row>
                                    <img src={props.moviedetails.Poster} alt={props.moviedetails.Title} />
                                </Row>
                                <Row>
                                    <h6>{props.moviedetails.Title}</h6>
                                </Row>
                            </Col>
                            <Col xs={9} md={6}>
                                <ShowMovieTimingsDetails />
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    {/*  <Button href={`/checkout`} onClick={props.onHide}>Checkout</Button> */}
                    <Link to={`/checkout`} activeClassName="active" onClick={props.onHide}>Checkout</Link>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


const mapStateToProps = (state) => ({ state });
export default connect(mapStateToProps, null)(ModalLayer)
