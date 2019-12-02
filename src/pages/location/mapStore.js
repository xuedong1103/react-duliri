import {locationAsyncAction} from "../../action/location/actionCreator";
export const mapStateToProps=(state)=>({
    location:state.location.location
})

export const mapDispatchToProps = (dispatch)=>({
    handleAsyncLocation(){
       dispatch(locationAsyncAction())
    }
})