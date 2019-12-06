import {homeAsyncAction} from "../../action/home/actionCreator"
export const mapStateToProps=(state)=>({
    home_choice:state.home.home_choice,
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsyncHome(){
        dispatch(homeAsyncAction())
    }
})