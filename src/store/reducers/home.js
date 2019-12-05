import {handleActions} from "redux-actions";
import {homeAsyncType} from "../../action/home/actionTypes"
//类型错误 要做改动为cityListType
const defaultState = {
    home_choice:[]
}

export default handleActions({
    [homeAsyncType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.home_choice = action.payload.data;
        // console.log(action.payload.data)
        return homeState
    }

},defaultState)