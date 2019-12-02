import React, { Component } from 'react'
import { PageContainer } from "common/styled"
import { JobContainer } from "./styled"
import { Tabs, Badge } from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
export default class Job extends Component {
    constructor() {
        super();
    }
    render() {
        const tabs = [
            { title: <Badge>全部</Badge> },
            { title: <Badge >已报名</Badge> },
            { title: <Badge >已录用</Badge> },
            { title: <Badge >已完成</Badge> },
        ];
        return (
            <PageContainer>
                <JobContainer>
                        <StickyContainer>
                            <Tabs tabs={tabs}
                                initialPage={1}
                                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    全部
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    已报名
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    已录用
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                                    已完成
                                </div>
                            </Tabs>
                        </StickyContainer>
                </JobContainer>
            </PageContainer>
        )
    }
}
