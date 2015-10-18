import { Builder } from "./components/builder";
import React from "react";

// Builder is the main application component, and all other parts of the application
// are contained inside it
React.render(React.createElement(Builder), document.querySelector('.hc-app'));