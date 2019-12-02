import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { MineContainer } from "./styled"
import { NavBar, Icon, Grid } from 'antd-mobile';
import {withRouter} from "react-router-dom";
@withRouter
 class Mine extends Component {
    render() {
        const data = [
            {
                icon: 'images/01.png',
                text: '我的简历'
            },
            {
                icon: 'images/07.png',
                text: '我的收藏'
            },
            {
                icon: 'images/06.png',
                text: '实名认证'
            },
            {
                icon: 'images/04.png',
                text: '我的钱包'
            },
            {
                icon: 'images/08.png',
                text: '我的信用'
            },
            {
                icon: 'images/05.png',
                text: '健康证'
            },
            {
                icon: 'images/09.png',
                text: '求职意向设置'
            },
            {
                icon: 'images/02.png',
                text: '用户反馈'
            },
        ]

        console.log(this.props);

        return (
            <PageContainer>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.goBack()}
                    rightContent={[
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >个人中心</NavBar>
                <MineContainer>

                    <div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0', background: '#fff', position: 'relative' }}>
                        <img style={{ height: '64px', width: '64px', marginRight: '15px', marginLeft: '10px', borderRadius: '50%' }} src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2180521163,2957507467&fm=26&gp=0.jpg" alt="" />
                        <div style={{ lineHeight: 1 }}>
                            <div style={{ marginBottom: '14px', fontWeight: 'bold', marginTop: '10px' }}>昵称</div>
                            <div><span style={{ fontSize: '10px', color: '#FF6E27', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '10px' }}>未认证</span></div>
                        </div>
                        <Icon type="right" className="iconRight" />
                    </div>


                    <div className="gridContainer">
                        <Grid data={data}
                            columnNum={3}
                            renderItem={dataItem => (
                                <div style={{ padding: '12.5px' }}>
                                    <img src={dataItem.icon} style={{ width: '25px', height: '25px', marginTop: '20px' }} alt="" />
                                    <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                                        <span>{dataItem.text}</span>
                                    </div>
                                </div>
                            )}
                        />
                    </div>

          </MineContainer>
            </PageContainer>
        )
    }

}

export default Mine;