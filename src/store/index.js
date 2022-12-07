import { combineReducers } from "redux"
import countReducer from "./countReducer"
import colorReducer from "./colorReducer"

const rootReducer = combineReducers({
    counter: countReducer,
    color: colorReducer,
})

export default rootReducer