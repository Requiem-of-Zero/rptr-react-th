import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://wallpaperaccess.com/full/2454628.png);
  &:before {
    content: "";
    position: absolute;
    background: rgba(255, 255, 255, 0.7);
    transform: rotate(-3deg);
    border-radius: 15px;
    width: clamp(50%, 600px, 90%);
    height: 550px;
  }
`;

export const FormContent = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);
  width: clamp(50%, 600px, 90%);
  height: 550px;
  border-radius: 20px;
  z-index: 9;
`;

export const FormHeader = styled.h1`
  color: #fff;
  font-size: 42px;
  text-align: center;
`;

export const FormSubmitBtn = styled.button`
  align-self: center;
  width: 50%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #51a9c4;
  background: #51a9c4;
  margin-top: 30px;
  font-size: 32px;
  font-family: "VT323", monospace;
  color: white;
  &:hover, &:focus {
    transform: scale(0.98);
    background: #fff;
    color: black;
    transition: 0.2s all ease;
  }
`;
