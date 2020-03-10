import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Basic from "./examples/basic";
//import Try from "./examples/tryToUseReact";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
