import http from "../../utils/request";
// import { expressionStatement } from "@babel/types";

export const week_choiceApi = ()=>http.get({
    url:"/ajax/hub/home/v1/web/week_choice.json",
    data:{
        
    }
})

export const cityApi =(kw) =>http.get({//获取猫眼电影名进行渲染数据(模拟大学名称)
    url:"/ajax/search",
    data:{
        kw:kw,
        cityId: 1,
        stype: -1
    }
})

// export const searchApi =(kw) =>http.get({
//     url:"ajax/ajax/search",
//     data:{
//         kw: kw,
//         cityId: 1,
//         stype: -1
//     }
// })