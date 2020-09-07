import styled from 'styled-components'
import Video from '../image/video.png'
import SmallVideo from '../image/video1.jpg'
import Ck from '../image/icon_topck.png'

export const StyleDiv = styled.div`
    @media (min-width: 1023px) {
        .content{
            margin-left: 0px;
        }
    }
    &.cover{
        max-width: 100%;  
        background-color: brown;
        display: flex;
        justify-content: center;
        height: 5000px;
     
    }
    .content{
        background-color: #ffffff;
        display: flex;
        /* width: 75.4%; */
        width: 1011px;
    }
    .formnews{
        /* width: calc(100% - 6px); */
        width: 99%;
        /* flex-grow:1; */
        height: 260px;
        background-color: #ffffff;
        margin: 3px;
    }
    .top1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* flex-wrap: no-wrap; */
        /* flex-direction: column; */
    }
    .normal1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* height: 800px; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .normal1 .link2{
        display: none;
    }
    .normal1 .link{
        background-color: #ffffff;
    }
    .normal2{
        width: 100%;
    }
    .normal2 .link2{
        display: none;
    }
    .normal2 .link{
        background-color: #ffffff;
    }
    .normal3 .listType{
        display: none;
    }
    .normal3 .title{
        display: none;
    }
    .normal3 .hotkey{
        display: none;
    }
    .normal3 .link{
        display: none;
    }
    .normal3 .link2{
        display: none;
    }
    .normal3 .formnews{
        height: auto;
    }
    .normal3 img{
        height: 75px;
        width: 100px;
    }
    .normal3 .contentimg{
        width: calc(100% - 100px);
    }
    .content1{
        margin: 2px;
        width: 70%;
        /* background-color: blueviolet; */
        /* display: flex; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .content2{
        margin: 2px;
        width: 30%;
        /* background-color: greenyellow; */
    }
    .blank{
        flex-shrink: 4;
    }
    .headVideo{
        margin-top: 10px;
        width: 100%;
        /* background-color: green; */
        /* border-color: #78b43d; */
        /* border-style: ridge; */
        border-bottom: solid #78b43d 2px;
        /* border-width: 3px; */
    }
    .headVideo li{
        /* margin-left: 10px; */
        list-style-image: url(${Video});
        list-style-position: inside;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 700px;
        line-height: 34px;
        text-transform: uppercase;
        font-size: 17px;
        font-weight: bold;
        color: #78b43d;
    }
    .groupVideo{
        width: 100%;
        height: 330px;
        background-color: #ffffff;
        margin-top: 10px;
        display: flex;
        
    }
    .mainVideo{
        background-color: #ffffff;
        width: 58.5%;
        display: flex;
        flex-direction: column;
        border-right: 1px solid #dddddd;
        padding-right: 5px;
    }
    .mainVideo video{
        width: 403px;
        height: 220px;
    }
    .titleVideo{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 18px;
        font-weight: bold;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 50px;
    }
    .videoContent{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .listVideo{
        width: 300px;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }
    .listVideo::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    .listVideo::-webkit-scrollbar-track {
        background: #f5f5f5; 
    }
    
    /* Handle */
    .listVideo::-webkit-scrollbar-thumb {
        background: #f5f5f5; 
        box-shadow: inset 0 0 2px grey; 
        border-radius: 10px;
    }
    .groupListVideo{
        display: flex;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }
    .smallVideo{
        height: 75px;
        width: 130px;
        background-image: url(${SmallVideo});
        background-position: center center;
        background-size: cover;
        margin-right: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .titleSmallVideo{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 13px;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .groupWeather{
        display: flex;
        margin-top: 5px;
    }
    .table{
        margin-top: 8px;
        width: 100%;
        background-color: #ffffff;
    }
    .price{
        margin-left: 16px;
        margin-right: 16px;
    }
    .table span{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 11px;
        font-weight: bold;
        color: #ffffff;
        padding: 3px;
        padding-right: 6px;
    }
    .childTable{
        margin-top: -1px;
        width: 100%;
        /* border-top: solid #78b43d 1px; */
        border-bottom: solid #E7E7E7 1px;
        border-right: solid #E7E7E7 1px;
        border-left: solid #E7E7E7 1px;
    }
    .a01{
        display: inline-flex;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 11px;
        font-weight: bold;
        color: #2C90D0;
    }
    .a01 .a011{
        /* margin-left: 10px; */
        margin-right: 10px;
    }
    .a01 .a012{
        margin-left: 10px;
        /* margin-right: 10px; */
    }
    .a01 div{
        /* display: flex; */
        margin-left: 40px;
        margin-top: 2px;
    }
    .a01 img{
        margin-top:-2px;
    }
    .tr{
        display: flex;
        /* margin: 3px; */
    }
    .golden .childTable{
        border-top: solid #E3B014 1px;
    }
    .golden span{
        background-color: #E3B014;
    }
    .price .childTable{
        border-top: solid #08B089 1px;
    }
    .price span{
        background-color: #08B089;
    }
    .weather .childTable{
        border-top: solid #2C90D0 1px;
    }
    .weather span{
        background-color: #2C90D0;
    }
    .th2{
        display: flex;
       
        /* justify-content: center; */
    }
    .th2 img{
        width: 15px;
        height: 15px;
        margin-right: 5px;
    }
    .th2 .a2{
        color: grey;
    }
    .th2 div{
        
        margin: 1px;
        margin-left: 2px;
    }
    .tr .th{
        margin-right: 3px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 11px;
        /* display: flex; */
        width: 100%;
        background-color: #ffffff;
        padding-left: 10px;
        padding-top: 3px;
    }
    .th1{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 400px;
        font-size: 11px;
        background-color: #E7E7E7;
        padding-left: 5px;
        padding-right: 5px;
        padding-top: 4px;
        /* padding: 3px; */
    }
    .title2{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 17px;
        color: #78b43d;
        font-weight: bold;
        line-height: 30px;
        text-transform: uppercase;
        margin-top: 10px;
        border-bottom: solid #78b43d 2px;
    }
    .ck{
        list-style-image: url(${Ck});
        list-style-position: inside;
    }
    .tableCk{
        margin-top: 10px;
        width: 290px;
        height: 75px;
        background-color: #FaFaFa;
        border: solid 1px #EDEDED;
        border-radius: 5px;
    }
`