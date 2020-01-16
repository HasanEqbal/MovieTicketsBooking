import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Container, Card } from 'react-bootstrap';
import './Checkout.css';
import Payment from './Payment';

function Checkout(props) {
    let { selectedMovie, selectedTime } = props.state;
    console.log(selectedTime)
    return (
        <React.Fragment>
            <Container className="checkout">
                <Row>
                    <Col className="chckout-col">
                        <Card style={{ width: '25rem', height: '40rem', margin: '10px' }}>
                            <Card.Img variant="top" src={selectedMovie.Poster} />
                            <Card.Body>
                                <Card.Title>{selectedMovie.Title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="chckout-col">
                        <Card style={{ width: '23rem', height: '16rem', margin: '10px' }}>
                            <Card.Body>
                                <Card.Title className="order-summary">Booking Summary</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted tickcat">{selectedMovie.Title}</Card.Subtitle>
                                <Card.Subtitle className="mb-2 text-muted tickcat">{selectedTime.timingDetails[0]}
                                    <span className="amount">$ 14.00</span>
                                </Card.Subtitle>
                                <Card.Text className="screen-details">
                                    {selectedTime.timingDetails[1]} SCREEN-01
                                </Card.Text>
                                <span className="txt_brkp">Internet handling fees</span>
                                <span className="amount tickcat">$ 02.00</span>
                                <div className="_total-section">
                                    <span>Sub total</span>
                                    <span className="amount tickcat">$ 16.00</span>
                                </div>
                                <div className="summarywrap">
                                    <span>Amount Payable</span>
                                    <span className="amount tickcat">$ 16.00</span>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Payment />
            </Container>
        </React.Fragment>
    )
}

const mapStateToProps = (state) => ({ state });


export default connect(mapStateToProps, null)(Checkout)