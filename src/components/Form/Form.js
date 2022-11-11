import React, { useEffect, useState } from "react";
import FormInput from "../FormInput/FormInput";
import {
  FormContent,
  FormHeader,
  FormSubmitBtn,
  FormWrapper,
} from "./Form.styles";
import GlobalStyle from "../../globalStyles";
const Form = ({ inputs }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [errors, setErrors] = useState({
  //   email: [],
  //   password: [],
  //   confirmPassword: [],
  //   submit: []
  // })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {};

  return (
    <FormWrapper>
      <GlobalStyle/>
      <FormContent onSubmit={handleSubmit}>
        <FormHeader>Rapptr Labs</FormHeader>
        {inputs.map((input, i) => (
          <FormInput
            key={`form_input-${i}`}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          ></FormInput>
        ))}
        <FormSubmitBtn>Register</FormSubmitBtn>
      </FormContent>
    </FormWrapper>
  );
};

export default Form;
