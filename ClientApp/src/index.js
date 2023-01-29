import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { registerIcons,initializeIcons } from "@fluentui/react";
import { icons as iconSvgs } from "./utils/constants";
import { FontContextProvider } from "./store/dictionary-context";

const baseUrl = document.getElementsByTagName("base")[0].getAttribute("href");
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

registerIcons({
  icons: { ...iconSvgs },
});
initializeIcons();

root.render(
  <FontContextProvider>
    <BrowserRouter basename={baseUrl}>
      <App />
    </BrowserRouter>
  </FontContextProvider>
);
