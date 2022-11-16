import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import App from "./App";
import Todo from "./components/Todo/Todo";
import GlobalStyle from "./globalStyles";
const container = document.getElementById("app");
const root = createRoot(container);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App tab="home" />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <GlobalStyle />
      <App tab="home" />
    </RouterProvider>
  </React.StrictMode>
);
