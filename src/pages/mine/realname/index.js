import React, { Component ,Fragment} from 'react'
import {RealNameBox,NameId,UploadImg} from "./styled"
import ImagePickerExample from "./zhengjianzhao"
import {withRouter} from "react-router-dom"
@withRouter
class RealName extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
        <Fragment>

            <RealNameBox >
                <span onClick={this.handleBack.bind(this)}>&lt;</span>
                <span>实名认证</span>
                <span></span>
            </RealNameBox>
            <NameId>
                <div><span>真实姓名</span><input type="text" placeholder="请输入您的真实姓名"/></div>
                <div><span>身份证号</span><input type="text" placeholder="请输入您的身份账号"/></div>
            </NameId>

            <UploadImg>
                <div>上传证件照</div>
                <ImagePickerExample/>
                <p> 1. 请上传清晰的身份证正反面和手持身份证图片</p>
                <p>2. 图片需清晰、完整、方向正确、不能带有无关的水印或者标记其他网站的logo</p>
                <p>3. 图片大小不能超过5M</p>
            </UploadImg>
        </Fragment>
          
           
        )
    }
    handleBack(){
        // console.log(this.props)
        this.props.history.push("/mine")
    }
}

export default RealName