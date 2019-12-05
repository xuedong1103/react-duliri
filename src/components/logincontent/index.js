import React, { PureComponent ,Fragment} from 'react'
import {LoginBox} from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom"
import { connect } from "react-redux"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class loginContent extends PureComponent {
    state = {
       loginArr:[
            "xx",
            "xxz",
            "xca"
        ],
        username:"",
        password:''
    }

    render() {
        return (
            <Fragment>
                <LoginBox>
                    <section className="sectionbox">
                        <div><input type="text" placeholder="请输入手机号(新手机自动注册)" onChange={this.onchangephone.bind(this)}/></div>
                        <div><input type="text" placeholder="请输入验证码" onChange={this.onchangeyz.bind(this)}/><span>获取验证码</span></div>
                        <div><button onClick={this.handleLand.bind(this)}>登陆</button></div>
                        <div><span>登录注册表示同意</span><i>独立日服务条款</i></div>
                    </section>
                </LoginBox>
            </Fragment>   
        )
    }
    onchangephone(e){
        let val=e.target.value
        this.setState({
            username:val
        })
    }
    onchangeyz(e){
        let val=e.target.value
        this.setState({
            password:val
        })
    }
   handleLand(){
        console.log(this.props)
        console.log(this.state.username,this.state.password)
        this.props.userAsyncName(this.state.username,this.state.password)
    }
  
}

export default loginContent