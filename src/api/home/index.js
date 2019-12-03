import http from "../../utils/request.js";

export const recommentApi = (cityId)=> http.get({
    url:"/api/movieOnInfoList",
    data:{
        cityId:cityId
    },
})

