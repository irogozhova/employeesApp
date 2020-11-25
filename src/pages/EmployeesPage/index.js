import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "components/Page";

const EmployeesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "employees/getData" });
  }, [dispatch]);

  return (
    <Page title="Employees">
      <div>employees</div>
    </Page>
  );
};

export default EmployeesPage;
