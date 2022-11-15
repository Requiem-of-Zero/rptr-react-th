import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://wallpaperaccess.com/full/2454628.png);
  background-size: cover;
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
  background: rgba(0, 0, 0, 1);
  width: clamp(50%, 600px, 90%);
  height: 550px;
  border-radius: 20px;
  z-index: 9;
  transition: 0.2s all ease;
`;

export const FormHeaderContainer = styled.div`
  padding-top: 15px;
  height: 150px;
`;

export const Logo = styled.img`
  width: clamp(150px, 1250px, 125px);
  height: auto;
`;

export const FormSubmitBtn = styled.button`
  align-self: center;
  width: 50%;
  height: 50px;
  border-radius: 15px;
  border: 2px solid rgb(47, 203, 252);
  background: rgb(47, 203, 252);
  margin-top: 30px;
  font-size: 28px;
  font-family: "Varela Round";
  color: white;
  cursor: pointer;
  &:hover,
  &:focus {
    transform: scale(0.98);
    background: #fff;
    color: black;
    transition: 0.2s all ease;
  }
`;

export const SubmitErrorMsg = styled.span`
  font-size: 16px;
  padding-top: 15px;
  color: red;
  display: block;
  text-align: center;
`;
