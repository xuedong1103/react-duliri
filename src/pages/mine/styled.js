import styled from "styled-components"

export const MineContainer =styled.div`
    font-size:15px;
    display:flex;
    padding:.09rem .1rem;
    background-color:#fff;
    border-bottom:1px solid #e7e7e7;
    .header{
        display:flex;
        justify-content:space-between;
        align-content:center;
        align-items:center;
        width:100%;
        height:.5rem;
        &>span:nth-of-type(2){
            font-weight:600;
        }
        .icon-faxian{
            font-size:23px;
        }
        
    }

`
export const Headimage = styled.div`
    height:1.06rem;
    background-color:#fff;
    padding:.09rem .1rem;
    font-size:15px;
    display:flex;   
    justify-content:space-between;
    align-items:center;
    padding:.09rem .1rem;
    .imgbox{
        display:flex;
        align-items:center;
        &>div:nth-of-type(1) .icon-wode{
            font-size:.7rem;
        }
        &>div:nth-of-type(2){
            padding:.1rem 0;
            display:flex;
            height:.7rem;
            flex-direction:column;
            justify-content:space-around;
            button{
                border:none;
                outline:none;
                font-size: 12px;
                background-color: #ddd;
                text-align: center;
                border-radius: 11px;
                width: .7rem;
                color: #fff;
            }
        }
    }
    .r{
        font-size:20px;
        font-weight:600;
    }
`
export const Minecontent =styled.div`
    width:100%;
    display:flex;
    font-size:12px;
    background-color:#fff;
    margin-top:.1rem;
    ul{
        width:100%;
        display:flex;
        flex-wrap:wrap;
        li{
            display:flex;
            flex-direction:column;
            justify-content:space-around;
            align-content:center;
            align-items:center;
            font-size:15px;
            width:33.3%;
            height:.9rem;
            i{
                font-size:27px;
                color:green;
            }
        }
    }


`