import styled from "styled-components";

export const TodosWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TodoHeader = styled.h1`
  color: white;
  text-align: center;
  font-family: "Varela Round";
  font-size: 46px;
`;

export const TodosContentContainer = styled.div`
  width: 60%;
  background: rgba(255, 255, 255, 0.2);
  padding: 40px;
`;

export const TodosList = styled.ul`
  font-size: 36px;
  z-index: 9;
  font-family: "Varela Round";
  list-style: none;
  padding: 0;
  gap: 20px;
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
`;

export const ActionButtonContainer = styled.div`
  display: flex;

  svg {
    fill: black;
  }
`;
