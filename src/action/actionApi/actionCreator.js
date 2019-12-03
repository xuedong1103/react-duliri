import {cityListType} from "../actionApi/actionsTypes";
import {createAction} from "redux-actions";
import {cityApi} from "../../api/cityApi"
export const cityAsyncList =(val)=>{
    let listAction = createAction(cityListType,(data)=>({data:data}));
    console.log("listAction");
    return async (dispatch)=>{
        let data = await cityApi(val);
        console.log(data);
        dispatch(listAction(data));
    }
}