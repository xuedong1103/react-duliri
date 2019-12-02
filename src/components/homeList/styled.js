import styled from "styled-components"

export const ListContainer = styled.div`
    width:100%;
    .content{
        height:1rem;
        background:#fff;
        box-sizing:border-box;
        margin:0 0.06rem 0.06rem 0.06rem;
        border-radius:0.1rem;
                div{
                    display:flex;
                    height:0.3rem;
                    line-height:0.3rem;
                    margin-left:0.06rem;
                    color:#666;
                }
                .jobTitle{
                    width:1rem;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                    font-size:18px;
                    color:#666;
                }
                .jobBrand{
                    height:0.14rem;
                    line-height:0.14rem;
                    margin-left:0.4rem;
                    margin-top:0.05rem;
                    border:1px solid red;
                    padding:0.02rem 0.04rem;
                    border-radius:0.06rem;
                    color:red;
                    font-size:0.1rem
                }
                .brand{
                    display:flex;
                    align-items:center;
                }
                .jobTime{
                    margin-left:0.4rem;
                    color:#ff473d;
                    font-size:15px;
                }
                .jobInfo{
                    display:flex;
                    justify-content:space-between;
                }
                .jobSign{
                    width:1.4rem;
                    overflow:hidden;
                    white-space:nowrap;
                    text-overflow:ellipsis;
                    font-size:13px;
                }
                .brandImg{
                    width:0.25rem;
                    height:0.25rem;
                }
                .jobLocation{
                    font-size:13px;
                    margin-right:0.1rem;
                }
                .brandTitle{
                    font-size:12px;
                    height:0.3rem;
                    line-height:0.3rem;
                    margin-left:0.06rem;
                }
                .sendTime{
                    margin-left:1.2rem;
                    font-size:12px;
                }
    }

`