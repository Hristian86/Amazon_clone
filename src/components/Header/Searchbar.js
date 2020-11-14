import React from 'react';
import { Navbar, Nav, NavDropdown, Button, FormControl, Form } from 'react-bootstrap';
import { Collapse, Container, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Searchbar = () => {
    const [search, setSearch] = useState("");
    const history = useHistory();

    // To Do search in the database
    const searchHandle = (e) => {
        e.preventDefault();
        if (search.length > 0) {
            setTimeout(() => {
                history.push(`/search?search=${search}`);
                setSearch("");
            }, 200);
        }
    }

    return <Nav className="mr-auto w-100">

        <Form className="d-flex w-100 pl-md-3 pr-md-3" onSubmit={searchHandle}>

            <FormControl
                type="text"
                placeholder="Search"
                className="pr-sm-2  search__field"
                onChange={e => (setSearch(e.target.value))}
                value={search}
            />

            <Button
                type="submit"
                variant="warning"
                className="glyphicon glyphicon-search search__button"
            >
                <i className="fa fa-search"></i>
                </Button>

        </Form>

    </Nav>
}

export default Searchbar;