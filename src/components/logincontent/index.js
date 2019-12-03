import React, { PureComponent } from 'react'
import {LoginBox} from "./styled"
class loginContent extends PureComponent {
    state = {
       loginArr:[
            "xx",
            "xxz",
            "xca"
        ]
    }

    render() {
        return (
            <LoginBox>
                <section className="sectionbox">
                    <div><input type="text" placeholder="请输入手机号(新手机自动注册)"/></div>
                    <div><input type="text" placeholder="请输入验证码"/><span>获取验证码</span></div>
                    <div><button>登陆</button></div>
                    <div><span>登录注册表示同意</span><i>独立日服务条款</i></div>
                </section>
            </LoginBox>
        )
    }
}

export default loginContent