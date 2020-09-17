import React, {useState,} from "react";
import {StyleDiv} from './styledheader';
import { connect } from 'react-redux';
import homapage from '../image/24h_logo_trang_chu_2015.png';
import menu from '../image/menu.png';
import soccer from "../image/bongda.png";
import business from '../image/KinhDoanh.png';
import market from '../image/ThiTruong.png';
import health from '../image/SucKhoe.png';
import hitech from '../image/hi-tech.png';
import showbiz from '../image/showbiz.png';
import world from '../image/thegioi.png';
import beauty from '../image/PhaiDep.png';
import sport from '../image/TheThao.png';
import specialsport from '../image/NgoaiHangAnh.png';
import date from '../image/XemLich.png';
import search from '../image/search.png';
import {BongDa, KinhDoanh, ThiTruong, SucKhoe, HiTech, ShowBiz, TheGioi, DanhMuc} from './listTitle';
import {Menu02} from './listTitle2'
import menumobi from '../image/menu.gif';


function Header(props) {
    return (
        <StyleDiv className="cover">
            <div className="blank"></div>
            <StyleDiv className="content">
                <img className="icon" src={homapage} alt="Trang chủ"></img>
                <div className= "disappear">
                    <div className="group_icon">
                        <img className="icon-menu" src={menu} alt="Menu"></img>
                        <div className="listTitle"><DanhMuc /></div>
                    </div>
                </div>
                <div className="hide between" ></div>
                <div className='height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={soccer} alt="Bóng Đá"></img></span>
                            <span className="header_title">Bóng Đá</span>  
                        </div>
                        <div className="hidden listTitle"><BongDa className="listTitle2"/></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title '>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={business} alt="Kinh Doanh"></img></span>
                            <span className="header_title">Kinh Doanh</span>
                        </div>
                        <div className="listTitle"><KinhDoanh /></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={market} alt="thị trường"></img></span>
                            <span className="header_title">Thị Trường</span>
                        </div>
                        <div className="listTitle"><ThiTruong /></div>
                    </div>
                </div>
                <div className='height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={health} alt="sức khỏe"></img></span>
                            <span className="header_title">Sức Khỏe</span>
                        </div>
                        <div className="hidden listTitle"><SucKhoe /></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={hitech} alt="hi tech"></img></span>
                            <span className="header_title">Hi-Tech</span>
                        </div>
                        <div className="listTitle"><HiTech /></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={showbiz} alt="showbiz"></img></span>
                            <span className="header_title">Showbiz</span>
                        </div>
                        <div className="listTitle"><ShowBiz /></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={world} alt="thế giới"></img></span>
                            <span className="header_title">Thế Giới</span>
                        </div>
                        <div className="listTitle"><TheGioi /></div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={beauty} alt="phái đẹp"></img></span>
                            <span className="header_title">Phái Đẹp</span>
                        </div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={sport} alt="thể thao"></img></span>
                            <span className="header_title">Thể Thao</span>
                        </div>
                    </div>
                </div>
                <div className='height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={specialsport} alt="ngoại hạng anh"></img></span>
                            <span className="NHA header_title">NGOẠI HẠNG ANH</span>
                            <span className="nha header_title">N.H.A</span>
                        </div>
                    </div>
                </div>
                <div className='disappear height'>
                    <div className='group-title'>
                        <div className="group_icon">
                            <span className="icon-span"><img className="icon2" src={date} alt="xem lịch"></img></span>
                            <span className="header_title">Xem Lịch</span>
                        </div>
                    </div>
                </div>
                <div className="between"></div>
                <div className="disappear icon-search"><img src={search} alt="search"></img></div>
                <input className="disappear typeSearch" placeholder='Nhập tin tức cần tìm'></input>
                <span className="menu hide height right ">
                    <div className=' group-title'>
                        <div className='group_icon'>
                            <span className="icon-span"><img className="icon2" src={menumobi} alt="menumobi"></img></span>
                            <span className=" header_title">Menu</span>
                        </div>
                    </div>
                </span>
                <div className="titleMobi"><Menu02 /></div>
            </StyleDiv>
            <div className="blank"></div>
        </StyleDiv>
    );
}

export default Header;