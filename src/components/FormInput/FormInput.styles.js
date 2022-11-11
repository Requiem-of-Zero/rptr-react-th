import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const InputLabel = styled.label`
  color: #fff;
  margin-bottom: -10px;
  padding-top: 15px;
  font-size: 20px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 50%;
  input {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    border: none;
    padding-left: 40px;
    font-size: 18px;
    color: black;
    &:invalid ~ span {
      display: block;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 16px;
  padding-top: 15px;
  color: red;
  display: none;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;
