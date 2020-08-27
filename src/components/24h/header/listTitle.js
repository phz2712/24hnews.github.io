import React, {useState,} from "react";
import styled from 'styled-components'

const StyleDiv = styled.span`
    ${'' /* display: none; */}
    position: absolute;
    width: 230px;
    ${'' /* z-index: 1; */}
    margin-top: -6px;
    &.DanhMuc{
        width: 180px;
    }
    
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
        :hover{
            background-color:#78b43d;
            color: #ffffff
        }
    }
    .title2{
        margin-right: -500px;
        margin-top: 6px;
    }
    .title2 div{
        width: 180px; 
    }
    .list{
        display:flex;

    }
`;

export const DanhMuc =()=>{
    return(
        <StyleDiv className="DanhMuc">
            <div className='title' href="# ">Trang chủ 24giờ</div>
            <div className='title' href="# ">Tin tức trong ngày</div>
            <div className="list">
                <div className='title' href="# ">Bóng đá</div>
                <div className="title2"><BongDa/></div>
            </div>
            <div className='title' href="# ">Thế giới</div>
            <div className='title' href="# ">Thời trang </div>
            <div className='title' href="# ">Pháp luật</div>
            <div className='title' href="# ">Thời trang Hi-tech</div>
            <div className='title' href="# ">Phòng tránh Virus Corona</div>
            <div className='title' href="# ">Kinh doanh</div>
            <div className='title' href="# ">Ẩm thực</div>
            <div className='title' href="# ">Làm đẹp</div>
            <div className='title' href="# ">Đời sống Showbiz</div>
            <div className='title' href="# ">Giải trí</div>
            <div className='title' href="# ">Bạn bè-Cuộc sống</div>
            <div className='title' href="# ">Giáo dục-Du học</div>
            <div className='title' href="# ">Hỏi đáp</div>
            <div className='title' href="# ">Thể thao</div>
            <div className='title' href="# ">Phi thường-Kì quặc</div>
            <div className='title' href="# ">Công nghệ thông tin</div>
            <div className='title' href="# ">Xe máy-Xe đạp</div>
            <div className='title' href="# ">Thị trường-Tiêu dùng</div>
            <div className='title' href="# ">Du lịch</div>
            <div className='title' href="# ">Sức khỏe đời sống</div>
            <div className='title' href="# ">Cười 24H</div>
            <div className='title' href="# ">Media</div>
            <div className='title' href="# ">Video tổng hợp</div>
            <div className='title' href="# ">Tin tức phụ nữ</div>
            <div className='title' href="# ">Tìm việc làm tuyển dụng</div>
            <div className='title' href="# ">24H RSS</div>
        </StyleDiv>
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

export const KinhDoanh=()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Doanh nhân</div>
            <div className='title' href="# ">Tài chính</div>
            <div className='title' href="# ">Bất động sản</div> 
            <div className='title' href="# ">Khởi nghiệp</div>
            <div className='title' href="# ">Doanh nghiệp</div>
            <div className='title' href="# ">Ngân hàng</div>
            <div className='title' href="# ">Chứng khoán</div>
            <div className='title' href="# ">Tỷ giá ngoại tệ</div>
            <div className='title' href="# ">Giá vàng hôm nay</div> 
            <div className='title' href="# ">Tiền tiền tiền</div>
        </StyleDiv>
    )
}

export const ThiTruong =()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Thị trường 24h</div>
            <div className='title' href="# ">Giá cả hàng hóa</div>
            <div className='title' href="# ">Xu hướng tiêu dùng độc lạ</div>
            <div className='title' href="# ">Trung tâm mua sắm</div>
            <div className='title' href="# ">Sản xuất_Tiêu dùng</div>
        </StyleDiv>
    )
}

export const SucKhoe =()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Bệnh đàn ông</div>
            <div className='title' href="# ">Bệnh phụ nữ</div>
            <div className='title' href="# ">Sức khỏe dinh dưỡng</div>
            <div className='title' href="# ">Sức khỏe tình dục</div>
            <div className='title' href="# ">Ung thư</div>
            <div className='title' href="# ">Bài thuốc dân gian</div>
            <div className='title' href="# ">Tin tức sức khỏe</div>
        </StyleDiv>
    )
}

export const HiTech =()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Điện thoại</div>
            <div className='title' href="# ">Điện tử gia dụng</div>
            <div className='title' href="# ">Đánh giá sản phẩm</div>
            <div className='title' href="# ">Tin tức công nghệ</div>
            <div className='title' href="# ">Laptop</div>
            <div className='title' href="# ">Máy tính bảng</div>
            <div className='title' href="# ">Máy ảnh và camera số</div>
            <div className='title' href="# ">Phụ kiện hitech</div>
            <div className='title' href="# ">Máy tính để bản</div>
            <div className='title' href="# ">Thế giới công nghệ</div>
        </StyleDiv>
    )
}

export const ShowBiz =()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Sao việt</div>
            <div className='title' href="# ">Talk với sao</div>
            <div className='title' href="# ">Sao châu á</div>
            <div className='title' href="# ">Sao hollywood và các nước khác</div>
        </StyleDiv>
    )
}

export const TheGioi =()=>{
    return(
        <StyleDiv>
            <div className='title' href="# ">Điểm nóng</div>
            <div className='title' href="# ">Quân sự</div>
            <div className='title' href="# ">Hồ sơ</div>
            <div className='title' href="# ">Thế giới động vật</div>
            <div className='title' href="# ">AMACCAO</div>
        </StyleDiv>
    )
}