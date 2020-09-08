import React from 'react';
import {StyleDiv} from './styleformnews';
import Hinh from '../image/hinh.jpg';

function Formnews (props) {
    return(
        <StyleDiv className='cover'>
            <div className="listType">
                <div className='headimg'></div><div className='type1'><div>1234fdgdfdf</div></div>
                <div className='type2'><div>1234fdgdfdf</div></div>
                <div className='type2'><div>1234fdgdfdf</div></div>
            </div>
            <div className='title a2'>Báo chí aaaaa aaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
            <div className='groupimg'>
                <img alt='hinh' src={Hinh}></img>
                <span className='contentimg'>
                    <div className='title title1'>Báo chí aaaaa aaaaaaaaaaa aaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa</div>
                    <span className='ctn'>abc</span>
                    <li className='hotkey'>
                        <span>Hotkey</span>
                    </li>
                </span>
            </div>
            <div className='link'>
                <li><span>abc</span></li>
                <li><span>abc</span></li>
                <li><span>abcdddddddddddddddddddddddd ddddddddddddddddddddddddddddddddddddddddddddddddddddd</span></li>
            </div>
            <div className='link2'>
                <li><span>abc</span></li>
                <li><span>abc</span></li>
            </div>
        </StyleDiv>
    )
}

export default Formnews ;