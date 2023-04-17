import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: flex;
  justify-content: center;
`;

const NavigationList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavigationItem = styled.li`
  margin: 0 1rem;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const NavigationLink = styled(Link)`
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function NavigationMenu() {
  return (
    <NavigationWrapper>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Hem</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/cats">Katter</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/contact">Kontakta oss</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/support">Stöd oss</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationWrapper>
  );
}

export default NavigationMenu;
