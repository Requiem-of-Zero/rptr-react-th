import axios from "axios";
import React, { useEffect, useState } from "react";
import GlobalStyle from "../../globalStyles";
import FormInput from "../FormInput/FormInput";
import Navigation from "../Navigation/Navigation";

import {
  FormContent,
  FormHeaderContainer,
  FormSubmitBtn,
  FormWrapper,
  Logo,
  SubmitErrorMsg,
} from "./Form.styles";

const Form = ({ inputs }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setErrorMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "post",
        url: "http://dev.rapptrlabs.com/Tests/scripts/user-login.php",
        data: { ...values },
      });
    } catch (error) {
      let { name, message } = error;
      if (name === "AxiosError") {
        // return setError('The server could not be reached. Please try again later.')
        setErrorMsg(message);
      }
    }
  };

  return (
    <FormWrapper>
      <GlobalStyle />
      <FormContent onSubmit={handleSubmit}>
        <FormHeaderContainer>
          <Logo src="https://clutchco-static.s3.amazonaws.com/s3fs-public/logos/ba7e9e6a8324d0b222a5df4b0a25d829.png?VersionId=Jyx7dA3kyJVpAazJLvBAncnaN1D_AT0Q" />
        </FormHeaderContainer>
        {inputs.map((input, i) => (
          <FormInput
            key={`form_input-${i}`}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          ></FormInput>
        ))}
        <FormSubmitBtn>Register</FormSubmitBtn>
        {errorMsg && (
          <SubmitErrorMsg>
            The server could not be reached. Please try again later.
          </SubmitErrorMsg>
        )}
      </FormContent>
    </FormWrapper>
  );
};

export default Form;
