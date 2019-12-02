import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import location from "./reducers/location"
import region from "./reducers/region"
import categorylist from "./reducers/categorylist"
const reducers = combineReducers({
    home,
    location,
    region,
    categorylist
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;
