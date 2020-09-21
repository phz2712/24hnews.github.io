import React, {useState} from 'react';
import {StyleDiv, StyleDiv2, StyleButtonI, StyleButtonD, StyleButton, Styleimg, Styleimg2, StyleCk} from './stylebody';
import Formnews from './formnews';
import Cloud from '../image/261.png';
import cloud1 from '../image/chisokhongkhi_clound.png';
import arrowWeather from '../image/chisokhongkhi_next.png';
import down from '../image/btn_down2019.png';
import up from '../image/btn_up2019.png';
import qc1 from '../image/download.png';
import qc2 from '../image/1624337472769875971.jpg';
import qc3 from '../image/ewr9464139988557.gif';
import qc4 from '../image/3650587649026593215.jpg';
import banner from '../image/banner-0505.png';
import arrowBack from '../image/arrowBack.png';
import arrowNext from '../image/arrownext.png';
import NextDoanhNghiep from '../image/nextDoanhNghiep.png';
import PrevDoanhNghiep from '../image/prevDoanhNghiep.png';
import home from '../image/home.png';
import gotohead from '../image/gotoheadpage.png';
import {Datatop, DataNormal1, ListSmallVideo, MainVideo, DataNormal2, DataNormal11, DataNormal3, DataNormal32, DataNormal4, DataNormal42, DataNormal5} from './tranData';
import { GroupWeather, ck,} from './data';

