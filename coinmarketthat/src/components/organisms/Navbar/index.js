import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './styles.css';
import { ClickableIcon, IconText } from '../../molecules';

const CustomNavbar = ({ theme, showMoonList, toggleMode, history }) => {
  const handleToggleMode = () => {
    const initialTheme = localStorage.getItem('theme') || 'white';
    const newTheme = initialTheme === 'white' ? 'dark' : 'white';
    localStorage.setItem('theme', newTheme);
    toggleMode(newTheme);
  };

  return (
    <Navbar className={'organism-navbar' + ' ' + 'organism-navbar-' + theme}>
      <Navbar.Brand
        className={'organism-navbar-link-' + theme}
        href="#home"
        onClick={() => history.push('/dashboard')}
      >
        Logo
      </Navbar.Brand>
      <Nav className="mr-auto" onClick={() => history.push('/dashboard')}>
        <Nav.Link
          className={
            'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme
          }
          href="#home"
        >
          Home
        </Nav.Link>
        <Nav.Link
          className={
            'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme
          }
          href="#markets"
        >
          Markets
        </Nav.Link>
        <Nav.Link
          className={
            'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme
          }
          href="#exchange"
        >
          Exchange
        </Nav.Link>
        <Nav.Link
          className={
            'organism-navbar-link' + ' ' + 'organism-navbar-link-' + theme
          }
          href="#resources"
        >
          Resources
        </Nav.Link>
      </Nav>
      <Nav>
        <ClickableIcon
          theme={theme}
          className="organism-navbar-icons"
          iconName="Search"
          color={theme === 'dark' ? '#676D81' : '#000000'}
        />
        {showMoonList && (
          <IconText
            theme={theme}
            buttonClassName="organism-navbar-button"
            iconName="Star"
            textTitle="MoonList"
            color="white"
            type="link"
            onClick={() =>
              history.push({
                pathname: '/moonboard',
                state: { themeMode: theme },
              })
            }
          />
        )}

        <ClickableIcon
          onClick={() => history.push('/login')}
          theme={theme}
          className="organism-navbar-icons"
          iconName="User"
          color={theme === 'dark' ? '#676D81' : '#000000'}
        />
        <ClickableIcon
          onClick={() => handleToggleMode()}
          theme={theme}
          className="organism-navbar-icons"
          iconName="ToggleMode"
          color={theme === 'dark' ? '#676D81' : '#000000'}
        />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
