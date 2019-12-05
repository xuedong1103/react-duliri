import {Collection,Resume,Realname} from "pages"//引入pages下面的Collection,Resume,Realname。

export const MineBarRoute = [
    {
        path: "/resume",
        component: Resume,
        meta: {
            text: "我的简历",
            icon: "\ue737",
            path: "resume",
            id: 1
        }

    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "我的收藏",
            icon: "\ue60d",
            path: "collection",
            id: 2
        }
    },
    {
        path: "/realname",
        component: Realname,
        meta: {
            text: "实名认证",
            icon: "\ue78e",
            path: "realname",
            id: 3
        }
    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "我的钱包",
            icon: "\ue664",
            path: "collection",
            id: 4
        }
    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "我的信用",
            icon: "\ue62a",
            path: "collection",
            id: 5
        }
    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "健康证",
            icon: "\ue737",
            path: "collection",
            id: 6
        }

    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "求职意向设置",
            icon: "\ue78e",
            path: "collection",
            id: 7
        }
    },
    {
        path: "/collection",
        component: Collection,
        meta: {
            text: "用户反馈",
            icon: "\ue737",
            path: "collection",
            id: 8
        }
    },
]