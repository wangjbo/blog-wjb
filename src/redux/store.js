import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension'
import MyListReducer from "./reducers/MyList";

const allReducer = combineReducers({
    MyList:MyListReducer,
})


export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))