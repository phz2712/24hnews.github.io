import React from 'react';
import {StyleDiv} from './styleformnews';
import Hinh from '../image/hinh.jpg';

function Formnews (props) {

    const type2=props.data.type2;
    let ListType2;
    if(type2 !== undefined)
    {
        ListType2=type2.map((data, index)=>
        {
            return(
                <div className='type2'><div>{data.a1}</div></div>
            );
        })
    }
    const link=props.data.link;
    let ListLink;
    if(link !== undefined){
        ListLink=link.map((data, index)=>
        {
            return(
                <li><span>{data.a1}</span></li>
            );
        })
    }
    const link2=props.data.link2;
    let ListLink2;
    if(link2 !== undefined){
        ListLink2=link2.map((data, index)=>
        {
            return(
                <li><span>{data.a1}</span></li>
            );
        })
    }

    const {title, type1, picture, content, hotkey, } = props.data;
    return(
        <StyleDiv className='cover'>
            <div className="listType">
                <div className='headimg'></div><div className='type1'><div>{type1}</div></div>
                <span>
                    {ListType2}
                </span>
            </div>
            <div className='title a2'>{title}</div>
            <div className='b2'>
                <li className='hotkey'>
                    <span>{hotkey}</span>
                </li>
            </div>
            <div className='groupimg'>
                <div><img alt='hinh' src={picture}></img></div>
                <div className='contentimg'>
                    <div className='type3'>{type1}</div>
                    <div className='title title1'>{title}</div>
                    <span className='ctn'>{content}</span>
                    <li className='hotkey b1'>
                        <span>{hotkey}</span>
                    </li>
                </div>
            </div>
            <div className='link'>
                {ListLink}
            </div>
            <div className='link2'>
                {ListLink2}
            </div>
            <div className='addWatch'>
                + Xem thêm {type1}
            </div>
        </StyleDiv>
    )
}

export default Formnews ;