import styled from "styled-components"

export const RegiserBox = styled.div`
  font-size:16px;
    display:flex;
    justify-content:center;
    align-content:center;
    align-items:center;
    width:100%;
    height:100%;
    /* background-color:green; */
    padding:.2rem .15rem;
    .sectionbox{
        width:100%;
        height:100%;
        /* background-color:pink; */
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        align-content:center;
        align-items:center;
        div{
            width:2.6rem;
        }
        div:nth-of-type(1) input{
            width:100%;
            background-color: transparent;
            border:none;
            outline: none;
            border-bottom: 1px solid #ddd;
        }
        div:nth-of-type(2){
            border-bottom: 1px solid #ddd;
            input{
            background-color: transparent;
            border:none;
            outline: none;
             }
             span{
             color: #ff473d;
            }
        }
       
      
        div:nth-of-type(3){
            height:.55rem;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-content:center;
            align-items:center;
            button{
            width: 2.5rem;
            height: .37rem;
            text-align: center;
            border-radius: .44rem;
            background-color: #ff4645;
            border:none;
            outline:none;
            margin: auto;
            color: #fff;
            }
            span{
                font-size:12px;
                color: #ff473d;
                font-weight:600;
            }
        }
        div:nth-of-type(4){
            text-align: center;
            font-size: 12px;
            color: #aaa;
            flex-direction:column;
            &>i{
                font-style:normal;
                color: #ff473d;
            }
        }
    }


`