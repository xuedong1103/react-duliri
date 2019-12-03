import styled from "styled-components"

export const ChangContainer = styled.div`
    width:100%;
    height:.52rem;
    background-color:#fff;
    border-top:1px solid rgb(243, 243, 243);
    ul{

        width:100%;
        height: 100%;
        display: flex; 
        justify-content: space-between;
        align-items: center;
        .active{
            color:red;
            border-bottom:1px solid red;
        }
    }
    li{
        width:100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
            font-size: 15px;
        }
    }
`