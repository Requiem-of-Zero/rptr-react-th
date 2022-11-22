import styled from "styled-components";

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

export const EditingInput = styled.input`
  width: 50%;
  height: 35px;
  border: none;
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 36px;
  border-radius: 15px;
  padding: 10px 20px;
`;
