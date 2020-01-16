import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import logo from '../../logo.png'
import './SearchBar.css';

function SearchBar() {


    const [searchValue, setSearchValue] = useState("Search for Movies, Events, Plays, Sports and Activities");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        window.location = `/search/${searchValue}`;
    }

    return (
        < div className="primaryheader" >
            <Navbar bg="dark" variant="dark" className="headerinner">
                <Navbar.Brand href="#home">
                    <img src={logo} alt="img" style={{ width: '155px', height: '40px' }}></img>
                </Navbar.Brand>
                <Form inline onSubmit={(e) => { handleSearchSubmit(e) }}>
                    <FormControl type="text" onChange={(e) => { handleSearchInputChanges(e) }} placeholder={searchValue} className="mr-sm-2" style={{ width: '550px' }} />
                    <Button type="submit" variant="outline-info">Search</Button>
                </Form>
                <Nav className="mr-auto right">
                    <Nav.Link href="#home">Hyderabad</Nav.Link>
                    <Nav.Link href="#features">English</Nav.Link>
                    <Button variant="outline-info">Sign In</Button>
                </Nav>
            </Navbar>
        </div >
    )
}

export default SearchBar