import React, { Component, Fragment } from 'react'
import { LoginContainer } from "./styled"
// import ChangeBar from '../../components/ChangeBar'
import {NavLink,Switch,Route,HashRouter,Redirect} from "react-router-dom"
import Logincontent from "../../components/logincontent/index"
import Registercontent from "../../components/registercontent/index"
export default class Login extends Component {
    render() {
        return (
            <Fragment>
                <LoginContainer>
                    <div className="logo">
                        <img src="https://activity.duliday.com/6d8e73b82c8acbe1577e/assets/img/logo_525ac5.png" alt="" />
                    </div>
                    <div className="changeLoRe">
                        {/* <ChangeBar/> */}
                        <ul>
                            <li>
                                <NavLink to="/login/logincontent">快捷登陆</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login/registercontent">账号登陆</NavLink>
                            </li>
                        </ul> 
                        <div className="box">
                           <HashRouter>
                               <Route path="/login" render={()=>{
                                    return (
                    
                                            <Switch>
                                                <Redirect from="/login" to="login/logincontent" exact/>
                                                <Route path='/login/logincontent' component={Logincontent}/>
                                                <Route path='/login/registercontent' component={Registercontent}/>
                                            </Switch>
                                    
                                    )
                               }}/>                           
                         </HashRouter> 
                        </div>
                    </div>
                </LoginContainer>

            </Fragment>
        )
    }
}
