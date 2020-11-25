import { all, call, put, takeLatest } from "redux-saga/effects";
import { getData } from "api/requests";

function* getDataSaga() {
  try {
    const data = yield call(getData);
    yield put({ type: "employees/getDataSuccess", data });
  } catch (e) {
    const errorStatus = e.response?.status;
    yield put({
      type: "employees/getDataFailure",
      errorStatus: errorStatus || "no status",
    });
  }
}

function* employeesSagas() {
  yield all([takeLatest("employees/getData", getDataSaga)]);
}

export default employeesSagas;
