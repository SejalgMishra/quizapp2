import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <h1>QuizApp</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
