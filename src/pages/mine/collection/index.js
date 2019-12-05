import React, { Component, Fragment} from 'react'
import {CollectionContainer} from "./styled"
import {withRouter} from "react-router-dom"
@withRouter
class Collection extends Component {
    constructor() {
        super()
        console.log(this.props)
        this.state = {
            
        }
    }

    render() {
        return (
               <Fragment>
                   <CollectionContainer>
                   <div className="divBox">
                        <i className="iconfont icon-faxian"></i>
                        <div>搞咩啊～都不收藏人家的岗位!</div>
                   </div>
                       

                   </CollectionContainer>
               </Fragment> 
              
        )
    }
}

export default Collection;