import {categoryAsyncAction} from "../../action/category/actionCreator";
export const mapStateToProps = (state)=>({
    categorylist:state.categorylist.categorylist
})
export const mapDispatchToProps = (dispatch)=>({
    handleAsyncCategory(){
        dispatch(categoryAsyncAction())
    }
})