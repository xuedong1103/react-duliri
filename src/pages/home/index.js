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
        let cityName=localStorage.getItem('cityName');
        return (
            <PageContainer>
                <HomeContainer>
                <div className="title">
                    <div className="location">
                        <NavLink to="/location">{cityName}</NavLink>
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
                                        <div onClick={this.handleToCategory.bind(this)}>
                                            <img src="https://image.duliday.com/quanbu20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span onClick={this.handleToCategory.bind(this)}>全部</span>
                                        </div>
                                        <div onClick={this.handleToCategory.bind(this)}>
                                            <img src="https://image.duliday.com/fujin20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>附近</span>
                                        </div>
                                        <div onClick={this.handleToCategory.bind(this)}>
                                            <img src="https://image.duliday.com/zhoumo20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>周末</span>
                                        </div>
                                        <div onClick={this.handleToCategory.bind(this)}>
                                            <img src="https://image.duliday.com/rijie20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>日结</span>
                                        </div>
                                        <div onClick={this.handleToCategory.bind(this)}>
                                            <img src="https://image.duliday.com/pinpai20190506@2x.png?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                            <span>品牌</span>
                                        </div>
                                    </nav>
                                </HashRouter>
                                <section>
                                    <div className="contentTitle">
                                        <NavLink to="/home/recommend" >精选推荐</NavLink>
                                        <NavLink to="/home/partTimeJob" >打牌兼职</NavLink>
                                        <NavLink to="/home/employment" >优先上岗</NavLink>
                                    </div>
                                  
                                    <HomeList />

                                </section>
                            </div>

                    </BscrollContent>
                </HomeContainer>

            </PageContainer>
        )
    }
  
    handleToCategory(){
        this.props.history.push("/category")
    }

}
export default Home;