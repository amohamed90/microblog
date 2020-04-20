import React from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import './Nav.css'

function Nav() {
  return (
    <Container className="Nav">
      <Jumbotron className="Jumbotron">
        <h1 className="display-3">Microblog</h1>
        <p className="lead">Get in the Rithm of blogging!</p>
        <span className="NavLinks">
          <NavLink className="NavBlog NavBlog1" to="/">Blog</NavLink>
          <NavLink className="NavBlog" to="/new">Add a new post</NavLink>
        </span>
      </Jumbotron>
    </Container>
  )
}

export default Nav;