import React from 'react'
import { Row, Col, Navbar } from 'react-bootstrap';
import './Footer.css';
import footerData from './footer_data.json'
import FooterColumns from './FooterColumns'

function Footer() {

    return (
        <div>
            <Navbar bg="dark">
                <Row bg="dark" className="footerContainer">
                    {Object.keys(footerData).map((key, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Col sm>
                                    <h4>{key}</h4>
                                    <FooterColumns key={index} value={footerData[key]} />
                                </Col>
                            </React.Fragment>)
                    }
                    )}
                </Row>
            </Navbar>
        </div>
    )
}

export default Footer;
