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
      pattern: "^[0-9A-Za-z]{4,16}$",
      errorMsg: "Password should be 4-16 characters long!",
      required: true,
    },
  ],
};

export default formData;
