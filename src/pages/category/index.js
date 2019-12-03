import React,{Component} from "react";
import { Tabs, Badge ,List,Switch, Calendar} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import {CategoryContainer} from './styled'
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux"
import enUS from 'antd-mobile/lib/calendar/locale/en_US';
import zhCN from 'antd-mobile/lib/calendar/locale/zh_CN';
import CategoryList from '../../components/categorylist/index'
@connect(mapStateToProps,mapDispatchToProps)


class Category extends Component{
    
    constructor(){
        super();
        this.state = {
            en: false,
            show: false,
            config: {},
            flag:false
        };
    }
    render(){
       
        let {region}=this.props;
        let regionList=[];
        if(region.subItems){
            regionList=region.subItems
        }else{
            regionList=[]
        }

        const tabs = [
            { title: <Badge>类型</Badge> },
            { title: <Badge>地区</Badge> },
            { title: <Badge>时间</Badge> },
            { title: <Badge>筛选</Badge> },
          ];

          const extra = {
            '2017/07/15': { info: 'Disable', disable: true },
          };
          const now = new Date();
          extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
          extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
          extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
          extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };
         
          Object.keys(extra).forEach((key) => {
            const info = extra[key];
            const date = new Date(key);
            if (!Number.isNaN(+date) && !extra[+date]) {
              extra[+date] = info;
            }
          });        
         let {flag}=this.state;
          console.log(flag);
        return (
            <CategoryContainer>
                <StickyContainer className="sticky">
                <Tabs tabs={tabs}
                    initialPage={0}
                    onTabClick={this.handleChangeFlag.bind(this)}
                >
                        <div style={{ display:(flag==true?"block":"none"), alignItems: 'center', justifyContent: 'center', height: '100%', backgroundColor: '#fff' ,overflow:'auto'}}>
                            <div className="box"  onClick={this.handleChangeFlagFalse.bind(this)}>
                                    <div className="modelContainer">
                                        <h2>餐饮酒店</h2>
                                        <span>服务员</span>
                                        <span>收银员</span>
                                        <span>迎宾礼仪</span>
                                        <span>食品制作</span>
                                        <span>配菜打包</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>零食超市</h2>
                                        <span>店员导购</span>
                                        <span>促销员</span>
                                        <span>收银员</span>
                                        <span>理货员</span>
                                        <span>靓促</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>市场推广</h2>
                                        <span>拉访</span>
                                        <span>留取信息</span>
                                        <span>充场</span>
                                        <span>问卷调查</span>
                                        <span>派发传单</span>
                                        <span>英语接待</span>
                                        <span>展会扫码</span>
                                        <span>展厅经理</span>
                                        <span>售票</span>
                                        <span>派发礼仪</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>兼职老师</h2>
                                        <span>家教老师</span>
                                        <span>助教老师</span>
                                        <span>托班老师</span>
                                        <span>培训老师</span>
                                        <span>老师</span>
                                        <span>教练</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>客服</h2>
                                        <span>接听客服</span>
                                        <span>打字客服</span>
                                        <span>外呼客服</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>物流仓储</h2>
                                        <span>快递打包</span>
                                        <span>物流分拣</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>才艺技能</h2>
                                        <span>摄影</span>
                                        <span>礼仪</span>
                                        <span>主持</span>
                                        <span>设计美工</span>
                                        <span>翻译</span>
                                    </div>
                                    <div className="modelContainer">
                                        <h2>实习</h2>
                                        <span>运营</span>
                                        <span>文案策划</span>
                                    </div>
                            </div>
                        </div>
                        <div style={{ display:(flag==true?"block":"none"), height: '100%', backgroundColor: '#fff' }}>
                            <List className="my-list">
                                {
                                    regionList.map((item)=>(
                                        <List.Item key={item.id} onClick={this.handleChangeFlagFalse.bind(this)}>{item.name}</List.Item>
                                    ))
                                }
                            </List>
                        </div>
                        <div style={{ display:(flag==true?"block":"none"), justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                            <div className="calendar">
                            {/* {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
                            <List className="calendar-list" style={{ backgroundColor: 'white' }}>
                                {this.renderBtn('选择日期', 'Select Date', { type: 'one' })}
                            </List> */}

                                <Calendar
                                    {...this.state.config}
                                    visible={this.state.show}
                                    onCancel={this.onCancel}
                                    onConfirm={this.onConfirm}
                                
                                    defaultDate={now}
                                />

                            </div>

                        </div>
                        <div style={{ display:(flag==true?"block":"none"), justifyContent: 'center', height: '100%', backgroundColor: '#fff' }}>
                           筛选
                        </div>   
                    </Tabs>      
                </StickyContainer>
                {/* <div className="list"></div> */}
                <CategoryList style={{display:(flag==false?"block":"none")}}>

                </CategoryList>
        </CategoryContainer>
        )
    }
    componentDidMount(){
        let ci=localStorage.getItem('cityId');
        this.props.handleAsyncRegion(ci)
    }

    
    renderBtn(zh, en,config = {}) {
        config.locale = this.state.en ? enUS : zhCN;
        return (
          <List.Item arrow="horizontal"
            onClick={() => {
              this.setState({
                show: true,
                config,
              });
            }}
          >
            {this.state.en ? en : zh}
          </List.Item>
        );
      }
      handleChangeFlag(){
          this.setState({
              flag:true
          })
      }
      handleChangeFlagFalse(){
          this.setState({
              flag:false
          })
      }
}

export default Category;

{/* <div className="box">
                                <div className="modelContainer">
                                    <h2>餐饮酒店</h2>
                                    <span>服务员</span>
                                    <span>收银员</span>
                                    <span>迎宾礼仪</span>
                                    <span>食品制作</span>
                                    <span>配菜打包</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>零食超市</h2>
                                    <span>店员导购</span>
                                    <span>促销员</span>
                                    <span>收银员</span>
                                    <span>理货员</span>
                                    <span>靓促</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>市场推广</h2>
                                    <span>拉访</span>
                                    <span>留取信息</span>
                                    <span>充场</span>
                                    <span>问卷调查</span>
                                    <span>派发传单</span>
                                    <span>英语接待</span>
                                    <span>展会扫码</span>
                                    <span>展厅经理</span>
                                    <span>售票</span>
                                    <span>派发礼仪</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>兼职老师</h2>
                                    <span>家教老师</span>
                                    <span>助教老师</span>
                                    <span>托班老师</span>
                                    <span>培训老师</span>
                                    <span>老师</span>
                                    <span>教练</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>客服</h2>
                                    <span>接听客服</span>
                                    <span>打字客服</span>
                                    <span>外呼客服</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>物流仓储</h2>
                                    <span>快递打包</span>
                                    <span>物流分拣</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>才艺技能</h2>
                                    <span>摄影</span>
                                    <span>礼仪</span>
                                    <span>主持</span>
                                    <span>设计美工</span>
                                    <span>翻译</span>
                                </div>
                                <div className="modelContainer">
                                    <h2>实习</h2>
                                    <span>运营</span>
                                    <span>文案策划</span>
                                </div>
                           </div> */}