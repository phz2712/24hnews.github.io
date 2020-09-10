import styled from 'styled-components';
import Video from '../image/video.png';
import SmallVideo from '../image/video1.jpg';
import Ck from '../image/icon_topck.png';
import Phunu from '../image/phunu.png';
import LiPhunu from '../image/liphunu.png';
import LiDoanhNghiep from '../image/doanhNghiep.png';

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
        height: 4733px;
     
    }
    .content{
        background-color: #ffffff;
        /* width: 75.4%; */
        width: 1011px;
        .content0{
            display: flex;
            width: 1011px;
        }
    }
    .formnews{
        /* width: calc(100% - 6px); */
        width: 100%;
        /* flex-grow:1; */
        height: 260px;
        background-color: #ffffff;
        padding: 3px;
    }
    .top1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* flex-wrap: no-wrap; */
        /* flex-direction: column; */
        .formnews{
            width: 50%;
        }
    }
    .normal1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* height: 800px; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        .formnews{
            width: 50%;
        }
        .link2{
        display: none;
        }
        .link{
        background-color: #ffffff;
        }
    }
    
    .normal2{
        width: 100%;
        .link2{
            display: none;
        }
        .link{
            background-color: #ffffff;
        }
    }
    .normal3{
        .listType{
            display: none;
        }
        .a2{
            display: none;
        }
        .title1{
            display: inline;
        }
        .title{
            max-height: 80px;
            /* white-space: nowrap; */
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400px;
            font-size: 13px;
            font-weight: normal;
            height: 60px;
        }
        .ctn{
            display: none;
        }
        .hotkey{
            display: none;
        }
        .link{
            display: none;
        }
        .link2{
            display: none;
        }
        .formnews{
            height: auto;
        }
        img{
            height: 75px;
            width: 100px;
        }
        .contentimg{
            width: calc(100% - 100px);
        }
    }  
    .normal4{
        .listType{
            display: none;
        }
        .a2{
            display: none;
        }
        .title1{
            display: inline;
        }
        .title{
            max-height: 80px;
            /* white-space: nowrap; */
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400px;
            font-size: 13px;
            font-weight: normal;
            height: 60px;
        }
        .ctn{
            display: none;
        }
        .hotkey{
            display: none;
        }
        .link2{
            display: none;
        }
        .link{
            background-color: #ffffff;
            li{
                height:36px;
                list-style-image: url(${LiPhunu});
            }
        }
        .formnews{
            height: auto;
            /* display: ${props => props.disabled ? "inline" : "none"}; */
        }
        img{
            height: 75px;
            width: 100px;
        }
        .contentimg{
            width: calc(100% - 100px);
        }
    }   
    .normal5{
        
        .listType{
            display: none;
        }
        .a2{
            display: none;
        }
        .title1{
            display: inline;
        }
        .title{
            max-height: 80px;
            /* white-space: nowrap; */
            overflow: hidden;
            text-overflow: ellipsis;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 400px;
            font-size: 13px;
            font-weight: bold;
            height: 60px;
        }
        .ctn{
            display: none;
        }
        .hotkey{
            display: none;
        }
        .link{
            display: none;
        }
        .link2{
            display: none;
        }
        .formnews{
            height: auto;
            width: 220px;
            background-color: #FFF1D9;
            margin-bottom: 5px;
            
        }
        img{
            height: 80px;
            width: 110px;
        }
        .contentimg{
            width: calc(100% - 100px);
            background-color: #FFF1D9;
        }
    }  
    .content1{
        padding: 1px;
        width: 70%;
        /* background-color: blueviolet; */
        /* display: flex; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .content2{
        padding: 4px;
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
        li{
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
        video{
            width: 400px;
            height: 225px;
        }
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
        .a011{
            /* margin-left: 10px; */
            margin-right: 10px;
        }
        .a012{
            margin-left: 10px;
            /* margin-right: 10px; */
        }
        div{
            /* display: flex; */
            margin-left: 40px;
            margin-top: 2px;
        }
        img{
            margin-top:-2px;
        }
    } 

    .tr{
        display: flex;
        /* margin: 3px; */
    }
    .golden{
        .childTable{
            border-top: solid #E3B014 1px;
        }
        span{
            background-color: #E3B014;
        }
    } 

    .price{
        .childTable{
            border-top: solid #08B089 1px;
        }
        span{
            background-color: #08B089;
        }
    } 
    .weather{
        .childTable{
            border-top: solid #2C90D0 1px;
        }
        span{
            background-color: #2C90D0;
        }
    }
    .th2{
        display: flex;
        /* justify-content: center; */
        img{
            width: 15px;
            height: 15px;
            margin-right: 5px;
        }
        .a2{
            color: grey;
        }
        div{
            margin: 1px;
            margin-left: 2px;
        }
    }
    .tr{
        .th{
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
    .titlePhuNu{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 17px;
        color: #D2577E;
        font-weight: bold;
        line-height: 30px;
        text-transform: uppercase;
        margin-top: 10px;
        border-bottom: solid #D2577E 2px;
    }
    .group-button{
        margin-top: 10px;
        display: flex;
        justify-content: center;
        div{
            height:30px;
            width: 30px;
            border: solid 1px #DDDDDD;
            margin: 2px;
            font-size: 12px;
            padding: 5px;
            text-align: center;
        }
    }
    .ck{
        list-style-image: url(${Ck});
        list-style-position: inside;
    }
    .Phunu{
        list-style-image: url(${Phunu});
        list-style-position: inside;
        
    }
    .tableCk{
        margin-top: 10px;
        width: 290px;
        height: 75px;
        background-color: #FaFaFa;
        border: solid 1px #EDEDED;
        border-radius: 5px;
        display: flex;
    }
    .smallCk{
        display: flex;
        div{
            margin-top: 10px;
            /* width: 290px;
            height: 75px; */
            background-color: #FaFaFa;
            border-radius: 5px;
            margin: 5px;
            padding: 3px;
            padding-left: 8px;
            padding-right: 8px;
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600px;
            font-size: 13px;
        }
    }
    .ckTh1{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 13px;
        font-weight: bold;
        margin: 5px;
    }
    .ckTh{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 13px;
        margin: 5px;
        margin-left: 8px;
        margin-right: 8px;
        text-align: right;
    }
    .titleDoanhNghiep{
        
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        font-size: 17px;
        color: #EF7930;
        font-weight: bold;
        line-height: 30px;
        text-transform: uppercase;
        margin-top: 10px;
        border-bottom: solid #EF7930 2px;
        .DoanhNghiep{
            margin-left: 3px;
            list-style-image: url(${LiDoanhNghiep});
        }
    }
    .group_newsDoanhNghiep{
        width: 1011px;
        height: 210px;
        background-color: #FFF1D9;
        display: flex;
        justify-content: center;
        ul{
            width: 1000px;
            margin-left: 30px;
        }
    }
    .gotohome{
        width: 1011px;
        text-align: right;
        img{
            margin-top: 15px;
            margin-left: 5px;
        }
    }
`
export const StyleDiv2 = styled.div`
    display: ${props => props.disabled === props.vl ? "inline" : "none"};
`

export const StyleButtonI = styled.div`
    display: ${props => props.disabled !== 3 ? "inline" : "none"};
`
export const StyleButtonD = styled.div`
    display: ${props => props.disabled !== 1 ? "inline" : "none"};
`

export const StyleButton = styled.div`
    background-color: ${props => props.disabled === props.vl ? "#D2577E" : "#FFFFFF"};
    color: ${props => props.disabled === props.vl ? "#FFFFFF" : "#black"};
`

export const Styleimg = styled.img`
    display: ${props => props.vl < 0 ? 'inline': 'none'}
`

export const Styleimg2 = styled.img`
    display: ${props => props.vl >= 0 ? 'inline': 'none'}
`
export const StyleCk = styled.div`
    color: ${props => props.vl >= 0 ? '#058205': '#FF0000'}
`