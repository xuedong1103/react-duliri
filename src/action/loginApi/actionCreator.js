import {loginAsyncType} from "./actionTypes"
import {createAction} from "redux-actions";
import {LoginApi} from "../../api/loginApi"
import {Toast} from "antd-mobile"
export const loginAsyncAction = (username,password) =>{
    let loginAction = createAction(loginAsyncType,(data)=>({data:data}));
    return async (dispatch) => {
        let data= await LoginApi(username,password);
        
        if(data.data.code ==1 ){
            Toast.success(data.data.info)
            localStorage.setItem("userInfo",JSON.stringify({
                name:data.data.data.name,
                urlPic:data.data.data.urlPic
            }))
            dispatch(loginAction(data))
            //异步中做一个return返回
            return data.data.code;
        }else{

            Toast.fail(data.data.info)
        }
       
    }
}