import {homeAsyncType} from "./actionTypes";
import {createAction} from "redux-actions";
import {recommentApi} from "api/home";
export const homeAsyncAction = (cityId)=> {
    let homeAction =createAction(homeAsyncType,(data)=>({data:data}));
    return async (dispatch) =>{
        let data = await recommentApi(cityId);
        console.log(data);
        dispatch(homeAction(data))
    }
}