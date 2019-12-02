import {handleActions} from "redux-actions";
import {regionAsyncType} from "../../action/location/actionTypes"
const defaultState = {
    region:[]
}
export default handleActions({
    [regionAsyncType]:(state,action)=>{
        let regionState = JSON.parse(JSON.stringify(state))
        regionState.region=action.payload.data
        return regionState
    }
},defaultState)