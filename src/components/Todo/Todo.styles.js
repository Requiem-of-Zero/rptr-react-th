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
  padding-bottom: 40px;
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

  .search_row {
    display: flex;
    justify-content: space-between;
    input {
      width: clamp(60%, 500px, 400px);
      height: 30px;
      border-radius: 40px;
      border: none;
      padding-left: 30px;
    }
    button {
      background: rgb(47, 203, 252);
      font-family: "Varela Round";
      border: 2px solid rgb(47, 203, 252);
      padding: 10px 40px;
      border-radius: 25px;
      color: white;
      font-size: 18px;
      cursor: pointer;
      
      &:hover,
      &:focus {
        transform: scale(0.98);
        background: #fff;
        color: black;
        transition: 0.2s all ease;
      }
    }
  }
`;
