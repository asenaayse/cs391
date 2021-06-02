import React from "react";
import logo from "./../images/logo.png";
import {
  Card,
  Row,
  CardImg,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
export const Footer = () => (
    <footer className="footer" sticky="bottom">
          <Nav className="navbar " style={{padding:"10px"}}>
            <NavItem>
              <NavLink href="/components/">Our Team</NavLink>
            </NavItem>
            <NavItem>
              <img src={logo} alt="logo" style={{height:"60px"}}></img>
            </NavItem>
            </Nav>
            
    </footer>
  );
