import React from "react";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";
import EmployeesPage from "pages/EmployeesPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/employees">
          <EmployeesPage />
        </Route>
        <NotFoundPage />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
