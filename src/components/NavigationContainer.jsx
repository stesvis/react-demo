import { BrowserRouter as Router, Routes } from "react-router-dom";

import { AppRoutes } from "../constants/appRoutes";
import DashboardPage from "../pages/DashboardPage";
import React from "react";
import { Route } from "react-router";

const NavigationContainer = () => {
  return (
    <Router forceRefresh={false}>
      <Routes>
        <Route
          exact
          path={AppRoutes.dashboard}
          element={<DashboardPage />}></Route>
      </Routes>
    </Router>
  );
};

export default NavigationContainer;
