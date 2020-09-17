import React from 'react';
import smallV from '../image/small-iconvideo.png';

function SmallVi12 (props) {
    return(
        <div className='groupListVideo'>
            <div className='smallVideo'>
                <img src={smallV} alt='video' style={{width: "35px", height: "35px"}} />
            </div>
            <div className='titleSmallVideo'>
                abc
            </div>
        </div>  
    )
}

export default SmallVi12;