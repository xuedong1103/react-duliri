import {handleActions} from "redux-actions";
import {cityListType} from "../../action/actionApi/actionsTypes"
//类型错误 要做改动为cityListType
const defaultState = {
    list_city:[]
}

export default handleActions({
    [cityListType]:(state,action)=>{
        let homeState = JSON.parse(JSON.stringify(state));
        homeState.list_city = action.payload.data;
        // console.log(action.payload.data)
        return homeState
    }

},defaultState)