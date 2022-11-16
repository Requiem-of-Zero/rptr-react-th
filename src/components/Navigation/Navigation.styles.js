import styled from "styled-components";

export const NavigationWrapper = styled.div`
  width: 100vw;
  height: 15vh;
  background: black;
  position: fixed;
  padding: 0;
  margin: 0;
`;

export const NavigationContent = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationLinks = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;

  img {
    width: 100%;
    height: 100px;
  }
  li {
    list-style: none;
    a {
      color: white;
    }
  }
`;
