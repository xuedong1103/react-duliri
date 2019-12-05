import styled from "styled-components"

export const DivContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:#fff;
    padding: 9px 8px 0;
    &>span:nth-of-type(1){
        font-weight:600;
    }
    &>span:nth-of-type(2){
        color:#B2B2B2;
        font-weight:600;
    }
`