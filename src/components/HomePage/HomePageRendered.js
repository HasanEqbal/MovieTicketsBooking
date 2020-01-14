import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Card, CardDeck } from 'react-bootstrap';
import Carosuel from '../../Carosuel/Carosuel';
import './Home.css'

export default function HomePageRendered(props) {
    let {newMovies} = props
    return (
        <React.Fragment>
            <Carosuel />
            <Container>
                <Navbar expand="lg" variant="light" bg="light">
                    <Navbar.Brand className="popular-listing popularmovies" href="#">Movies</Navbar.Brand>
                    <div className="justifycontentend">
                        <Link to="/viewall">ViewAll</Link>
                    </div>
                </Navbar>
            </Container>
            <CardDeck className="cardContainer">
                {
                    newMovies ? newMovies.filter((item, index) => index < 4).map((item, index) => {
                        return (
                            <Card key={index}>
                                <Card.Img variant="top" src={item.Poster} />
                                <Card.Body className="censor">
                                    <span>{item.Title}</span><br></br>
                                    <span>UA | Action |English</span>
                                </Card.Body>
                            </Card>

                        )
                            ;
                    }) : 'no action'
                }
            </CardDeck>
        </React.Fragment >
    )
}
