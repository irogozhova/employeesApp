import { createSelector } from "@reduxjs/toolkit";

const rootSelector = (state) => state.employees;

export const employeesSelector = createSelector(
  rootSelector,
  (employees) => employees.data
);

export const isLoadingSelector = createSelector(
  rootSelector,
  (employees) => employees.isLoading
);

export const errorSelector = createSelector(
  rootSelector,
  (employees) => employees.error
);

export const sortSelector = createSelector(rootSelector, ({ sort }) => sort);

const sortByAlphabet = (a, b) => {
  if (a < b) {
    return -1;
  }
  if (b < a) {
    return 1;
  }
  return 0;
};

export const sortedData = createSelector(
  [employeesSelector, sortSelector],
  (employees, sort) => {
    const modifier = sort.isAsc ? 1 : -1;
    return employees
      .slice() // in strict mode arrays are frozen, need to copy before sorting
      .sort(
        (employee1, employee2) =>
          modifier *
          sortByAlphabet(employee1[sort.field], employee2[sort.field])
      );
  }
);
