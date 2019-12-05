import {loginAsyncAction} from "../../action/loginApi/actionCreator"

export const mapStateToProps =(state)=>({
        user_Info:state.login.user_info
})  

export const mapDispatchToProps=(dispatch)=>({
   async userAsyncName(username,password){
        
      let data = await dispatch(loginAsyncAction(username,password))
        if(data ==1 ){
            //跳转
            this.history.push("/mine")
        }
    
    }
})