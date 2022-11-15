import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import formData from "./components/Form/data/util";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
import Todo from "./components/Todo/Todo";

class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Form {...formData} />
        {/* <BrowserRouter>
          <Routes>
            <Route path="/todo" component={<Todo />} />
          </Routes>
        </BrowserRouter> */}
      </>
    );
  }
}

export default hot(App);
