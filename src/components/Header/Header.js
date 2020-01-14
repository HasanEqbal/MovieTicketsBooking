import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Header.css';
import headerData from './header_data.json';
import SearchBarRenderer from '../SearchBar/SearchBarRenderer'

function Header() {
    return (
        <div>
            <SearchBarRenderer />
            <Navbar bg="dark">
                <Navbar.Brand href="#home">
                    {headerData.map((menu, index) => {
                        let left
                        ["Corporates", "Offers", "Gift Cards"].includes(menu) ? left = "primarymenu leftnav" : left = "primarymenu";
                        return (
                            <span className={left} key={index}>{menu}</span>
                        )
                    })}
                </Navbar.Brand>
            </Navbar>
        </div>
    )
}

export default Header;


