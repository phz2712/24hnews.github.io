import React from 'react';
import {StyleDiv} from './stylebody';
import Formnews from './formnews';
import Video from '../video/[From Up On Poppy Hill] Sayonara no natsu.mp4';
import smallV from '../image/small-iconvideo.png'
import Cloud from '../image/261.png'
import cloud1 from '../image/chisokhongkhi_clound.png'
import arrowWeather from '../image/chisokhongkhi_next.png'

function Body(props) {
    const smallVideo =
        <div className='groupListVideo'>
            <div className='smallVideo'>
                <img src={smallV} alt='video' style={{width: "35px", height: "35px"}} />
            </div>
            <div className='titleSmallVideo'>
                abc
            </div>
        </div>      
    

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
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <div className='headVideo'>
                            <li><span>Video chọn lọc</span></li>
                        </div>
                        <div className='groupVideo'>
                            <div className='mainVideo'>
                                <video src={Video} controls></video>
                                <div className='titleVideo'>
                                    abcdbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbb bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
                                </div>
                                <div className='videoContent'>
                                    abc
                                </div>
                            </div>
                            <div className='listVideo'>
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {smallVideo}
                                {/* {smallVideo}
                                {smallVideo} */}
                            </div>
                        </div>
                        <div className='groupWeather'>
                            <div className='table golden'>
                                <div className='a01'><span>Giá vàng</span></div>
                                <div className='childTable'>
                                    <div className='tr'>
                                        <div className='th1'><div>ODJI</div><div>SJC</div></div>
                                        <div className='th'>
                                            <div className='th2'><div className='a1'>Mua</div><div className='a2'>56,000</div></div>
                                            <div className='th2'><div className='a1'>Mua</div><div className='a2'>55,750</div></div>
                                        </div>
                                        <div className='th'>
                                            <div className='th2'><div className='a1'>Bán</div><div className='a2'>56,700</div></div>
                                            <div className='th2'><div className='a1'>Bán</div><div className='a2'>56,720</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='table price'>
                                <div className='a01'><span>Tỷ giá</span></div>
                                <div className='childTable'>
                                    <div className='tr'>
                                        <div className='th1'><div>USD</div><div>EUR</div></div>
                                        <div className='th'>
                                            <div className='th2'><div className='a1'>Mua</div><div className='a2'>23,060</div></div>
                                            <div className='th2'><div className='a1'>Mua</div><div className='a2'>26,779</div></div>
                                        </div>
                                        <div className='th'>
                                            <div className='th2'><div className='a1'>Bán</div><div className='a2'>23,270</div></div>
                                            <div className='th2'><div className='a1'>Bán</div><div className='a2'>28,144</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='table weather'>
                                <div className='a01'><span>Thời tiết</span><div><img className='a011' alt='cloud' src={cloud1}></img>Chỉ số không khí<img className='a012' alt='arrow' src={arrowWeather}></img></div></div>
                                <div className='childTable'>
                                    <div className='tr'>
                                        <div className='th1'><div>Hà Nội</div><div>TP.HCM</div></div>
                                        <div className='th'>
                                            <div className='th2'><img alt='weather' src={Cloud}></img><div className='a1'>35.4&#8451;</div></div>
                                            <div className='th2'><img alt='weather' src={Cloud}></img><div className='a1'>33&#8451;</div></div>
                                        </div>
                                        <div className='th'>
                                            <div className='th2'><div className='a2'>(28&#8451;-37,2&#8451;)</div></div>
                                            <div className='th2'><div className='a2'>(26&#8451;- 34&#8451;)</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal1'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal2'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal2'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal2'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                    </div>
                    <div className='content2'>
                        <div className='title2'>Tin Tức Thị Trường</div>
                        <span className='normal3'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <span className='normal3'>
                            <div className='formnews'><Formnews /></div>
                            <div className='formnews'><Formnews /></div>
                        </span>
                        <div className='title2'><li className='ck'><span>Thông Tin Chứng Khoán</span></li></div>
                        <div className='tableCk'>
                            <div className='ckTr'>
                                <div className='ckTh1'>a</div>
                                <div className='ckTh1'></div>
                                <div className='ckTh1'></div>
                            </div>
                            <div className='ckTr'>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                            </div>
                            <div className='ckTr'>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                            </div>
                            <div className='ckTr'>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                                <div className='ckTh'></div>
                            </div>
                        </div>
                    </div>
                </div>
            <div className='blank'></div>
        </StyleDiv>
    )
}

export default Body ;