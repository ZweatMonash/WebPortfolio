import React, { useState, Component } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink as RSNavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const AppNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="" dark expand="md">
        <i className="fas fa-user-cog light-icon"></i>
        <NavbarBrand className="mr-auto ml-3" href="/">
          Zwe Lin Htet (David)
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <span>Home</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/portfolio/">
                <span>Portfolio</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/skills/">
                <span>Skills</span>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/documents/">
                <span>Documents</span>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
