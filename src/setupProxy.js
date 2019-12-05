const proxy = require("http-proxy-middleware");
module.exports  = (app)=>{
    app.use("/api",proxy({
        target:"http://39.97.33.178",
        changeOrigin:true,
        // pathRewrite:{
        //     "^/ajax":""
        // }
    }))
    
     app.use("/ajax",proxy({
        target:"http://m.maoyan.com",
        changeOrigin:true,
    })) 

    app.use("/loginajax",proxy({
    target:"http://39.105.204.151:3000",
    changeOrigin:true,
       pathRewrite:{
            "^/loginajax":""
        }
}))

}
//http://m.maoyan.com/ajax/movieOnInfoList?token=

