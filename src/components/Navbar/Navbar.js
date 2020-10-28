import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

const ArticleNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="Navbar">
      <Navbar.Brand href="/articles">Article Management</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/articles" className="Link">
          Show
        </Link>
        <Link to="/add" className="Link">
          Add
        </Link>
      </Nav>
    </Navbar>
  );
};

export default ArticleNavbar;
