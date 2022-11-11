import axios from "axios";
import React, { useEffect, useState } from "react";
import { validateEmailOnSubmit } from "../../../utils/validate";
import GlobalStyle from "../../globalStyles";
import FormInput from "../FormInput/FormInput";
import { ErrorMessage } from "../FormInput/FormInput.styles";
import {
  FormContent,
  FormHeader,
  FormSubmitBtn,
  FormWrapper,
} from "./Form.styles";
const Form = ({ inputs }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://dev.rapptrlabs.com/Tests/scripts/user-login.php", values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormWrapper>
      <GlobalStyle />
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
