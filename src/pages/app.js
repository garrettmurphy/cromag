import React from 'react';
import { Link } from 'react-router';
import { Clicker } from '../components/clicker';
import { SimpleClicker } from '../components/simpleclicker';
import { PageHeader, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { DevTools } from '../components/devtools';

export const App = React.createClass({
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Navbar>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">CroMag</a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="/about">About</NavItem>
                <NavItem eventKey={2} href="/forums">Forum</NavItem>
                <NavDropdown eventKey={3} title="Guide" id="basic-nav-dropdown">
                  <MenuItem eventKey={3.1} href="/humans">Humans</MenuItem>
                  <MenuItem eventKey={3.2} href="/plants">Plants</MenuItem>
                  <MenuItem eventKey={3.3} href="/animals">Animals</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.4} href="/land_types">Land types</MenuItem>
                </NavDropdown>
              </Nav>
              <Nav pullRight>
                <NavItem eventKey={1} href="/login">Login</NavItem>
                <NavItem eventKey={2} href="/other">Other</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        {/*<Clicker />
        <SimpleClicker />
        <Link to="/about">About</Link>
        <DevTools />*/}
      </div>
    );
  },
});
