import { SearchBar } from 'antd-mobile';
import React, { Component, Fragment } from "react"
import { connect } from "react-redux"
import { SchoolContainer } from "./styled"
import { mapStateToProps, mapDispatchToProps } from "./mapstore"
import { withRouter } from "react-router-dom"
@withRouter
@connect(mapStateToProps, mapDispatchToProps)
class SearchBarExample extends Component {
  state = {
    value: [
      {
        name: '清华大学',
        time: 1
      },
      {
        name: '北京大学',
        time: 2
      },
      {
        name: '中国人民大学',
        time:3
      },
      {
        name: '北京航空航天大学',
        time:4
      },
      {
        name: '北京邮电大学',
        time: 5
      },
      {
        name: '北京师范大学',
        time: 6
      },
      {
        name: '中国传媒大学',
        time: 7
      },
      {
        name: '北京邮电大学',
        time: 8
      },
      {
        name: '北京师范大学',
        time: 9
      },
      {
        name: '中国传媒大学',
        time: 10
      },
    ],
  };
  componentDidMount() {
    this.autoFocusInst.focus();
    this.handleAsyncList();
  }

  handleAsyncList() {
    this.props.handlecityList();
    // console.log(this.props.cityList)

  }
  handleChange(val) {
    this.props.handlecityList(val);
    // console.log(this.props.cityList)//城市列表
  }

  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  render() {
    let { value } = this.state;
    let { cityList } = this.props;

    let idList = cityList.cinemas;
    // console.log(this.props)//props携带的值和属性
    return (
      <Fragment>
        <SearchBar onChange={this.handleChange.bind(this)} placeholder="请搜索学校" ref={ref => this.autoFocusInst = ref} />
        <SchoolContainer>
          <div className="ListName">学校列表</div>
          <ul>
             {


              idList? (idList.list).map((item, index) => (
                <li key={index}>{item.nm}</li>
              )) : ''
            }

            {
              value.map((item, index) => (
              <li key={item.time}>{item.name}</li>
              ))
            }
         

          </ul>

        </SchoolContainer>

      </Fragment>);
  }




}

export default SearchBarExample;