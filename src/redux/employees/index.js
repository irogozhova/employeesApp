import { createSlice } from "@reduxjs/toolkit";

const employees = createSlice({
  name: "employees",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
    sort: {
      field: "name",
      isAsc: true,
    },
  },
  reducers: {
    getData(state) {
      state.isLoading = true;
    },
    getDataSuccess(state, { data }) {
      state.isLoading = false;
      state.data = data;
      state.error = null;
    },
    getDataFailure(state, { errorStatus }) {
      state.isLoading = false;
      state.error = errorStatus;
    },
    changeSort(state, { payload }) {
      if (state.sort.field === payload) {
        state.sort.isAsc = !state.sort.isAsc;
      } else {
        state.sort = {
          field: payload,
          isAsc: true,
        };
      }
    },
  },
});

export default employees.reducer;
