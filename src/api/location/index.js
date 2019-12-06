import http from "utils/request.js";
const locationApi = ()=>http.get({
    url:"/api/cityList",
    data:{

    },
})

 const regionApi = ()=>http.get({
    url:"/ajax/filterCinemas",
    data:{
        ci:10
    },
    headers:{
        "content-type":"application/json",
    }
})

export {
    locationApi,
    regionApi
}