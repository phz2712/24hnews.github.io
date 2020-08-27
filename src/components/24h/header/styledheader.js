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
        height: 50px;
        background-color: #78b43d;
        display:flex;
        align-items: center;
        margin: 0;
        width:74.6%;
        position: fixed;
        ${'' /* z-index: 2; */}
        ${'' /* flex-grow:1; */}
    }
    .blank{
        ${'' /* flex-grow: 3.5; */}
    }
    .group_icon{
        ${'' /* background-color: yellow; */}
        display: inline-flex;
        justify-content: center;
        flex-direction: column;
        height: 100%;
        align-items:center;
        text-align: center;
        margin-bottom:-3px;
        min-width: 50px;
        white-space: nowrap;
        ${'' /* position: absolute; */}
        :hover + .listTitle{
            display: inline;
        }
        ${'' /* :hover{
            background-color: #609A26;
            text-decoration: underline;
        } */}
        ${'' /* z-index: -1; */}
    }
    .group-title{
        color: #FFFFFF;
        display: flex;
        height: 100%;
        flex-direction: column;
        :hover{
            background-color: #609A26;
            text-decoration: underline;
        }
    }
    .between{
        flex-grow:1;
    }
    .listTitle{
        display: none;
        margin-top: 9px;
        :hover {
            display: inline;
        }
        ${'' /* position: absolute; */}
    }
    .icon{
        margin-top: -3px;
        margin-right: 15px;
    }
    .icon-menu{
        margin-top: 4px;
        ${'' /* position: fixed; */}
        background-color: blue;
        margin-right: 15px;
        :hover + .listTitle{
            display: inline;
        }
    }
    .icon-menu + .listTitle{
        margin-top: 7px;
        margin-left:-300px;
    }

    .typeSearch{
        position: absolute;
        margin-left:178px;
        padding: 5px;
        padding-left: 10px;
        ${'' /* margin-top: 9px; */}
        height: 42px;
        width: 770px;
        font-size:14px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 20px;
        font-weight: 400px;
        border: none;
        display: none;
        :hover{
            display: inline;
        }
    }
    .icon-search{
        ${'' /* flex-grow: 1; */}
        text-align: right;
        margin-right:14px;
        :hover + .typeSearch{
            display: inline;
        }
    }
    .icon2{
        margin-bottom: -17px;  
        margin-left: 1px; 
        ${'' /* white-space: nowrap; */}
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
        margin-left: 5px;
        ${'' /* white-space: nowrap; */}
    }
`