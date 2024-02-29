import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

const SideNav = ({ isSidebarOpen }) => {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });

  return (
    <SideBar isOpen={isSidebarOpen} isMobile={isMobile}>
      <NavItem>hello world</NavItem>
      <NavItem>hello world</NavItem>
      <NavItem>hello world</NavItem>
      <NavItem>hello world</NavItem>
    </SideBar>
  );
};

const SideBar = styled.div(({ isOpen, isMobile }) => {
  return `
  display: ${isOpen ? 'flex' : 'none'};
  width:${isMobile ? '100%' : '300px'};
  background-color: #d4d4d4;
  padding: 4em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
});

const NavItem = styled.div`
  color: #d0ccc6;
`;

export default SideNav;
