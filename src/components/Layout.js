import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const Layout = (props) => {
    
    return <div>
        <Container fluid className="pl-0 pr-0">
            {props.children}
        </Container>
    </div>
}

export default Layout;