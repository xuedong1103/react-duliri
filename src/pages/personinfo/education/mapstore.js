import {cityAsyncList} from "../../../action/actionApi/actionCreator";
export const mapStateToProps =(state)=>({
    cityList:state.home.city_list
})
export const mapDispatchToProps=(dispatch)=>({
    handlecityList(val){
        dispatch(cityAsyncList(val))
    }
})