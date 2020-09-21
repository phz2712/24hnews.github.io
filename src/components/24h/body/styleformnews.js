import styled from 'styled-components'
import Form1 from '../image/formnews1.png';
import Form2 from '../image/formnews2.png';
import Hotkey from '../image/hotkey.png'
import Link from '../image/link1.png'
import Link2 from '../image/link2.png'

export const StyleDiv = styled.div`
    /* position: absolute; */
    @media (min-width: 1023px) {
        .type1{
            background-image: url(${Form1});
            background-position: right;
        }
        .groupimg{
        div img{
            max-height: 90px;
            max-width: 120px;
        }
        .hotkey span{
            font-size: 11px;
        }
    }
    @media (max-width: 1022px) {
        /* .type1{
            background-image: url(${Form1});
            background-position: right;
        } */
        .hotkey span{
            font-size: 16px;
        }
        
        
        /* background-color: yellow; */
    }
    }
    
    .listType{
        display: flex;
        span{
            display: flex;
        }
    }
    .b2{
        display: none;
    }
    .addWatch{
        display: none;
    }
    .type1{
        padding-right: 6px;
        padding-bottom: 6px;
        background-size: cover;
        padding-top: 2px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 13px;
        font-weight: bold;
        line-height: 20px;
        color: #ffffff;
        cursor: pointer;
    }
    .type2{
        background-image: url(${Form2});
        padding-right: 3px;
        padding-left: 3px;
        border-radius: 3px;
        border-bottom-right-radius: 12px;
        margin-top: -0.5px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        background-repeat: no-repeat;
        font-size: 11px;
        color: #111111;
        line-height: 20px;
        margin-right: 2px;
        cursor: pointer;
    }
    .title{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        padding: 0px;
        width: 100%;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
        cursor: pointer;
    }
    .a2{
        font-size: 14px;
        font-weight: bold;
    }
    .title1{
        display: none;
    }
    .headimg{
        background-image: url(${Form1});
        padding-left: 4px;
        padding-bottom: 6px;
        background-size: cover;
        text-align: top;
        cursor: pointer;
    }
    .contentimg{
        padding-left: 10px;
        padding-right: 10px;
        width: calc(100% - 120px);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        .type3{
            display: none;
        }
    }
    .ctn{
        /* background-color: blue; */
        max-height: 58px;
        /* white-space: nowrap; */
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 13px;
    }
    .hotkey{
        list-style-image: url(${Hotkey});
        list-style-position: inside;
        overflow: hidden;
        text-overflow: ellipsis;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        color: #777777;
        height: 18px;
        cursor: pointer;
        /* margin-left: -10px; */
    }
    .hotkey span{
        margin-left: -5px;
    }
    .groupimg{
        margin-top: 10px;
        display: flex;
        /* div img{
            max-height: 90px;
            max-width: 120px;
        } */
        /* background-color: yellow; */
    }
    .cover{
        /* position: absolute; */
    }
    .type1 div{
        margin-top: -3px;
    }
    .link{
        background-color: #EAF8D2;
        width: 100%;
        margin-top: 2px;
        li{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400px;
            font-size: 12px;
            margin-left: 8px;
            list-style-image: url(${Link});
            list-style-position: inside;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 18px;
            cursor: pointer;
        }
    }
    .link2{
        background-color: #D5ECAB;
        width: 100%;
        li{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400px;
            font-size: 12px;
            line-height: 17px;
            font-weight: bold;
            margin-left: 5px;
            list-style-image: url(${Link2});
            list-style-position: inside;
            overflow: hidden;
            text-overflow: ellipsis;
            height: 20px;
            cursor: pointer;
        }
        span{
            margin-left: -2px;
        }
    }
`