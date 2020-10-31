import React from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';

const Searchbar = () => {



    return <Nav className="mr-auto w-100">

        <Form className="d-flex w-100 pl-md-3 pr-md-3">

            <FormControl
                type="text"
                placeholder="Search"
                className="pr-sm-2  search__field" />

            <Button
                variant="warning"
                className="glyphicon glyphicon-search search__button"
            >
                <i className="fa fa-search"></i>
                </Button>

        </Form>

    </Nav>
}

export default Searchbar;