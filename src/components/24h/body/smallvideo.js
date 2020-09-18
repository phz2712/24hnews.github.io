import React from 'react';
import smallV from '../image/small-iconvideo.png';

function SmallVideo (props) {
    return(
        <div className='groupListVideo'>
            <div className='smallVideo' style={{backgroundImage: `url(${props.picture})`,}}>
                <img src={smallV} alt='video' style={{width: "35px", height: "35px"}} />
            </div>
            <div className='titleSmallVideo'>
                {props.title}
            </div>
        </div>  
    )
}

export default SmallVideo;