import http from "../../utils/request.js";

export const recommentApi = ()=> http.get({
    url:"/api/movieOnInfoList",
    data:{
        // page: page,
        // city_id: city_id, 
        // stick_ids:stick_ids
    },
})

//page=3,city_id=310100,stick_ids=[2]