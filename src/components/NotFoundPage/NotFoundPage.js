import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './NotFoundPage.css'

const NotFoundPage = (props) => {
    return (
        <div className='not_found_page'>
            <Jumbotron>
                <h1>We're Sorry!</h1>
                <p>
                    We couldn't find any content for <strong>{props.searchedKey}</strong>
                </p>
                <p>
                    <Button href="/" variant="primary">Return to Home Page</Button>
                </p>
            </Jumbotron>
        </div>
    );
}
export default NotFoundPage;