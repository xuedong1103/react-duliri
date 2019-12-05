import http from "../../utils/request.js"

export const categoryApi = (ci)=>http.get({
    url:"/ajax/cinemaList",
    data:{
        ci:ci
    }
})