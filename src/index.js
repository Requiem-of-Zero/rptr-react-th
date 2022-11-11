import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

var mountNode = document.getElementById("app");
const container = document.getElementById("app");
const root = createRoot(container); 
root.render(<App tab="home" />);
