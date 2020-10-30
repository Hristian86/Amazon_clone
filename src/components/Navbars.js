import React from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbars.css';
import Searchbar from './Header/Searchbar';
import HeaderOptions from './Header/HearderOptions';

const Navbars = () => {

    return <Navbar bg="light" className="header" expand="lg">

        <Link
            to="/">
            <img
                className="header__logo"
                src="/images/amazon_logo.png"
            />
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white" />
        <Navbar.Collapse id="basic-navbar-nav">

            <Searchbar />

            <HeaderOptions />

        </Navbar.Collapse>
    </Navbar>

}




export default Navbars;