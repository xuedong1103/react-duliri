import {locationAsyncType,regionAsyncType} from "./actionTypes";
import {createAction} from "redux-actions";
import {locationApi, regionApi} from "../../api/location"
export const locationAsyncAction = ()=>{
    let locationAction = createAction(locationAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await locationApi();
        dispatch(locationAction(data))
    }
}

export const regionAsyncAction = (ci)=>{
    let regionAction  = createAction(regionAsyncType,(data)=>({data:data}))
    return async (dispatch)=>{
        let data = await regionApi(ci);
        dispatch(regionAction(data.district));
    }

}
