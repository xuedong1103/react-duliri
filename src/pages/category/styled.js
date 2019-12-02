import styled from "styled-components"

export const CategoryContainer = styled.div`
    width:100%;
    height:100%;
    .calendar{
        width:100%;
        height:100%;
        .am-list-item .am-list-line .am-list-content {
            display: flex;
        }
        .calendar-list .right {
            float: right;
        }
        .am-calendar{
            height:100%;
        }
    }
    .sticky{
        height:100%;
    }
    .am-tabs-content-wrap-animated{
        height:100%;
        font-size:12px;
    }
    .box{
        width:100%;
        height:100%;
        display:flex;
        flex-direction:column;
    }
    .my-list{
        width:100%;
    }
    .modelContainer{
        height:auto;
        padding:0.1rem 0.1rem;
        h2{
            font-size:0.14rem;
            color:#000;
            font-weight:normal;
        }
        span{
            float:left;
            height:0.3rem;
            padding:0rem 0.1rem;
            border:1px solid #e8e8e8;
            border-radius:0.06rem;
            margin-left:0.1rem;
            text-align:center;
            line-height:0.3rem;
            font-size:0.11rem;
            margin-top:0.2rem;
        }
    }`