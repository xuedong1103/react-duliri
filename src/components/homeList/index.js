import React ,{Component} from "react"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import {connect} from "react-redux"
import {withRouter} from "react-router-dom"
import {ListContainer} from "./styled"

@withRouter
@connect(mapStateToProps,mapDispatchToProps)
class HomeList extends Component{
    constructor(){
        super();
        this.page=0;
    }
    render(){
        let {home_choice}=this.props;
        let list=[];
        if(home_choice.data){
            list=home_choice.data.movieList
        }else{
            list=[];
        }
        return (
           
                <ListContainer>
                    {/* <div className="content">
                        <div>
                            <span className="jobTitle">UR（lcm）</span>
                            <span className="jobBrand">大品牌</span>
                            <span className="jobTime">22元/小时</span>
                        </div>
                        <div className="jobInfo">
                            <span className="jobSign">
                                月结 | 男女不限 | 服务员 | 长期招聘
                            </span>
                            <span className="jobLocation">
                                浦东新区 
                                15km
                            </span>
                        </div>
                        <div className="brand">
                            <img className="brandImg" src="https://image.duliday.com/eed4bb7f728c35c3498e5c74b8af66a8?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                            <span className="brandTitle"> UR </span>
                            <span className="sendTime">发布于14小时之前</span>
                        </div>
                    </div> */}

                {
                    list.map((item)=>(
                        <div className="content" key={item.id}>
                            <div>
                                <span className="jobTitle">{item.nm}</span>
                                <span className="jobBrand">大品牌</span>
                                <span className="jobTime">{item.rt}</span>
                            </div>
                            <div className="jobInfo">
                                <span className="jobSign">
                                    {item.star}
                                </span>
                                <span className="jobLocation">
                                    {item.showInfo}
                                </span>
                            </div>
                            <div className="brand">
                                <img className="brandImg" src="https://image.duliday.com/eed4bb7f728c35c3498e5c74b8af66a8?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                <span className="brandTitle"> 观众评价：{item.sc} </span>
                                <span className="sendTime">有{item.wish}人想看</span>
                            </div>
                        </div>
                    ))
                }
                
                </ListContainer>
               
        )
    }

    componentDidMount(){
        // console.log(1);
        // let  stick_ids="["+2+"]"
        // this.props.handleAsyncHome(3,310100,stick_ids);
        let cityId=localStorage.getItem('cityId')
        this.props.handleAsyncHome(cityId);
        // this.refs.scroll.handlepullingUp(()=>{
            
        // })
    }
}

export default HomeList;