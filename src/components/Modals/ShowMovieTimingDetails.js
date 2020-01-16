import React from 'react';
import { connect } from 'react-redux';
import movieTimingData from '../../data/movie_timings_data.json';
import { Row, Col, ListGroup } from 'react-bootstrap';
import './ShowMovieTimingDetails.css';
import { selectedTimingDetails } from '../../action';

function ShowDetails(props) {
    let selectedTd;

    function highlight(td) {
        if (selectedTd) {
            selectedTd.classList.remove('active');
        }
        selectedTd = td;
        selectedTd.classList.add('active'); // highlight the new td
        console.log(selectedTd.classList)
        console.log(selectedTd.value)
    }
    const handleHourClick = e => {
        let target = e.target;
        let timings = [target.value, target.innerHTML]
        props.selectedTimingDetails(timings)
        highlight(target)
    }
    return (
        <div>
            {Object.keys(movieTimingData).map((theaterName, index) => {

                return (<Row className="show-grid movie-timings">
                    <Col>
                        <div>
                            <h6 className="theatre_name" key={index}>{theaterName}</h6 >
                            <ListGroup horizontal className="movie_timings" name={theaterName} onClick={(e) => { handleHourClick(e); }}>
                                {movieTimingData[theaterName].map((timing, index) => {
                                    return (
                                        <ListGroup.Item action value={theaterName}>{timing}</ListGroup.Item>
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

const mapDispatchToProps = dispatch => ({
    selectedTimingDetails: timingDetails => dispatch(selectedTimingDetails(timingDetails))
});

export default connect(null, mapDispatchToProps)(ShowDetails)