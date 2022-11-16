import React from "react";
import { hot } from "react-hot-loader/root";
import formData from "./components/Form/data/util";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import Todo from "./components/Todo/Todo";

const App = () => {
  return (
    <>
      <Navigation />
      {/* <Form  {...formData} /> */}
      <Todo/>
    </>
  );
};

export default hot(App);
