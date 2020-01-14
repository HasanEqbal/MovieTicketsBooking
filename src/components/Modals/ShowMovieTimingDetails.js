import React from 'react';
import movieTimingData from '../../data/movie_timings_data.json';
import { Row, Col, ListGroup } from 'react-bootstrap';
import './ShowMovieTimingDetails.css';

export default function ShowDetails() {
    const handleHourClick = e => {
        e.target.classList.toggle('active');
    }
    return (
        <div>
            {Object.keys(movieTimingData).map((theaterName, index) => {

                return (<Row className="show-grid movie-timings">
                    <Col>
                        <div>
                            <h6 className="theatre_name" key={index}>{theaterName}</h6 >
                            <ListGroup className="movie_timings" horizontal>
                                {movieTimingData[theaterName].map((timings, index) => {
                                    return (
                                        <ListGroup.Item action onClick={(e) => handleHourClick(e)}>{timings}</ListGroup.Item>
                                    )
                                })}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>)
            })}
        </div>
    )
}
