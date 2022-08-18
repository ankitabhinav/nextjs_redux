import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";

import rootReducer from "../reducers";
const initialState = {
    value:10
};

const makeStore = (context) => createStore(rootReducer, initialState);

export const wrapper = createWrapper(makeStore, { debug: true });