import {regionAsyncAction} from "../../action/location/actionCreator";

export const mapStateToProps = (state)=>({
    region:state.region.region,
})
export const mapDispatchToProps = (dispatch)=>({
    handleAsyncRegion(ci){
        dispatch(regionAsyncAction(ci))
    }
})