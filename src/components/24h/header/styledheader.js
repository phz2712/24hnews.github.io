import styled from 'styled-components'

export const StyleDiv = styled.div`
    &.cover{
        width: 100%;
        height: 50px;   
        background-color: #78b43d;
        display: flex;
        justify-content: center;
    }
    &.content{
        ${'' /* width: 74.6%; */}
        height: 100%;
        background-color: #78b43d;
        display:flex;
        align-items: center;
        margin: 0;
        flex-grow:1;
    }
    .blank{
        flex-grow: 3.5;
    }
    .group_icon{
        ${'' /* background-color: yellow; */}
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        max-height: 100%;
        align-items:center;
        text-align: center;
        margin-bottom:-3px;
        min-width: 50px;
    }
    .icon{
        margin-top: -3px;
        margin-right: 15px;
    }
    .icon-menu{
        margin-top: -1px;
        margin-right: 15px;
    }
    .icon-search{
        flex-grow: 1;
        text-align: right;
        margin-right:14px;
    }
    .icon2{
        margin-bottom: -17px;  
        margin-left: -1.5px; 
    }
    ${'' /* .icon-span{
        background-color: blue;
    } */}
    .header_title{
        margin-bottom: 0px;
        color: #FFFFFF;
        font-size:10px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 40px;
        font-weight: 400px;
        margin-right: 6.5px;
        margin-left: 5px
    }
`