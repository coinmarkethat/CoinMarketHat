import { takeLatest, put, call, all } from "redux-saga/effects";

function* test() {
  yield console.log("This is testing function");
}

export default function* rootSaga() {
  yield all(call(test));
}
