import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { dashboard } from "./reducers/dashBoard";
import {appStatus} from './reducers/appStatus'
import {allData} from './reducers/allData'
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
  dashboard, 
  appStatus,
  allData
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));