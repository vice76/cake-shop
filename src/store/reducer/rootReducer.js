import {combineReducers} from 'redux';
import cakeReducer from "./cakeReducer";
import icecreamReducer from "./icecreamReducer";

const rootReducer= combineReducers ({
    cake: cakeReducer,
    icecream: icecreamReducer
})

export default rootReducer;