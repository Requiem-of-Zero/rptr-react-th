import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
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
  position: relative;
  width: 100%;
  input {
    width: 100%;
    height: 50px;
    border-radius: 15px;
    padding-left: 40px;
    font-size: 14px;
    color: black;

    &:focus {
      outline: 2px solid rgb(47, 203, 252);
    }

    &:invalid {
      outline: 1px solid red;
    }

    &:invalid ~ span {
      display: block;
    }
  }
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  padding-top: 15px;
  color: red;
  display: none;
  text-align: center;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;
