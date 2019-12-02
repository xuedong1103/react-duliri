import {handleActions} from "redux-actions";
import {homeAsyncType} from "../../action/home/actionTypes"

const defaultState = {
    home_choice:[]
}

export default handleActions({
    [homeAsyncType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.home_choice = action.payload.data;
        return homeState
    }

},defaultState)