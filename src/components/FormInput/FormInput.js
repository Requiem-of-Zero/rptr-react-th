import React from "react";
import { FaLock, FaUser } from "react-icons/fa";
import {
  ErrorMessage,
  IconWrapper,
  InputContent,
  InputLabel,
  InputWrapper,
} from "./FormInput.styles";

const FormInput = ({ type, pattern, placeholder, label, onChange, errorMsg }) => {
  const inputIcon = type === "email" ? <FaUser /> : <FaLock />;
  const handleIcon = errorMsg ? '15%' : '35%';
  
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputContent>
        <IconWrapper top={handleIcon}>{inputIcon}</IconWrapper>
        <input
          type={type}
          name={type}
          pattern={pattern}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
        ></input>
        <ErrorMessage>{errorMsg}</ErrorMessage>
      </InputContent>
    </InputWrapper>
  );
};

export default FormInput;
