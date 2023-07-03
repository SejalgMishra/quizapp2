import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Register from "./pages/register";
import Main from "./pages/main";
import Question from "./pages/question";
import Login from "./pages/login";
import MainLayout from "./layout/mainLayout";
import AuthLayout from "./layout/authLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AuthLayout />}>
      <Route index element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/main" element={<MainLayout />}>
        <Route index element={<Question />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
