import React, { PureComponent } from 'react'
import {RegiserBox} from './styled'
class registercontent extends PureComponent {
    state = {
       loginArr:[
            "11",
            "22",
            "33"
        ]
    }

    render() {
        return (
            <RegiserBox>
            <section className="sectionbox">
                <div><input type="text" placeholder="请输入手机号"/></div>
                <div><input type="text" placeholder="请输入密码"/></div>
                <div><button onClick={this.handleLand.bind(this)}>登陆</button><span>忘记密码?</span></div>
                <div><span>登录注册表示同意</span><i>独立日服务条款</i></div>
            </section>
        </RegiserBox>
        )
    }

    handleLand(){
        console.log("xx")
    }
}

export default registercontent