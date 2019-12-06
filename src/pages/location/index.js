import React, { Component } from 'react'
import {PageContainer} from "common/styled";
import { SearchBar,List} from 'antd-mobile';
import {CityContainer}  from "./styled"
import {mapStateToProps,mapDispatchToProps} from "./mapStore"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom"
import { CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';
@withRouter
@connect(mapStateToProps,mapDispatchToProps)
 class Location extends Component {
    constructor(){
        super();
        this.state = {
            value: '地址',
        };
    }
     
    render() {
            console.log(this.props)
       let {location} = this.props;
       
        let locationList=[];
        if(location.data){
            locationList=location.data.cities;
        }else{
            locationList=[]
        }
        // console.log(locationList);
        let hotCity=[]
        for(var i=0;i<locationList.length;i++){
            if(locationList[i].isHot==1){
                hotCity.push(locationList[i])
            }
        }
        return (
            
            <PageContainer>
                    <SearchBar
                        value={this.state.value}
                        placeholder="Search"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => this.props.history.goBack()}
                        showCancelButton
                        onChange={this.onChange}
                    />

                    <CityContainer className="cityContainer">
                        <h3>热门城市</h3>
                        <div className="hotCity">
                           {
                                hotCity.map((item)=>(
                                    <span key={item.id}>{item.nm}</span>
                                ))
                            }
                        </div>
                        <h3>全部城市</h3>
                        <div className="allCity" >
                        <List renderHeader={() => '全国'} className="my-list">
                        </List>
                        {   
                            locationList.map((item)=>(
                                    <List renderHeader={() => item.nm} className="my-list" key={item.id}>
                                    </List>
                               
                            ))
                        }
                         </div>
                        {/* <div className="allCity">
                            <List renderHeader={() => '全国'} className="my-list">
                            </List>
                       
                        </div> */}
                    </CityContainer>

            </PageContainer>
        )
    }

    componentDidMount(){
        this.props.handleAsyncLocation();
    }


}
export default Location;