import { all } from "redux-saga/effects";

import employeesSaga from "./employees/sagas";

export default function* rootSaga() {
  yield all([employeesSaga()]);
}
