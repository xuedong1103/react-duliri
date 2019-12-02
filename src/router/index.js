import {
    Home,
    Job,
    Mine,
    Login,
    Location,
    Category,
} from "pages"



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
    }
    
];

export const RouteConfig = TabBarRoute.concat(NoTabBarRoute)