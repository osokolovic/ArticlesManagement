import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

const ArticleNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="Navbar">
      <Navbar.Brand href="/articles">Article Management</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/articles" className="Link">
          Show
        </Nav.Link>
        <Nav.Link as={Link} to="/add" className="Link">
          Add
        </Nav.Link>
        <Button as={Link} to="/test" variant="success">
          Test
        </Button>
      </Nav>
    </Navbar>
  );
};

export default ArticleNavbar;
