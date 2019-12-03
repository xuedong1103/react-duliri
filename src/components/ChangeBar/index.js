import React, { Component } from 'react'
import {NoTabBarRoute} from "../../router"
import { ChangContainer } from "./styled";
import {withRouter} from "react-router-dom";
console.log(NoTabBarRoute)
@withRouter
class ChangeBar extends Component {
    render() {
        let {path} = this.props
        console.log(this.props)

        return (
            <ChangContainer>
                    <ul>
                       {
                           NoTabBarRoute.map((item)=>(
                               <li key={item.path} onClick={this.handleTo.bind(this,item.path)} className={path===item.path?'active':""}>
                                    <i className="iconfont">{item.icon}</i>
                                    <span>{item.text}</span>
                               </li>
                           ))
                       }
                    </ul>
            </ChangContainer>
        )
    }
    
    handleTo(path){
        this.props.history.push(path);
        console.log(path)
    }
}

export default ChangeBar