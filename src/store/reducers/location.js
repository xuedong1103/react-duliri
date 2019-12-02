import {handleActions} from "redux-actions";
import {locationAsyncType} from "../../action/location/actionTypes"
const defaultState = {
    location:[],
}

export default handleActions({
    [locationAsyncType]:(state,action)=>{
        let locationState = JSON.parse(JSON.stringify(state));
        locationState.location = action.payload.data; 
        return locationState;
    }
},defaultState)