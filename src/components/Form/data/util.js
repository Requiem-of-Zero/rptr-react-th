const formData = {
  inputs: [
    {
      id: 0,
      type: "email",
      placeholder: "user@rapptrlabs.com",
      label: "E-mail",
      errorMsg: "It should be a valid e-mail address!",
      required: true,
    },
    {
      id: 1,
      type: "password",
      placeholder: "Must be at least 4 characters",
      label: "Password",
      pattern: "^[A-Za-z0-9]{4-16}",
      errorMsg:
        "Password should be 4-16 characters and include at least 1 special character!",
      required: true,
    },
  ],
};

export default formData;