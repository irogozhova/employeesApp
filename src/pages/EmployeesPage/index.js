import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import Page from "components/Page";
import Preloader from "components/Preloader";
import EmployeesTable from "components/EmployeesTable";

import {
  sortedData,
  isLoadingSelector,
  errorSelector,
  sortSelector,
} from "redux/employees/selectors";

import { getErrorText } from "utils/errors";

import styles from "./EmployeesPage.module.css";

const EmployeesPage = () => {
  const data = useSelector(sortedData);
  const isLoading = useSelector(isLoadingSelector);
  const error = useSelector(errorSelector);
  const sort = useSelector(sortSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "employees/getData" });
  }, [dispatch]);

  const handleChangeSort = useCallback((field) => {
    dispatch({ type: "employees/changeSort", payload: field });
  });

  if (error) return <div className={styles.error}>{getErrorText(error)}</div>;

  return (
    <Page title="Employees">
      <Preloader visible={isLoading}>
        <div className={styles.wrapper}>
          <EmployeesTable
            data={data}
            sort={sort}
            onChangeSort={handleChangeSort}
          />
        </div>
      </Preloader>
    </Page>
  );
};

export default EmployeesPage;
