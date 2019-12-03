import styled from "styled-components"

export const PersonInfoContainer = styled.div `
    font-size:15px;
    width:100%;
    height:1.8rem;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding:0 .15rem;
    background-color:red;
    .view{
        width:100%;
        display:flex;
        justify-content:space-between;
        font-weight:600;
        margin-top:.1rem;

    }
    .tou{
        width:100%;
        display:flex;
        justify-content:center;
        align-content:center;
        align-items:center;
        /* background-color:skyblue; */
        i{
            font-size:.7rem;
        }
    }
`
export const InfoContent = styled.div `
    font-size:15px;
    width:100%;
    display:flex;
    flex-direction:column;
    ul{
            width:100%;
        .am-wingblank.am-wingblank-lg {
            margin-left: 0px;
            margin-right: 0px;
            margin-top:.1rem;
            }

        .am-wingblank {
            margin-left: 0px;
            margin-right: 0px;
         }
         .am-image-picker{
             background-color:#fff;
         }
        li{
            padding:0 .15rem;
            background-color:#fff;
            width:100%;
            height:.8rem;
            display:flex;
            justify-content:space-between;
            align-content:center;
            align-items:center;
            margin-top:.1rem;
            &>div:nth-of-type(1) {
                height:100%;
                font-weight:600;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
            } 
            &>div:nth-of-type(2) span{
                border:3px solid #f5f5f9;
                padding:.1rem;
                border-radius:50%;
            }
        }
    }
`