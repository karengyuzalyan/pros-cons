import React, { Component } from "react";
import ReactDOM from "react-dom";

import ListWrapper from "./src";

class ExampleApp extends Component {
  render() {
    return <ListWrapper />;
  }
}

ReactDOM.render(<ExampleApp />, document.getElementById("root"));
