import {createStore,combineReducers,applyMiddleware} from "redux";
import reduxThunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import home from "./reducers/home";
import location from "./reducers/location"
import region from "./reducers/region"
import categorylist from "./reducers/categorylist"
import citylist from "./reducers/citylist"
import login from "./reducers/login"
const reducers = combineReducers({
    home,
    location,
    region,
    categorylist,
    citylist,
    login,
})

const store = createStore(reducers,composeWithDevTools(applyMiddleware(reduxThunk)))

export default store;
