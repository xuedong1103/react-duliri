import styled from "styled-components"

export const RealNameBox  = styled.div`
    width:100%;
    height:.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    &>span:nth-of-type(1){
        margin-left:5px;
        font-size:20px;
    }
    &>span:nth-of-type(2){
       
        font-size:20px;
    }
    
`
export const NameId = styled.div`
    margin-top:.1rem;
    width:100%;
    background:#fff;
    /* height:1.3rem; */
    div{
        width:100%;
        height:.6rem;
        display:flex;
        justify-content:space-around;
        align-items:center;
        input{
            border:none;
        }
    }
    div:nth-of-type(1){
        border-bottom:1px solid #e7e7e7;
    }
    
`
export const UploadImg = styled.div`
        width:100%;
        &>div:nth-of-type(1){
            margin-top:.1rem;
            background-color:#fff;
            padding:0 5px;
        }
        p{
            color:#969696;
        }
        .am-wingblank.am-wingblank-lg {
                margin-left: 0;
                margin-right:0;
                background-color:#fff;
        }
`