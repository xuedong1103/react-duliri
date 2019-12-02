import React, { Component } from 'react';
import {PageContainer} from "common/styled";
import { Carousel, WingBlank } from 'antd-mobile';
import {HomeContainer} from "./styled";
import { Icon} from 'antd-mobile';
import {withRouter,NavLink,HashRouter} from "react-router-dom";
import HomeList from "components/homeList/index";
import BscrollContent from "common/bscroll";
import {mapStateToProps,mapDispatchToProps} from "components/homeList/mapStore.js";
import {connect} from "react-redux";
@connect(mapStateToProps,mapDispatchToProps)
@withRouter

 class Home extends Component {
    constructor(){
        super();
        this.state = {
            data: ['https://image.duliday.com/999610581891aace8965ead310fe3e49?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130', 
            'https://image.duliday.com/26d784c22f68d60a59c4a347ac5f8c77?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130', 
            'https://image.duliday.com/b72b58319150c2341dcaf39e579953be?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130',
            'https://image.duliday.com/f1dceeb6f15ca99b562897e12739a3b2?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130',
            'https://image.duliday.com/b45fe1398f55a09742a23bf8e3d7dcbe?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130'],
            imgHeight: 110,
          }
    }
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            data: ['https://image.duliday.com/999610581891aace8965ead310fe3e49?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130', 
            'https://image.duliday.com/26d784c22f68d60a59c4a347ac5f8c77?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130', 
            'https://image.duliday.com/b72b58319150c2341dcaf39e579953be?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130',
            'https://image.duliday.com/f1dceeb6f15ca99b562897e12739a3b2?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130',
            'https://image.duliday.com/b45fe1398f55a09742a23bf8e3d7dcbe?imageMogr2/auto-orient/thumbnail/!375x130r/gravity/Center/crop/375x130'],
          });
        }, 100);
      }
    render() {
        return (
            <PageContainer>
                <HomeContainer>
                <div className="title">
                    <div className="location">
                        <NavLink to="/location">北京</NavLink>
                        {/* <Icon type="down" /> */}
                    </div>
                    <div className="inputBtn" >
                        <Icon type="search" size="xs" />
                        搜索兼职品牌 地点
                    </div>
                </div>
                <BscrollContent ref="scroll">
                            <div className="listContainer">
                                <div className="banner">
                                    <WingBlank>
                                        <Carousel
                                            autoplay={true}
                                            infinite
                                            >
                                            {this.state.data.map(val => (
                                                <a
                                                key={val}
                                                
                                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                                >
                                                <img
                                                    src={`${val}`}
                                                    alt=""
                                                    style={{ width: '100%', verticalAlign: 'top' }}
                                                    onLoad={() => {
                                                    // fire window resize event to change height
                                                    window.dispatchEvent(new Event('resize'));
                                                    this.setState({ imgHeight: 'auto' });
                                                    }}
                                                />
                                                </a>
                                            ))}
                                        </Carousel>
                                    </WingBlank>,
                                    <div></div>
                                </div>
                                <HashRouter>
                                    <nav>
                                        <div to="/category">
                                            <img src="https://image.duliday.com/quanbu20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>全部</span>
                                        </div>
                                        <div to="/category">
                                            <img src="https://image.duliday.com/fujin20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>附近</span>
                                        </div>
                                        <div to="/category">
                                            <img src="https://image.duliday.com/zhoumo20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>周末</span>
                                        </div>
                                        <div to="/category">
                                            <img src="https://image.duliday.com/rijie20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>日结</span>
                                        </div>
                                        <div to="/category">
                                            <img src="https://image.duliday.com/pinpai20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>品牌</span>
                                        </div>
                                    </nav>
                                </HashRouter>
                                <section>
                                    <div className="contentTitle">
                                        <NavLink to="/home/recommend">精选推荐</NavLink>
                                        <NavLink to="/home/partTimeJob">打牌兼职</NavLink>
                                        <NavLink to="/home/employment">优先上岗</NavLink>
                                    </div>
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
                                    <HomeList/>

                                </section>
                            </div>

                    </BscrollContent>
                </HomeContainer>

            </PageContainer>
        )
    }
    // componentWillUpdate(){
    //     this.refs.scroll.handlepullingUp();
    // }
    // componentDidMount(){
    //     this.handleAsyncData();
    //     this.refs.scroll.handlepullingUp(()=>{
    //         this.handleAsyncData();
    //     })
    // }
    // handleAsyncData(){
    //    // this.props.handleAsyncHome();
    //     //console.log(this.porps);
    // }
   

}
export default Home;