import React, { Component, Fragment } from 'react'
import { PersonInfoContainer,InfoContent} from './styled'
// import {HashRouter,Route,Switch} from "react-router-dom"
import ImagePickerExample from "../../components/pictureupload"
import {withRouter} from "react-router-dom"
@withRouter
class Personinfo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            infoList: [
                {
                    title: "基本信息(必填)",
                    degree: "完善度",
                    path:"/"
                },
                {
                    title: "教育经历",
                    degree: "完善度",
                    path:"/education"
                },
                {
                    title: "兼职经历",
                    degree: "完善度",
                    path:"/"
                },
                {
                    title: "自我评价",
                    degree: "完善度",
                    path:"/"
                },
                {
                    title: "加分项",
                    degree: "完善度",
                    path:"/"
                }

            ]
        }
    }

    render() {
        let {infoList} = this.state;
        return (
            <Fragment>
                <PersonInfoContainer>
                    <div className="view">
                        <span onClick={this.handleBack.bind(this)}>&lt;</span>
                        <span style={{ color: "white" }}>预览</span>
                    </div>
                    <div className="tou"><i className="iconfont icon-wode"></i></div>
                    <div></div>

                </PersonInfoContainer>
                <InfoContent>
                    <ul>
                        {
                            infoList.map((item,index)=>(
                                <li key={index} onClick={this.handleAdd.bind(this,item.path)}>
                                    <div>
                                        <p>{item.title}</p>
                                        <p style={{color:"gray"}}>{item.degree}</p>
                                    </div>
                                    <div>
                                        <span>0%</span>
                                    </div>
                                </li>
                            ))
                        }

                        <ImagePickerExample/>

                    </ul>

                </InfoContent>
            </Fragment>

        )
    }
    handleBack(){
        this.props.history.push("/mine");
    }
    handleAdd(path){
        this.props.history.push(path)
        console.log(path)
    }
}

export default Personinfo;
