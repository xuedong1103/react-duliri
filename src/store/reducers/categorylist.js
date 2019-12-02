import {handleActions} from "redux-actions";
import {categoryActionType} from "../../action/category/actionTypes"
const defaultState={
    categorylist:[]
}

export default handleActions({
    [categoryActionType]:(state,action)=>{
        let categoryState=JSON.parse(JSON.stringify(state));
        categoryState.categorylist = action.payload.data
        return categoryState;
    }

},defaultState)