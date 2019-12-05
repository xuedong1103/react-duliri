import styled from "styled-components"

export const LoginContainer = styled.div `
    display:flex;
    flex-direction:column;
    width:100%;
    height:100%;
    .logo{
        width: 100%;
        height: 1.28rem;
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        background-color: #f5f5f9;
        position: relative;
        img{
            width: 0.62rem;
            height:0.62rem;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-size: contain;
        }
    }
    .changeLoRe{
        width:100%;
        display:flex;
        flex-direction:column;
        flex:1;
        /* background-color:pink; */
        ul{
            display:flex;
            width:100%;
            height:.52rem;
            background-color:#fff;
            border-top:1px solid rgb(243, 243, 243);
            .active{
            color:red;
            border-bottom:1px solid red;
        }
            li{
                width:100%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content:center;
                align-items: center;
                font-size:15px;
                font-weight:600;
                a{
                    width:100%;
                    height:100%;
                    text-align:center;
                    line-height:.52rem;
                }
            }
        }
        .box{
            flex:1;
        }
        
    }
`
