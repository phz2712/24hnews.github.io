import React, {useState} from 'react';
import Formnews from './formnews';
import {dataTop, dataNormal1, dataNormal11, smallVideo, dataNormal2, dataNormal3, dataNormal32, dataNormal5}  from './data';
import SmallVideo from './smallvideo';

export function Datatop() {
    const listData = dataTop.map((data, index)=>
    {
        return(
        <div className='formnews b1'><Formnews key={index} type2={data.type2} link={data.link} hotkey={data.hotkey}
        picture={data.picture} link2={data.link2} type1={data.type1} title={data.title} content={data.content}/></div>
    );})
        return(
            <div className='groupNews top1'>{listData}</div>
        )
}

export function DataNormal1() {
    const listData = dataNormal1.map((data, index)=>
    {
        return(
        <div  className='groupNews normal1'>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </div>
    );})
        return(
            <div>{listData}</div>
        )
}

export function ListSmallVideo() {
    const listData = smallVideo.map((data, index)=>
    {
        return(
        <SmallVideo key={index} picture={data.picture} title={data.title}/>
    );})
        return(
            <div className='listVideo'>{listData}</div>
        )
}

export function DataNormal11() {
    const listData = dataNormal11.map((data, index)=>
    {
        return(
        <div  className='groupNews normal1'>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </div>
    );})
        return(
            <div>{listData}</div>
        )
}

export function DataNormal2() {
    const listData = dataNormal2.map((data, index)=>
    {
        return(
        <div  className='groupNews normal2'>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </div>
    );})
        return(
            <div>{listData}</div>
        )
}

export function DataNormal3() {
    const listData = dataNormal3.map((data, index)=>
    {
        return(
        <div  className='groupNews normal3'>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </div>
    );})
        return(
            <div>{listData}</div>
        )
}

export function DataNormal32() {
    const listData = dataNormal32.map((data, index)=>
    {
        return(
        <div  className='groupNews normal3'>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews NMB1'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </div>
    );})
        return(
            <div>{listData}</div>
        )
}

export function DataNormal5() {
    const listData = dataNormal5.map((data, index)=>
    {
        return(
        <li  className='normal5'>
            <div className='formnews'><Formnews key={index} type2={data.a1.type2} link={data.a1.link} hotkey={data.a1.hotkey}
            picture={data.a1.picture} type1={data.a1.type1} title={data.a1.title} content={data.a1.content}/></div>
            <div className='formnews'><Formnews key={index} type2={data.a2.type2} link={data.a2.link} hotkey={data.a2.hotkey}
            picture={data.a2.picture} type1={data.a2.type1} title={data.a2.title} content={data.a2.content}/></div>
        </li>
    );})
        return(
            <ul className="uk-slider-items uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-4@m">{listData}</ul>
        )
}