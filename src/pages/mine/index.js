import React, { Component, Fragment } from 'react'
import { MineContainer, Headimage, Minecontent } from "./styled"
// import {Route,HashRouter,Link} from "react-router-dom"//路由跳转
import {MineBarRoute} from "../../router/minerouter"
import {withRouter} from "react-router-dom"
@withRouter
class Mine extends Component {
    constructor() {
        super()
        this.state = {
            
            name:JSON.parse(localStorage.getItem("userInfo")) ,
        }

    }
    render() {
        // console.log(localStorage.getItem("userInfo"))//显示本地存储的信息
        let {name} = this.state
        console.log(this.props)
        let {navList} = this.state;
        return (
            <Fragment>
                <MineContainer>
                    <div className="header">
                        <span></span>
                        <span>个人中心</span>
                        <span className="iconfont icon-faxian"></span>
                    </div>

                </MineContainer>
                <Headimage onClick={this.handlePerson.bind(this)}>
                    <div  className="imgbox" >
                        <div><i className="iconfont icon-wode"></i></div>
                        <div>
                            <p>{name["name"]}</p>
                            <button>未认证</button>
                        </div>
                    </div>
                    <span className="r">&gt;</span>
                  
                </Headimage>
                <Minecontent>
               
                        <ul>
                            {
                                MineBarRoute.map((item, index) => (
                                    
                                <li key={index} onClick={this.handleSwitchFunction.bind(this,item.path)}><i className="iconfont">{item.meta.icon}</i><span>{item.meta.text}</span></li>
                                ))
                            }
                        </ul>

                </Minecontent>
            </Fragment>

        )
    }
    handlePerson(){
        this.props.history.push("/Personinfo")
        console.log("Personinfo")
    }
    handleSwitchFunction(path){
        // console.log(path);
        this.props.history.push(path);
      
    }
}

export default Mine;
