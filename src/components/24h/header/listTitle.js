import React, {useState,} from "react";
import styled from 'styled-components'

const StyleDiv = styled.span`
    ${'' /* display: none; */}
    position: absolute;
    width: 230px;
    ${'' /* z-index: 1; */}
    margin-top: -6px;
    
    .title{
        color: black;
        padding-left: 10px;
        text-align: left;
        display: block;
        border-color: #78b43d;
        border-style: ridge;
        border-top: 1px;
        border-width: 0.5px;
        border-left: none;
        border-right: none;
        background-color:  #aad862;
        font-size: 12px;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 30px;
        font-weight: 400px;
        overflow: hidden;
        text-overflow: ellipsis;
        align-items: center;
        white-space: nowrap;
    }
`;

export const DanhMuc =()=>{
    return(
        <div>

        </div>
    )
}

export const BongDa=()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Lịch thi đấu</div>
            <div className='title' href="# ">Video</div>
            <div className='title' href="# ">Lịch thi đấu ngày hôm nay</div>
            <div className='title' href="# ">Ngoại hạng anh</div>
            <div className='title' href="# ">Kết quả bóng đá</div>
            <div className='title' href="# ">Lịch bóng đá TV</div>
            <div className='title' href="# ">Sự kiện-Bình luận</div>
            <div className='title' href="# ">Livescore</div>
            <div className='title' href="# ">Top ghi bàn</div>
            <div className='title' href="# ">Bảng xếp hạng bóng đá</div>
            <div className='title' href="# ">Talkshow bóng đá</div>
            <div className='title' href="# ">XEM VIDEO HIGHLIGHT TRÊN 24H.COM.VN</div>
            <div className='title' href="# ">Bóng đá việt nam</div>
            <div className='title' href="# ">Tin vắn bóng đá</div>
            <div className='title' href="# ">Vòng loại worldcup 2022</div>
            <div className='title' href="# ">Bóng đá Ý</div>
            <div className='title' href="# ">Bóng đá Tây Ban Nha</div>
            <div className='title' href="# ">Bóng đá Đức</div>
            <div className='title' href="# ">Cup C1- Champions league</div>
            <div className='title' href="# ">Bóng đá Pháp</div>
            <div className='title' href="# ">Các giải bóng đá khác</div>
            <div className='title' href="# ">Tin bên lề bóng đá</div>
            <div className='title' href="# ">Tin chuyển nhượng</div>
            <div className='title' href="# ">Ảnh bóng đá- người đẹp</div>
            <div className='title' href="# ">Ngôi sao bóng đá</div>
            <div className='title' href="# ">Video bóng đá hot</div>
            <div className='title' href="# ">Tốp 10+</div>
            <div className='title' href="# ">Xếp hạng FIFA</div>
            <div className='title' href="# ">Bạn đọc tương tác</div>
            <div className='title' href="# ">Thuê sân bóng HCM</div>
            <div className='title' href="# ">Thuê sân bóng HN</div>
        </StyleDiv>
    )
}