import styled from 'styled-components';

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 30px;
  svg {
    cursor: pointer;
    fill: black;
  }

  .edit {
    &:hover {
      transition: 0.4s all ease;
      fill: orange;
    }
  }

  .delete {
    &:hover {
      transition: 0.4s all ease;
      fill: red;
    }
  }
`;