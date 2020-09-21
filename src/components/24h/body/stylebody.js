import styled from 'styled-components';
import Video from '../image/video.png';
import Ck from '../image/icon_topck.png';
import Phunu from '../image/phunu.png';
import LiPhunu from '../image/liphunu.png';
import LiDoanhNghiep from '../image/doanhNghiep.png';

export const StyleDiv = styled.div`

    @media (max-width: 315px){
        .titleDoanhNghiep{
            display: none;
        }
        .group_newsDoanhNghiep{
            display: none;
        }
        .tableCk{
            display: none;
        }
        .groupNews + .title2{
            display: none;   
        }
        .smallCk{
            display: none;
        }
    }
    @media (min-width: 1023px) {
        .content{
            margin-left: 0px;
            width: 1011px;
        }
        .smallVideo{
            height: 75px;
            width: 130px;
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
        .smallCk{
            div{
                font-size: 13px;
            }
        }
        .formnews{
            height: 264px;
        }
        .group-button{
            display: flex;
        }
        .smallCk{
            display: flex;
        }
        .tableCk{
            display: flex;
        }
        .content1{
            width: 70%;
            margin-right: 1px;
        }
        .content2{
            width: 29.9%;
        }
        .listVideo{
            flex-direction: column;
            width: 290px;
        }
        &.cover{
            height: 4933px;
        }
        .groupNews{
            /* flex-direction: column; */
            /* .formnews{
                width: 50%;
            } */
        }
        .group_newsDoanhNghiep{
            width: 1011px;
            ul{
                width: 1000px;
            }
        }
        .gotohome{
            width: 1004px;
        }
        .groupVideo{
            height: 330px;
        }
        .price{
            margin-left: 16px;
            margin-right: 16px;
        }
        .mainVideo{
            width: 58.5%;
            video{
                width: 400px;
            }
        }
        .normal3{
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
        }
        .titleSmallVideo{
            width: 115px;
            height: 75px;
        }
        .slick-dots li{
            display: none;
        }
        .tableCk{
            margin-top: 10px;
            width: 290px;
            height: 75px;
            background-color: #FaFaFa;
            border: solid 1px #EDEDED;
            border-radius: 5px;
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
        .normal1{
            .formnews{
                width: 50%;
            }
        }
        .normal4{
            .ctn{
                display: none;
            }
            img{
                height: 75px;
                width: 100px;
            }
            .a2{
                display: none;
            }
            .title1{
                display: inline;
                
            }
        }
    }
    @media only screen and (max-width: 1022px) and (min-width: 316px){
        .tableCk{
            display: flex;
        }
        .smallCk{
            display: flex;
        }
    }
    @media (max-width: 1022px) {
        .top1 .b1{
            .headimg{
                display: none;
            }
            .type1{
                background-color: #78b43d;
                font-size: 20px;
                padding: 7px;
                position: absolute;
                margin: 10px;
            }
            .type2{
                display: none;
            }
            .contentimg{
                width: 100%;
            }
            .a2{
                display: none;  
            }
            .ctn{
                font-size: 18px;
                height: 65px;
            }
            .hotkey{
                font-size: 14px;
            }
            .link{
                li{
                    font-size: 16px;
                    height: 45px;
                }
            }
            .link2{
                display: none;
                li{
                    font-size: 16px;
                    height: 45px;
                }
            }
            .title1{
                display: block;
                font-weight: bold;
                font-size: 24px;
                line-height: 25px;
                height: 75px;
            }
            .groupimg{
                display: inline;
                img{
                    width: 100%;
                }
            }
            .formnews{
                height: auto;
                
            }
        }
        .smallVideo{
            height: 75px;
            width: 170px;
        }
        .group-button{
            display: none;
        }
        .smallCk{
            div{
                font-size: 17px;
            }
        }
        .slick-dots li button:before{
            color: gray;
        }
        .slick-dots li.slick-active button:before{
            color: #D2577E;
        }
        .normal4{
            margin-bottom: 30px;
            width: 94%;
            
            .a2{
                display: inline;
                font-size: 20px;
                font-weight: bold;
                
            }
            .title1{
                display: none;
            }
            .groupimg{
                display: inline;
                img{
                    width: 100%;
                    margin-left: 20px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                }
               
            }
            .contentimg{
                display: none;
            }
            .ctn{
                font-size: 18px;
            }
            .link{
                li{
                    font-size: 16px;
                    line-height: 20px;
                }
            }
        }
        .tableCk{
            margin-top: 10px;
            width: 100%;
            height: 100px;
            background-color: #FaFaFa;
            border: solid 1px #EDEDED;
            border-radius: 5px;
            font-size: 17px;
        }
        .ckTh1{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600px;
            font-weight: bold;
            margin: 5px;
        }
        .ckTh{
            font-family: Arial, Helvetica, sans-serif;
            font-weight: 600px;
            margin: 5px;
            margin-left: 8px;
            margin-right: 8px;
            text-align: right;
        }
        .NMB1{
            border-top: solid 1px #EBEBEB;
            margin-top: 5px;
            .groupimg{
                img{
                    width: 100px;
                }
            }
            .contentimg .type3{
                display: inline;
                color: #78b43d;
            }
            .listType{
                display: none;
            }
            .title1{
                height: 58px;
                display: block;
                font-size: 18px;
                line-height: 18px;
            }
            .a2{
                display: none;  
            }
            .headimg{
                display: none;
            }
            .link{
                display: none;
            }
            .ctn{
                display: none;
            }
            .link2{
                display: none;
            }
        }
        .NMB{
            border-top: solid 1px #EBEBEB;
            margin-top: 5px;
            .groupimg{
                img{
                    width: 100px;
                }
            }
            /* .contentimg .type3{
                display: inline;
                color: #78b43d;
            } */
            .listType{
                display: none;
            }
            .title1{
                height: 58px;
                display: block;
                font-size: 18px;
                line-height: 18px;
                font-weight: bold;
            }
            .a2{
                display: none;  
            }
            .headimg{
                display: none;
            }
            .link{
                display: none;
            }
            .ctn{
                display: none;
            }
            .link2{
                display: none;
            }
        }
        .groupWeather{
            .table{
                .a01 span, .th1, .a1, .a2, .a01 div{
                    font-size: 16px;
                }
            }
        }
        .NMB2{
            margin-top: 5px;
            .contentimg .type3{
                display: none;
                color: #78b43d;
            }
            .cover .b2{
                display: inline;
            }
            .addWatch{
                display: block;
                padding: 10px;
                background-color: #EBEBEB;
                text-align: center;
                font-size: 16px;
                font-family: Arial, Helvetica, sans-serif;
                font-weight: 400px;
                width: 100%;
            }
            .type1{
                color: #ffffff;
                background-color: #78b43d;
                padding: 15px;
                height: 45px;
                font-size: 18px;
            }
            .type2{
                background-image: none;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                /* display: none; */
                /* padding: 2px; */
                /* margin: 8px; */
                div{
                    padding: 8px;
                    font-size: 16px;
                    border-left: solid 2px #E4EADE;
                    color: gray;
                }
                
            }
            .listType{
                flex-direction: column;
                span{
                    background-color: #ECF5E2;
                    height: 45px;
                    padding: 5px
                }
            }
            .ctn{
                font-size: 18px;
                height: 65px;
            }
            .a2{
                display: block;
                font-size: 24px;
                line-height: 25px;
                height: 75px;
            }
            .headimg{
                display: none;
            }
            .contentimg .b1{
                display: none;
            }
            .link{
                li{
                    font-size: 16px;
                    height: 45px;
                    margin: 10px;
                }
            }
            .link2{
                display: none;
            }
        }
        .gotohome{
            display: none;
        }
        .hideMB{
            display: none;
        }
        .content0{
            flex-direction: column;
            width: auto;
        }
        .groupVideo{
            flex-direction: column;
            height: auto;
        }
        .titleDoanhNghiep{
            display: none;
        }
        .groupListVideo{
            flex-direction: column;
        }
        .groupWeather{
            flex-direction: column;
        }
        
        .listVideo{
            width: 100%;
            flex-direction: row;
        }
        .price{
            margin-left: 0px;
            margin-right: 0px;
        }
        .blank{
            display: none;
        }
        .content{
            width: 100%;
        }
        .content1{
            width: 100%;
        }
        .content2{
            width: 100%;
        }
        .cover{
            height: auto;
        }
        .groupNews{
            flex-direction: column;
            .formnews{
                width: 100%;
            }
        }
        .group_newsDoanhNghiep{
            display: none;
        }
        .gotohome{
            width: 100%;
        }
        .mainVideo{
            width: 100%;
            video{
                width: 100%;
            }
        }
    }
    &.cover{
        max-width: 100%;  
        background-color: brown;
        display: flex;
        /* justify-content: center; */
    }
    .content{
        background-color: #ffffff;
        /* width: 75.4%; */
        /* width: 1004px; */
        .content0{
            display: flex;
            
        }
    }
    .qc1{
        margin-top: 10px;
        margin-left: 5px;
    }
    .dot{
            height: 15px;
            width: 15px;
            background-color: #bbb;
            border: solid 1px;
            border-radius: 50%;
            display: inline-block;
        }
    .formnews{
        /* width: calc(100% - 6px); */
        width: 100%;
        /* flex-grow:1; */
        background-color: #ffffff;
        padding: 3px;
    }
    .top1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* flex-wrap: no-wrap; */
        /* flex-direction: column; */
        /* .formnews{
            width: 50%;
        } */
    }
    .normal1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        margin-left: 0px;
        /* height: 800px; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
        /* .formnews{
            width: 50%;
        } */
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
    .qc3{
        margin-top: 30px;
    }
    .qc4{
        margin-top: 30px;
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
        .hotkey{
            display: none;
        }
        .link2{
            display: none;
        }
        .link{
            background-color: #ffffff;
            li{
                height:40px;
                list-style-image: url(${LiPhunu});
            }
        }
        .formnews{
            height: auto;
            /* display: ${props => props.disabled ? "inline" : "none"}; */
        }
        .contentimg{
            width: calc(100% - 100px);
        }
    }   
    .normal5{
        /* display: flex;
        flex-direction: column;
        flex-wrap: wrap; */
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
        /* width: 70%; */
        /* background-color: blueviolet; */
        /* display: flex; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .content2{
        padding: 6px;
        /* width: 30%; */
        /* background-color: greenyellow; */
    }
    .blank{
        flex-grow: 1;
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
        background-color: #ffffff;
        margin-top: 10px;
        display: flex;
        
    }
    .mainVideo{
        background-color: #ffffff;
        
        display: flex;
        flex-direction: column;
        border-right: 1px solid #dddddd;
        padding-right: 5px;
        video{
            height: 225px;
        }
    }
    .titleVideo{
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 600px;
        line-height: 20px;
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
        display: flex;
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
    .smallCk{
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
        height: 210px;
        background-color: #FFF1D9;
       
        ul{
            margin-left: 30px;
            /* height: 210px; */
        }
    }
    .gotohome{
        text-align: right;
        img{
            margin-top: 15px;
            margin-left: 5px;
        }
    }
`
export const StyleDiv2 = styled.div`
    @media (max-width: 1022px){
        display: block;
    }
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