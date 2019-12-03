import {
    Home,
    Job,
    Mine,
    Login,
    Location,
    Category,
    // Find,
    // Order,
    // Register,
} from "pages"


import Personinfo from "../pages/personinfo/index"
import EducaTion from "../pages/personinfo/education"
export const TabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        icon:"\ue628",
        text:"首页",
             
    },
    // {
    //     path:"/find",
    //     component:Find,
    //     meta:{
    //         flag:true
    //     },
    //     icon:"\ue663",
    //     text:"发现"
    // },
    // {
    //     path:"/order",
    //     component:Order,
    //     meta:{
    //         flag:true
    //     },
    //     icon:"\ue737",
    //     text:"订单"
    // },
    {
        path:"/job",
        component:Job,
        meta:{
            flag:true
        },
        icon:"\ue663",
        text:"我的兼职"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            requiredAuth:true
        },
        icon:"\ue617",
        text:"我的"
    }
];

export const NoTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{}
    },
    {
        path:"/location",
        component:Location,
        meta:{}
    },
    {
        path:"/category",
        component:Category,
        meta:{
           
        }
    },
    // {
    //     path:"/register",
    //     component:Register,
    //     meta:{},
    //     text:"注册"
    // },
    {
        path:"/personinfo",
        component:Personinfo,
        meta:{
    
        }
    },
    {
        path:"/education",
        component:EducaTion,
        meta:{
    
        }
    }
    
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)