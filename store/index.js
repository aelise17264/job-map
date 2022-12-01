import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "@react-native-async-storage/async-storage";
import reducers from "../reducers";

const store = createStore(() => [], {}, applyMiddleware());
const persistConfig = {
  storage: AsyncStorage,
  // whitelist: ['likedJobs'],
};

persistStore(store, persistConfig);

export default store;
