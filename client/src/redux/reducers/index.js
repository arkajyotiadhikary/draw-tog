/*
    TODO
    -> make reducer for drawing editor panel .
    
*/

import { combineReducers } from "redux";
import { editor } from "./editor";

const rootReducer = combineReducers({
    editor,
});

export default rootReducer;
