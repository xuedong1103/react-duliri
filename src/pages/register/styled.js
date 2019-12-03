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
        flex:1;
        background-color:pink;
    }
`
