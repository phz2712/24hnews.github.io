import styled from 'styled-components'
import Form1 from '../image/formnews1.png';
import Form2 from '../image/formnews2.png';
import Hotkey from '../image/hotkey.png'
import Link from '../image/link1.png'
import Link2 from '../image/link2.png'

export const StyleDiv = styled.div`
    /* position: absolute; */
    @media (min-width: 1023px) {
      
    }
    .listType{
        display: flex;
    }
    .type1{
        background-image: url(${Form1});
        background-position: right;
        padding-right: 6px;
        padding-bottom: 6px;
        background-size: cover;
        padding-top: 2px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 13px;
        color: #ffffff;
        font-weight: bold;
        line-height: 20px;
    }
    .type2{
        background-image: url(${Form2});
        padding-right: 3px;
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
    }
    .title{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 14px;
        font-weight: bold;
        background-color: orange;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-top: 5px;
    }
    .headimg{
        background-image: url(${Form1});
        padding-left: 4px;
        padding-bottom: 6px;
        background-size: cover;
        text-align: top;
    }
    .contentimg{
        padding-left: 10px;
        padding-right: 10px;
        width: calc(100% - 120px);
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        
    }
    .ctn{
        background-color: blue;
        max-height: 80px;
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
        font-size: 11px;
        color: #777777;
        /* margin-left: -10px; */
    }
    .hotkey span{
        margin-left: -5px;
    }
    .groupimg{
        margin-top: 10px;
        display: flex;
        background-color: yellow;
        
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
    }
    .link li{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 12px;
        margin-left: 8px;
        list-style-image: url(${Link});
        list-style-position: inside;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .link2{
        background-color: #D5ECAB;
        width: 100%;
    }
    .link2 li{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 12px;
        margin-left: 5px;
        list-style-image: url(${Link2});
        list-style-position: inside;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .link2 span{
        margin-left: -2px;
    }
`