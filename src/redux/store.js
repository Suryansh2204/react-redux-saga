import { configureStore, } from "@reduxjs/toolkit";
import rootReducer from "./reducers/index";
import createSagaMiddleware from 'redux-saga'
import productSaga from "./productSaga";

const sagaMiddleware= createSagaMiddleware();

const store = configureStore(
    { 
        reducer: rootReducer,
        middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleware),
    }
);

sagaMiddleware.run(productSaga);
export default store;
