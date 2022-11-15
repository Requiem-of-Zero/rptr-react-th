import React from "react";
import { hot } from "react-hot-loader/root";
import { Route, Routes } from "react-router-dom";
import formData from "./components/Form/data/util";
import Form from "./components/Form/Form";
import Navigation from "./components/Navigation/Navigation";
class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <Form {...formData} />
        <Routes>
          <Route path='/home' component={<App />}/>
          <Route path='/todo' component={}>
        </Routes>
      </>
    );
  }
}

export default hot(App);
