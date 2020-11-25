import { createSlice } from "@reduxjs/toolkit";

const employees = createSlice({
  name: "employees",
  initialState: {
    data: null,
    isLoading: false,
    error: null,
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
  },
});

export default employees.reducer;
