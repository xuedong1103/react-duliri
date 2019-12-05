import styled from "styled-components";
export const HomeContainer = styled.main`
    width:100%;
    height:100%;
    .title{
        width:100%;
        height:0.44rem;    
        font-size:0.16rem;
        line-height:0.44rem;
        display:flex;
        align-items:center;
        border-bottom:1px solid #e8e8e8;
        position:relative;
        z-index:1;
        background:#fff;
        .location{
            height:100%;
            margin-left:0.15rem;
        }
        
        .inputBtn{
            width:1.2rem;
            height:0.24rem;
            border:1px solid #f3f4f5;
            line-height:0.24rem;
            font-size:14px;
            color:#999;
            padding-left:0.5rem;
            margin-left:0.6rem;
            border-radius:0.1rem;
            position:relative;
            background:#f3f4f5;
        }
            .am-icon{
                position:absolute;
                left:0.3rem;
                top:0.04rem;
               
            }
    }
        .listContainer{
            width:100%;
            overflow-y:auto;
            
        }
        .banner{
            width:100%;
            height:1.1rem;
            overflow:hidden;
            touch-action: none; 
            position:relative;
            z-index:1;
            ant-carousel{
                height:1.1rem;
                box-sizing:border-box;
                
            }
            .am-wingblank{
                margin:0;
            }
        }
            nav{
                width:100%;
                height:0.4rem;
                font-size:0.12rem;
                display:flex;
                justify-content:space-around;
                border-bottom:1px solid #ccc;
                padding-top:0.05rem;
                padding-bottom:0.05rem;
                position:relative;
                z-index:1;
                background:#fff;

                div{
                    cursor:pointer;
                    display:flex;
                    flex-direction:column;
                    align-items:center;
                    color:#999;
                }
                img{
                    margin-top:0.04rem;
                    width:0.2rem;
                    height:0.2rem;
                   
                }
            }
        section{
            width:100%;
            height:100%;
            background:#f5f5f9;
            border-bottom:2px solid #f5f5f9;
        }
        .tabContent{
            width:100%;
            height:100%;
        }
        .contentTitle{
            width:100%;
            height:0.5rem;
            font-size:0.16rem;
            display:flex;
            align-items:center;
            position:relative;
            background:#fff;
            z-index:1;
            border-bottom:0.05rem solid #f5f5f9;
            a{
                margin-left:0.1rem;
                color:#333;
               
               
            }
        }`
    /* .content{
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
                    color:#333;
                }
                .jobTitle{
                    font-size:18px;
                    color:#333;
                }
                .jobBrand{
                    height:0.2rem;
                    line-height:0.2rem;
                    margin-left:0.6rem;
                    margin-top:0.05rem;
                    border:1px solid red;
                    padding:0rem 0.03rem;
                    border-radius:0.06rem;
                    color:red;
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
                    font-size:14px;
                    height:0.3rem;
                    line-height:0.3rem;
                    margin-left:0.04rem;
                }
                .sendTime{
                    margin-left:1.2rem;
                    font-size:12px;
                }
    }` */