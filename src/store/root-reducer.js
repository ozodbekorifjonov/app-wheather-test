import {combineReducers} from "redux";
import counterReducer from "./counterSlice/index"

const rootReducer = combineReducers({
    counter: counterReducer,
});

export default rootReducer;
