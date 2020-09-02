import styled from 'styled-components'


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
        height: 1300px;
     
    }
    .content{
        background-color: #ffffff;
        display: flex;
        /* width: 75.4%; */
        width: 1011px;
    }
    .formnews{
        /* width: calc(100% - 6px); */
        width: 100%;
        /* flex-grow:1; */
        height: 260px;
        background-color: #ffffff;
        margin: 2px;
    }
    .top1{
        width: 100%;
        display: flex;
        margin-top: 3px; 
        /* flex-wrap: no-wrap; */
        /* flex-direction: column; */
    }
    .normal1{
        width: 49.4%;
        display: flex;
        margin-top: 3px; 
        height: 1000px;
        flex-direction: column;
        flex-wrap: wrap;
    }
    .content1{
        margin: 2px;
        width: 70%;
        background-color: blueviolet;
        /* display: flex; */
        /* flex-direction: column; */
        /* flex-wrap: wrap; */
    }
    .content2{
        margin: 2px;
        width: 30%;
        background-color: greenyellow;
    }
    .blank{
        flex-shrink: 4;
    }
`