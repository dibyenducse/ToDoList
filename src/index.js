import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

import ToDoList from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <ToDoList />
  </StrictMode>
);