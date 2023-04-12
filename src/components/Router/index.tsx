import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const HomePage = React.lazy(() => import("pages/home"));

const Router = () => (
  <BrowserRouter>
    <Route element={<HomePage />} />
  </BrowserRouter>
);

export default Router;
