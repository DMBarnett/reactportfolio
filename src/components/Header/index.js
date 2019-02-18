import React, { Component } from "react"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink, } from 'reactstrap';
import "./style.css"

class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md" className="topbar">
          <NavbarBrand href="/"><h1>David M Barnett</h1></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://github.com/DMBarnett">Github</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/davidmbarnett/">LinkedIn</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header