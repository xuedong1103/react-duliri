import http from "../../utils/request.js";

export const recommentApi = (cityId)=> http.get({
    url:"/ajax/moreComingList",
    data:{
        // cityId:cityId,
    },
})