function Body(props) {
    
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
                            <Datatop></Datatop>
                            <img className='qc1 hideMB' alt='' src={qc1}></img>
                            <DataNormal1 className='relative'></DataNormal1>
                          
                            <div className='headVideo'>
                                <li><span>Video chọn lọc</span></li>
                            </div>
                            <div className='groupVideo'>
                                <MainVideo></MainVideo>
                                <div className='listVideo'>
                                    <ListSmallVideo></ListSmallVideo>
                                </div>
                            </div>
                            <div className='groupWeather'>
                                <div className='table golden'>
                                    <div className='a01'><span>Giá vàng</span></div>
                                    <div className='childTable'>
                                        <div className='tr'>
                                            <div className='th1'><div>{GroupWeather.gold.name1}</div><div>{GroupWeather.gold.name2}</div></div>
                                            <div className='th'>
                                                <div className='th2'><div className='a1'>Mua</div><div className='a2'>{GroupWeather.gold.ODJI.mua}</div></div>
                                                <div className='th2'><div className='a1'>Mua</div><div className='a2'>{GroupWeather.gold.SJC.mua}</div></div>
                                            </div>
                                            <div className='th'>
                                                <div className='th2'><div className='a1'>Bán</div><div className='a2'>{GroupWeather.gold.ODJI.ban}</div></div>
                                                <div className='th2'><div className='a1'>Bán</div><div className='a2'>{GroupWeather.gold.SJC.ban}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='table price'>
                                    <div className='a01'><span>Tỷ giá</span></div>
                                    <div className='childTable'>
                                        <div className='tr'>
                                            <div className='th1'><div>{GroupWeather.price.name1}</div><div>{GroupWeather.price.name2}</div></div>
                                            <div className='th'>
                                                <div className='th2'><div className='a1'>Mua</div><div className='a2'>{GroupWeather.price.USD.mua}</div></div>
                                                <div className='th2'><div className='a1'>Mua</div><div className='a2'>{GroupWeather.price.EUR.mua}</div></div>
                                            </div>
                                            <div className='th'>
                                                <div className='th2'><div className='a1'>Bán</div><div className='a2'>{GroupWeather.price.USD.ban}</div></div>
                                                <div className='th2'><div className='a1'>Bán</div><div className='a2'>{GroupWeather.price.EUR.ban}</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='table weather'>
                                    <div className='a01'><span>Thời tiết</span><div><img className='a011' alt='cloud' src={cloud1}></img>Chỉ số không khí<img className='a012' alt='arrow' src={arrowWeather}></img></div></div>
                                    <div className='childTable'>
                                        <div className='tr'>
                                            <div className='th1'><div>{GroupWeather.weather.name1}</div><div>{GroupWeather.weather.name2}</div></div>
                                            <div className='th'>
                                                <div className='th2'><img alt='weather' src={Cloud}></img><div className='a1'>{GroupWeather.weather.HN.a1}&#8451;</div></div>
                                                <div className='th2'><img alt='weather' src={Cloud}></img><div className='a1'>{GroupWeather.weather.TPHCM.a1}&#8451;</div></div>
                                            </div>
                                            <div className='th'>
                                                <div className='th2'><div className='a2'>({GroupWeather.weather.HN.a2}&#8451;-{GroupWeather.weather.HN.a3}&#8451;)</div></div>
                                                <div className='th2'><div className='a2'>({GroupWeather.weather.TPHCM.a2}&#8451;- {GroupWeather.weather.TPHCM.a3}&#8451;)</div></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <DataNormal11></DataNormal11>                            
                            <DataNormal2></DataNormal2>
                        </div>
                        <div className='content2'>
                            <img className='hideMB' alt='qc2' src={qc2}></img>
                            <div className='title2'>Tin Tức Thị Trường</div>
                            <DataNormal3></DataNormal3>
                            <div className='title2'><li className='ck'><span>Thông Tin Chứng Khoán</span></li></div>
                            <div className='tableCk'>
                                <div className='ckTr'>
                                    <div className='ckTh1'>{ck.name1}</div>
                                    <div className='ckTh1'>{ck.name2}</div>
                                    <div className='ckTh1'>{ck.name3}</div>
                                </div>
                                <div className='ckTr'>
                                    <div className='ckTh'>{ck.VNINDEX.a1}</div>
                                    <div className='ckTh'>{ck.VN30INDEX.a1}</div>
                                    <div className='ckTh'>{ck.HNXINDEX.a1}</div>
                                </div>
                                <div className='ckTr'>
                                    <div className='ckTh'><Styleimg src={down} vl={ck.VNINDEX.a2}></Styleimg><Styleimg2 src={up} vl={ck.VNINDEX.a2}></Styleimg2></div>
                                    <div className='ckTh'><Styleimg src={down} vl={ck.VN30INDEX.a2}></Styleimg><Styleimg2 src={up} vl={ck.VN30INDEX.a2}></Styleimg2></div>
                                    <div className='ckTh'><Styleimg src={down} vl={ck.HNXINDEX.a2}></Styleimg><Styleimg2 src={up} vl={ck.HNXINDEX.a2}></Styleimg2></div>
                                </div>
                                <div className='ckTr'>
                                    <StyleCk className='ckTh' vl={ck.VNINDEX.a2}>{ck.VNINDEX.a2}</StyleCk>
                                    <StyleCk className='ckTh' vl={ck.VN30INDEX.a2}>{ck.VN30INDEX.a2}</StyleCk>
                                    <StyleCk className='ckTh' vl={ck.HNXINDEX.a2}>{ck.HNXINDEX.a2}</StyleCk>
                                </div>
                                <div className='ckTr'>
                                    <StyleCk className='ckTh' vl={ck.VNINDEX.a3}>({ck.VNINDEX.a3}%)</StyleCk>
                                    <StyleCk className='ckTh' vl={ck.VN30INDEX.a3}>({ck.VN30INDEX.a3}%)</StyleCk>
                                    <StyleCk className='ckTh' vl={ck.HNXINDEX.a3}>({ck.HNXINDEX.a3}%)</StyleCk>
                                </div>
                            </div>
                            <div className='smallCk'>
                                <div>CK Mỹ <img alt='down' src={down}></img></div>
                                <div>CK Trung Quốc <img alt='down' src={down}></img></div>
                                <div>S&P 500 <img alt='down' src={down}></img></div>
                            </div>
                            <DataNormal32></DataNormal32>
                            <img alt='' className='qc3 hideMB' src={qc3} ></img>
                            <div className='titlePhuNu'><li className='Phunu'><span>DÀNH RIÊNG CHO PHÁI ĐẸP</span></li></div>
                            <DataNormal4 numDisappear={numDisappear}></DataNormal4>
                            <DataNormal42  numDisappear={numDisappear}></DataNormal42>                      
                            <div className="group-button">
                                <StyleButtonD type='button' disabled={numDisappear} onClick={decrease}> <img alt='arrowBack' src={arrowBack}></img> </StyleButtonD>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(1);}} vl={1}>1</StyleButton>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(2);}} vl={2}>2</StyleButton>
                                <StyleButton type='button' disabled={numDisappear} onClick={() => {changeNum(3);}} vl={3}>3</StyleButton>
                                <StyleButtonI type='button' disabled={numDisappear} onClick={increase}> <img alt='arrowNext' src={arrowNext}></img> </StyleButtonI>
                            </div>
                            <img alt='banner' className='hideMB qc4' src={banner}></img>
                            <img alt='qc4' className='hideMB qc4' src={qc4}></img>
                        </div>
                    </div>
                    <div className='titleDoanhNghiep'><li className='DoanhNghiep'><span>THÔNG TIN DOANH NGHIỆP</span></li></div>
                    <div className='group_newsDoanhNghiep uk-position-relative uk-visible-toggle' uk-slider="autoplay: true; autoplay-interval: 3000">
                        <DataNormal5></DataNormal5>
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