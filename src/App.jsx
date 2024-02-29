import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import 'normalize.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from './containers/SIdeNav';
import Posts from './components/Posts';

function App() {
  const isMobile = useMediaQuery({
    query: '(max-width:768px)',
  });
  const [sidenavState, setSidenav] = useState(false);

  return (
    <Container isMobile={isMobile}>
      <NavButton
        onClick={() => {
          setSidenav((isOpen) => !isOpen);
        }}
      >
        <FontAwesomeIcon icon={faBars} />
      </NavButton>
      <SideNav isSidebarOpen={sidenavState} />
      <Posts />
    </Container>
  );
}

const Container = styled.div(({ isMobile }) => {
  return `
  display: flex;
  flex-direction:${isMobile ? 'column' : 'row'};
  width: 100%;
  height: 100rem;
`;
});

const NavButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: transparent;
  border: none;
  color: black;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
`;

export default App;
