import React, {useState} from 'react';
import {StyleDiv, StyleDiv2, StyleButtonI, StyleButtonD, StyleButton, Styleimg, Styleimg2, StyleCk} from './stylebody';
import Formnews from './formnews';
import Video from '../video/[From Up On Poppy Hill] Sayonara no natsu.mp4';
import smallV from '../image/small-iconvideo.png';
import Cloud from '../image/261.png';
import cloud1 from '../image/chisokhongkhi_clound.png';
import arrowWeather from '../image/chisokhongkhi_next.png';
import down from '../image/btn_down2019.png';
import up from '../image/btn_up2019.png';
import arrowBack from '../image/arrowBack.png';
import arrowNext from '../image/arrownext.png';
import NextDoanhNghiep from '../image/nextDoanhNghiep.png';
import PrevDoanhNghiep from '../image/prevDoanhNghiep.png';
import home from '../image/home.png';
import gotohead from '../image/gotoheadpage.png';

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
    const [numDisappear, setNumDisappear]=useState(1);

    const scrollTop = () => {
        const c = document.documentElement.scrollTop || document.body.scrollTop;
        if (c > 0) {
          window.requestAnimationFrame(scrollTop);
          window.scrollTo(0, c - c / 15 );
        }
    };

    function increase(){
        setNumDisappear(numDisappear + 1)
    }

    function decrease(){
        setNumDisappear(numDisappear - 1)
    }

    function changeNum(e){
        setNumDisappear(e)
    }

    return(
        <StyleDiv className='cover'>
            <div className='blank'></div>
                <div className='content'>
                    <div className='content0'>
                        <div className='content1'>
                            <span className='groupNews top1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
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
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal1'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal2'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal2'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal2'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                        </div>
                        <div className='content2'>
                            <div className='title2'>Tin Tức Thị Trường</div>
                            <span className='groupNews normal3'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <span className='groupNews normal3'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <div className='title2'><li className='ck'><span>Thông Tin Chứng Khoán</span></li></div>
                            <div className='tableCk'>
                                <div className='ckTr'>
                                    <div className='ckTh1'>VN-INDEX</div>
                                    <div className='ckTh1'>VN30-INDEX</div>
                                    <div className='ckTh1'>HNX-INDEX</div>
                                </div>
                                <div className='ckTr'>
                                    <div className='ckTh'>905.41</div>
                                    <div className='ckTh'>842.81</div>
                                    <div className='ckTh'>125.77</div>
                                </div>
                                <div className='ckTr'>
                                    <div className='ckTh'><Styleimg src={down} vl={+3.87}></Styleimg><Styleimg2 src={up} vl={+3.87}></Styleimg2></div>
                                    <div className='ckTh'><Styleimg src={down} vl={+2.27}></Styleimg><Styleimg2 src={up} vl={+2.27}></Styleimg2></div>
                                    <div className='ckTh'><Styleimg src={down} vl={-0.38}></Styleimg><Styleimg2 src={up} vl={-0.38}></Styleimg2></div>
                                </div>
                                <div className='ckTr'>
                                    <StyleCk className='ckTh' vl={+3.87}>+3.87</StyleCk>
                                    <StyleCk className='ckTh' vl={+2.27}>+2.27</StyleCk>
                                    <StyleCk className='ckTh' vl={-0.38}>-0.38</StyleCk>
                                </div>
                                <div className='ckTr'>
                                    <StyleCk className='ckTh' vl={+0.43}>(+0.43%)</StyleCk>
                                    <StyleCk className='ckTh' vl={+0.27}>(+0.27%)</StyleCk>
                                    <StyleCk className='ckTh' vl={-0.3}>(-0.3%)</StyleCk>
                                </div>
                            </div>
                            <div className='smallCk'>
                                <div>CK Mỹ <img alt='down' src={down}></img></div>
                                <div>CK Trung Quốc <img alt='down' src={down}></img></div>
                                <div>S&P 500 <img alt='down' src={down}></img></div>
                            </div>
                            <span className='groupNews normal3'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </span>
                            <div className='titlePhuNu'><li className='Phunu'><span>DÀNH RIÊNG CHO PHÁI ĐẸP</span></li></div>
                            <span className='groupNews normal4'>
                                <StyleDiv2 className='formnews' disabled={numDisappear} vl={1}><Formnews /></StyleDiv2>
                                <StyleDiv2 className='formnews' disabled={numDisappear} vl={2}><Formnews /></StyleDiv2>
                                <StyleDiv2 className='formnews' disabled={numDisappear} vl={3}><Formnews /></StyleDiv2>
                            </span>
                            <div className="group-button">
                                <StyleButtonD type='button' disabled={numDisappear} onClick={decrease}> <img alt='arrowBack' src={arrowBack}></img> </StyleButtonD>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(1);}} vl={1}>1</StyleButton>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(2);}} vl={2}>2</StyleButton>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(3);}} vl={3}>3</StyleButton>
                                <StyleButtonI type='button' disabled={numDisappear} onClick={increase}> <img alt='arrowNext' src={arrowNext}></img> </StyleButtonI>
                            </div>
                        </div>
                    </div>
                    <div className='titleDoanhNghiep'><li className='DoanhNghiep'><span>THÔNG TIN DOANH NGHIỆP</span></li></div>
                    <div className='group_newsDoanhNghiep uk-position-relative uk-visible-toggle' uk-slider="autoplay: true; autoplay-interval: 3000">
                        <ul className="uk-slider-items uk-child-width-1-4 uk-child-width-1-4@s uk-child-width-4@m">
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                            <li className='normal5'>
                                <div className='formnews'><Formnews /></div>
                                <div className='formnews'><Formnews /></div>
                            </li>
                        </ul>
                        <img className="uk-position-center-right" src={NextDoanhNghiep} alt="ndn" uk-slider-item="next"></img>
                        <img className="uk-position-center-left" src={PrevDoanhNghiep} alt="pdn" uk-slider-item="previous"></img>
                    </div>
                    <div className='gotohome'>
                    
                        <img alt='home' src={home}></img>
                        <img alt='gotohead' onClick={scrollTop} src={gotohead}></img>
                    </div>
                </div>
            <div className='blank'></div>
        </StyleDiv>
    )
}

export default Body ;