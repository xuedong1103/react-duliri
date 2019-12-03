import {categoryActionType} from "./actionTypes";
import {createAction} from "redux-actions";
import {categoryApi} from "../../api/category/index"
export const categoryAsyncAction = (ci) =>{
    let categoryAction= createAction(categoryActionType,(data)=>({data:data}));
    return async (dispatch)=>{
        let data = await categoryApi(ci);
        dispatch(categoryAction(data))
    }
}