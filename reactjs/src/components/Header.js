import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="container-fluid"  navbar>
              <NavItem>
                <NavLink href="/components/">Main Page</NavLink>
              </NavItem>
              <NavItem> 
                <NavLink href="https://github.com/reactstrap/reactstrap">Horoscope</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Tests
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Which Cat Are You?
                  </DropdownItem>
                  <DropdownItem>
                    Which HTML5 Element Are You?
                  </DropdownItem>
                  <DropdownItem>
                    Which Super Hero Are You?
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="ml-auto" >
                <NavLink href="/components/">Sign In</NavLink>
              </NavItem>
              <NavItem className="ml-auto"> 
                <NavLink href="https://github.com/reactstrap/reactstrap">Sign Up</NavLink>
              </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}