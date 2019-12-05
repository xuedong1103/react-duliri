import http from "utils/request.js";
const locationApi = ()=>http.get({
    url:"/api/cityList",
    data:{

    },
})

 const regionApi = (ci)=>http.get({
    url:"/ajax/filterCinemas",
    data:{
        ci
    },
    headers:{
        "content-type":"application/json",
    }
})

export {
    locationApi,
    regionApi
}