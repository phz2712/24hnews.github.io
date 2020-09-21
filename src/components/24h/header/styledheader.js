import styled from 'styled-components'

export const StyleDiv = styled.div`
    
    @media (max-width: 290px) {
        .icon{
            height: 30px;
            width: 54px;
        }
        .group_icon{
            display: none
        }
        /* .between{
            display:none;
        } */
    }
    @media (max-width: 1022px) {
        .disappear{
            display: none;
        }
        .NHA{
            display: none;
        }
        .content{
            width: 100%;
        }
        .hidden{
            visibility: hidden;
        }
        
    }
    @media (min-width: 1023px) {
        .disappear{
            display: inline-block;
        }
        .nha{
            display: none;
        }
        .header_title{
            text-transform: uppercase;
        }
        .hide{
            display: none;
        }
        .between{
            width: 48px;
        }
        .group-title{
            :hover{
            background-color: #609A26;
            text-decoration: underline;
            }
        }
        .content{
            margin-left: 17px;
        }
    }
    .menu{
        /* :hover + .titleMobi{
            display: inline;
        } */
        body{
            display: none;
        }
    }
    .right{
        align-items: right;
        text-align: right;
    }
    .titleMobi{
        /* display:none; */
        width: 100%;
        margin-top:60px;
        margin-left: -100%;
        :hover {
            display: inline;
        }
    }
    &.cover{
        max-width: 100%;
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
        position: absolute;
        ${'' /* z-index: 2; */}
        /* flex-grow:1; */
    }
    .height{
        height: 100%;
        /* margin-left: auto; */
        /* margin-right: auto; */
    }
    .blank{
        /* flex-grow: 3.5;  */
        /* display:none; */
        /* flex-shrink: 4; */
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
        /* align-items: center; */
        
    }
    .between{
        flex-grow:1;
        /* width: 48px; */
    }
    .flex{
        display: flex; 
        flex-direction: column;
    }
    /* .listTitle2{
        position: absolute;
        width: 230px;
    } */
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
        ${'' /* background-color: blue; */}
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
        width: calc(100% - 250px);
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
export const DivMobi = styled.div`
    display: ${props => props.show===true? 'inline': 'none'}
`