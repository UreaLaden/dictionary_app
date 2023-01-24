import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { registerIcons } from "@fluentui/react";
import { icons as iconSvgs } from "./utils/constants";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

registerIcons({
  icons:{...iconSvgs}
})


root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);
