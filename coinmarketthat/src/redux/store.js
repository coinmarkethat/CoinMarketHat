import { createStore, applyMiddleware } from "redux";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { store, persistor };
