import React, { useState } from 'react';
import { Card, CardDeck, Button, ButtonToolbar } from 'react-bootstrap';
import './MovieThubnail.css';
import ModalLayer from '../Modals/ModalLayer';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import loadingIndicator from '../../../src/ajax-loader.gif';
import defaultImg from '../../../src/default-img.jpg';

function MovieThubnails(props) {
    let { movieThubnails, searchedKey } = props
    const [modalShow, setModalShow] = useState(false);
    const [clickedIndex, setClickedIndex] = useState(0);


    return (
        <div>
            <CardDeck className="cardContainer">
                {
                    movieThubnails ? movieThubnails.map((item, index) => {


                        return (
                            < Card key={index}>
                                <Card.Img variant="top" src={item.Poster === 'N/A' ? defaultImg: item.Poster } />
                                <Card.Body className="censor">
                                    <span>{item.Title}</span><br></br>
                                    <span>U A | Action |English</span>
                                    < div className="book-tickets" >
                                        <ButtonToolbar>
                                            <Button variant="primary" onClick={() => { setModalShow(true); setClickedIndex(index) }}>BOOK TICKETS</Button>
                                        </ButtonToolbar>
                                    </div>
                                </ Card.Body >
                            </Card >

                        )
                            ;
                    }) : <img src={loadingIndicator} />
                }
            </CardDeck>
            {modalShow && <ModalLayer moviedetails={movieThubnails[clickedIndex]} show={modalShow} onHide={() => setModalShow(false)} />}
        </div >
    )
}




export default MovieThubnails

