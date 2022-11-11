import React from "react";
import { hot } from "react-hot-loader/root";
import formData from "./components/Form/data/util";
import Form from "./components/Form/Form";

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <Form {...formData}/>
      </>
    );
  }
}

export default hot(App);
