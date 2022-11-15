import styled from 'styled-components';

export const NavigationWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  background: rgba(0,0,0, 0.8);
  position: fixed;
`;

export const NavigationContent = styled.nav`
display: flex;
justify-content: center;
`;

export const NavigationLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  img {
    width: 100%;
    height: 100px;
  }
  li {
    a {
      color: white;
    }
  }
`;

