import React,{Component,Fragment}from "react";
import {CategoryListContainer} from "./styled";
import {mapStateToProps,mapDispatchToProps} from "./mapStore";
import {connect} from "react-redux"

@connect(mapStateToProps,mapDispatchToProps)
 class CategoryList extends Component{
     constructor(){
         super();
     }
    render(){
        let {categorylist}=this.props;
        let listItem=[]
        if(categorylist.cinemas){
            listItem=categorylist.cinemas
        }else{
            listItem=[]
        }
        let {style}=this.props;
        return (
            <CategoryListContainer style={style}> 
                <Fragment>
                    {
                        listItem.map((item)=>(
                            <div className="content" key={item.id}>
                                <div>
                                    <span className="jobTitle">{item.nm}</span>
                                    <span className="jobBrand">大品牌</span>
                                    <span className="jobTime">{item.distance}</span>
                                </div>
                                <div className="jobInfo">
                                    <span className="jobSign">
                                        {item.addr}
                                    </span>
                                    <span className="jobLocation">
                                        价格：{item.sellPrice}元
                                    </span>
                                </div>
                                <div className="brand">
                                    <img className="brandImg" src="https://image.duliday.com/eed4bb7f728c35c3498e5c74b8af66a8?imageMogr2/auto-orient/thumbnail/!60x60r/gravity/Center/crop/60x60"/>
                                    <span className="brandTitle"> {item.promotion.cardPromotionTag}</span>
                                    <span className="sendTime"></span>
                                </div>
                            </div>
                        ))
                    }
                
                </Fragment>     
            </CategoryListContainer>
        )
    }

    componentDidMount(){
        let ci=localStorage.getItem("cityId")
        this.props.handleAsyncCategory(ci)
    }

}

export default CategoryList;