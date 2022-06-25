import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">

    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto gap-4 text-decoration-none">
      <Link className='mr-5' to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/update">Update</Link>
      <Link to="/login">Login</Link>

    </Nav>

  </Navbar>
  )
}

export default Header
