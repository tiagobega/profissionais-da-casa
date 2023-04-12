import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("pages/home"));

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
