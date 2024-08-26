import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #333;
`;

function Header() {
  return (
    <HeaderWrapper className="shadow-xl">
      <Link to={'/'}>
      <div className="flex items-center font-bold">
        <img src="/assets/mlogo.png" alt="Logo" className="mr-2 h-10 cursor-pointer"/>
        Habit Harbor
      </div>
      </Link>
      <Nav>
        <NavLink to="/">Courses</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/community">Community</NavLink>
        <NavLink to="/contact">Support</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
      </Nav>
    </HeaderWrapper>
  );
}

export default Header;
