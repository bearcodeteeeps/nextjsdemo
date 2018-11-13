import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import {withRouter} from "next/dist/lib/router";

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    console.log(this.props)
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Chris Montone Blog</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink active={this.props.router.pathname === "/"} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.props.router.pathname === "/about"} href="/about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={this.props.router.pathname === "/contact"} href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Example);