import React, {useState} from 'react';
import Formnews from './formnews';
import {data, dataMainVideo}  from './data';
import SmallVideo from './smallvideo';
import {StyleDiv2} from './stylebody';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Datatop() {

    const listData = data.map((data1, index)=> {
            if(data1.position === 'top' && data1.type ==='1'){
                return(
                    <div className='formnews b1'><Formnews key={index} data={data1}/>
                    </div>
                );
            }
            else if(data1.position === 'top' && data1.type ==='2'){
                return(
                    <div className='formnews NMB1'><Formnews key={index} data={data1}/>
                    </div>
                );
            }
        });

    return(
        <div className='groupNews top1'>{listData}</div>
    )
}

export function DataNormal1() {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='1'){
            return(
                <div className='formnews NMB1'><Formnews key={index} data={data1}/></div>
            );
        }

    });
    return(
        <div className='groupNews normal1 row'>{listData}</div>
    )
}

export function ListSmallVideo() {
    const listData = dataMainVideo.map((data1, index) => {
        if(data1.type ==='2'){
            return(
                <SmallVideo key={index} picture={data1.picture} title={data1.title}/>
            );
        }

    });
    return(
        <div className='listVideo'>{listData}</div>
    )
}

export function MainVideo() {
    const listData = dataMainVideo.map((data1, index) => {
        if(data1.type ==='1'){
            return(
                <div key={index}>
                    <video src={data1.video} controls></video>
                    <div className='titleVideo'>
                        {data1.title}
                    </div>
                    <div className='videoContent'>
                        {data1.content}
                    </div>
                </div>
            );
        }

    });
    return(
        <div  className='mainVideo'>{listData}</div>
    )
}

export function DataNormal11() {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal2' && data1.type ==='1'){
            return(
                <div className='formnews NMB2'><Formnews key={index} data={data1}/>
                </div>
            );
        }

    });
    return(
        <div className='groupNews normal1 row'>{listData}</div>
    )
}

export function DataNormal2() {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='2'){
            return(
                <div className='formnews NMB1 '><Formnews key={index} data={data1}/>
                </div>
            );
        }
    });
    return(
        <div className='groupNews normal2 '>{listData}</div>
    )
}

export function DataNormal3() {
    
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='3'){
            return(
                <div className='formnews NMB '><Formnews key={index} data={data1}/>
                </div>
            );
        }
    });
    return(
        <div className='groupNews normal3 '>{listData}</div>
    )
}

export function DataNormal32() {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal2' && data1.type ==='3'){
            return(
                <div className='formnews NMB '><Formnews key={index} data={data1}/>
                </div>
            );
        }
    });
    return(
        <div className='groupNews normal3 '>{listData}</div>
    )
}

export function DataNormal4(props) {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='4'){
            const num=Number(data1.vl);
            return(
                <StyleDiv2 className='formnews' disabled={props.numDisappear} vl={num}><Formnews key={index} data={data1}/></StyleDiv2>
            );
        }
    });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return(
        <Slider {...settings} className='hideWb groupNews normal4 '>{listData}</Slider>
    )
}
export function DataNormal42(props) {
    const listData = data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='4'){
            const num=Number(data1.vl);
            return(
                <StyleDiv2 className='formnews' disabled={props.numDisappear} vl={num}><Formnews key={index} data={data1}/></StyleDiv2>
            );
        }
    });
  
    return(
        <div className='hideMB groupNews normal4 '>{listData}</div>
    )
}

export function DataNormal5() {
    let dataSort=[];
    data.map((data1, index) => {
        if(data1.position === 'normal' && data1.type ==='5'){
            
            dataSort.push(data1)
        }
    })

    let dataChange=[];
    for (var i=0; i<dataSort.length; i+=2) {
        let dataArray = dataSort.slice(i,i+2);
        let dataObject = Object.assign({}, dataArray)
        dataChange.push(dataObject);    
    }

    const listData = dataChange.map((data1, index) => {
        return(
            <li className='normal5'>
                <div className='formnews'><Formnews key={index} data={data1[0]}/></div>
                <div className='formnews'><Formnews key={index} data={data1[1]}/></div>
            </li>
        );
        
    });
    return(
        <ul className="uk-slider-items uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-4@m">{listData}</ul>
    )
}