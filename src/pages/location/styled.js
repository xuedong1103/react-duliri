import styled from "styled-components";

export const CityContainer = styled.div`
    width:100%;
    height:100%;
    background:#fff;
    border-top:1px solid #000;
    overflow-y:auto;
    h3{
        font-size:0.16rem;
        line-height:0.4rem;
        font-weight:normal;
        margin-left:0.1rem;
    }
    .hotCity{
        width:100%;
        height:1.4rem;
        flex-shrink:0;
        span{
            width:0.7rem;
            height:0.36rem;
            text-align:center;
            line-height:0.36rem;
            margin-left:0.2rem;
            font-size:0.14rem;
            border:1px solid #e8e8e8;
            padding:0.05rem 0.1rem;
            border-radius:0.1rem;
            
        }
    }
    .allCity{
        width:100%;
        height:auto;
    }
    .my-list{
        border-bottom:1px solid #e8e8e8;
    }
`