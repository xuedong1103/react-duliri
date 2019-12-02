import styled from "styled-components"
export const MineContainer = styled.div`
    width:100%;
    margin-bottom:0.44rem;
    overflow-y:auto;
    border-top:1px solid #000;
    .iconRight{
        position:absolute;
        right:0.1rem;
        top:40%;
        color:#999;
    }
    .gridContainer{
        border-top:0.1rem solid #f5f5f5;
        width:100%;
        height:100%;
        .sub-title {
            color: #888;
            font-size: 14px;
            padding: 15px 0 9px 15px;
        }
        .not-square-grid .am-grid-icon {
            width: 40px;
            height: 60px;
        }
    }
`