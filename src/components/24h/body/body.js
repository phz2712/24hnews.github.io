import React from 'react';
import {StyleDiv} from './stylebody';
import Formnews from './formnews';

function Body(props) {
    return(
        <StyleDiv className='cover'>
            <div className='blank'></div>
                <div className='content'>
                    <div className='content1'>
                        <span className='top1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                    </div>
                    <div className='content2'>abc</div>
                </div>
            <div className='blank'></div>
        </StyleDiv>
    )
}

export default Body ;