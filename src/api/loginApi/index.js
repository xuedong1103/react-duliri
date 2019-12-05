import http from "../../utils/request"

export const LoginApi =(username,password)=>http.post({
    url:"/loginajax/users/login",
    // headers:{
    //     "Content-Type": "application/x-www-form-urlencoded"
    // },
    data:{
        username,
        password
    },
    method:"POST"
})