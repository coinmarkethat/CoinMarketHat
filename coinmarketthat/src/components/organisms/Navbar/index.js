import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import { ClickableIcon, IconText } from '../../molecules';

const CustomNavbar = ({ theme = 'white' }) => {
  return (
    <Navbar className={'organism-navbar-' + theme}>
      <Navbar.Brand className={'organism-navbar-link-' + theme} href="#home">Logo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className={'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme} href="#home">Home</Nav.Link>
        <Nav.Link className={'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme} href="#markets">Markets</Nav.Link>
        <Nav.Link className={'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme} href="#exchange">Exchange</Nav.Link>
        <Nav.Link className={'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme} href="#resources">Resources</Nav.Link>
      </Nav>
      <Nav>
        <ClickableIcon theme={theme} className="organism-navbar-search" iconName="Search" color={theme === 'dark' ? '#676D81' : '#2B2D42'} />
        <IconText
          theme={theme}
          buttonClassName="organism-navbar-button"
          labelClassName="organism-navbar-button-label"
          iconName="Star"
          textTitle="MoonList"
          color="white"
          type="link"
        />
        <ClickableIcon theme={theme} className="organism-navbar-search" iconName="User" color={theme === 'dark' ? '#676D81' : '#2B2D42'} />
        <ClickableIcon theme={theme} className="organism-navbar-search" iconName="ToggleMode" color={theme === 'dark' ? '#676D81' : '#2B2D42'} />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
