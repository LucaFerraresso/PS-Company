import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/about">Chi Sono</StyledLink>
      <StyledLink to="/projects">Progetti</StyledLink>
      <StyledLink to="/contact">Contatto</StyledLink>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  background-color: #333;
  padding: 1rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin: 0 1rem;
  font-size: 1.2rem;

  &:hover {
    color: #ff6f61;
  }
`;

export default Navbar;
