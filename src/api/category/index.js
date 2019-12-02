import http from "../../utils/request.js"

export const categoryApi = ()=>http.get({
    url:"/ajax/cinemaList",
    data:{

    }
})