import {cityAsyncList} from "../../../action/actionApi/actionCreator";
export const mapStateToProps =(state)=>({
    cityList:state.citylist.list_city
})
export const mapDispatchToProps=(dispatch)=>({
    handlecityList(val){
        
        dispatch(cityAsyncList(val))
    }
})