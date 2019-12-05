import {handleActions} from "redux-actions";
import {loginAsyncType} from "../../action/loginApi/actionTypes"
const defaultState = {
    user_info:[]
}

export default handleActions({
    [loginAsyncType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.user_info = action.payload.data;
        // console.log(action.payload)
        return homeState
    }

},defaultState)