import React from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import {
  Collapse,
  Nav,
  Navbar as BootstrapNavbar,
  NavbarBrand,
  NavItem,
  NavbarToggler,
} from 'reactstrap';
import router from 'react-named-routes';

class Index extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(previousState => ({
      isOpen: !previousState.isOpen,
    }));
  }

  render() {
    return (
      <BootstrapNavbar color="dark" dark expand="lg" fixed="top">
        <NavbarBrand href={router.toUrl('home')}>YOUR_PROJECT</NavbarBrand>

        <NavbarToggler onClick={this.toggle} />

        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem onClick={this.state.isOpen ? this.toggle : null}>
              <NavLink className="nav-link" exact to={router.toUrl('projects')}>
                Projects
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BootstrapNavbar>
    );
  }
}

export default withRouter(connect()(Index));
