import React, {useState,} from "react";
import styled from 'styled-components';
import HoiDap from '../image/HoiDap.png';
import arrow from '../image/menuDot.gif'
import arrowA from '../image/ArrowTitle1.png'

const StyleDiv = styled.div`
    ${'' /* display: none; */}
    position: absolute;
    width: 230px;
    ${'' /* z-index: 1; */}
    margin-top: -6px;
    
    @media (max-width: 1022px) {
       
    }
    @media (min-width: 1023px) {
        .title2 ul{
            width: 180px; 
            position: absolute;
        }
        &.DanhMuc{
            width: 180px;
        }
        .titleMenu{
            width: 180px;
        }
        .list{
            display:flex;
            
        }
        .title2{
            margin-top: -18px;
        }
    }
    .title{
        list-style-image: url(${arrow});
        list-style-position: inside;
        color: black;
        padding-left: 10px;
        text-align: left;
        min-width: 180px;
        ${'' /* display: block; */}
        /* border-color: #78b43d;
        border-style: ridge; */
        border-bottom: 1px ridge #78b43d;
        /* border-width: 0.5px; */
        /* border-left: none;
        border-right: none; */
        background-color: #aad862;
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
            color: #ffffff;
            /* list-style-image: url(${arrowA}); */
        }
        :hover .title2{
            display: inline;
        }
    }
    ul li{
        float: left;
        margin-left:-50px;
    }
    .title2{
        ${'' /* margin-left: 125px; */}
        display: none;
        /* position: absolute; */
    }
    .title2 li{
        width: 180px; 
        background-color:#78b43d;
        border-color: #aad862;
        
        /* list-style-image: url(${arrowA}); */
    }
    
    .list{
        display:flex;
        background-color:#aad862;
        width:auto;
        ${'' /* flex-grow:1; */}
    }
    
    .title .img{
        margin-left: 70px;
    }
    .question{
        background-color:#78b43d;
        color: #ffffff;
        /* list-style-image: url(${arrowA}); */
    }
`;


export const DanhMuc =()=>{
    return(
        <StyleDiv className="DanhMuc">
            <li className='title' href="# ">Trang chủ 24giờ</li>
            <span className="  list title">
                <li className="titleMenu">Tin tức trong ngày</li> 
                <div className="title2"><TinTuc/></div>  
            </span>
            <span className="list title">
                <li className="titleMenu">Bóng đá</li>
                <div className="title2"><BongDa/></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Thế giới</li>
                <div className="title2"><TheGioi /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Thời trang</li>
                <div className="title2"><ThoiTrang /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Pháp luật</li>
                <div className="title2"><PhapLuat /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Thời trang Hi-tech</li>
                <div className="title2"><HiTech /></div>
            </span>
            <li className='title' href="# ">Phòng tránh Virus Corona</li>
            <span className="list title">
                <li className="titleMenu">Kinh doanh</li>
                <div className="title2"><KinhDoanh /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Ẩm thực</li>
                <div className="title2"><AmThuc /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Làm đẹp</li>
                <div className="title2"><LamDep /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Đời sống Showbiz</li>
                <div className="title2"><ShowBiz /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Giải trí</li>
                <div className="title2"><GiaiTri /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Bạn bè-Cuộc sống</li>
                <div className="title2"><BanBe /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Giáo dục-Du học</li>
                <div className="title2"><GiaoDuc /></div>
            </span>
            <li className='question title' href="# ">Hỏi đáp <img className="img" src={HoiDap} alt="hỏi đáp"></img></li>
            <span className="list title">
                <li className="titleMenu">Thể thao</li>
                <div className="title2"><TheThao /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Phi thường-Kì quặc</li>
                <div className="title2"><PhiThuong /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Công nghệ thông tin</li>
                <div className="title2"><CongNghe /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Xe máy-Xe đạp</li>
                <div className="title2"><Xemay /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Thị trường-Tiêu dùng</li>
                <div className="title2"><ThiTruong /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Du lịch</li>
                <div className="title2"><DuLich /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Sức khỏe đời sống</li>
                <div className="title2"><SucKhoe /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Cười 24H</li>
                <div className="title2"><Cuoi24H /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Media</li>
                <div className="title2"><Media /></div>
            </span>
            <span className="list title">
                <li className="titleMenu">Video tổng hợp</li>
                <div className="title2"><Video /></div>
            </span>
            <li className='title' href="# ">Tin tức phụ nữ</li>
            <span className="list title">
                <li className="titleMenu">Tìm việc làm tuyển dụng</li>
                <div className="title2"><TuyenDung /></div>
            </span>
            <li className='title' href="# ">24H RSS</li>
        </StyleDiv>
    )
}

export const BongDa=()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Lịch thi đấu</li>
            <li className='title' href="# ">Video</li>
            <li className='title' href="# ">Lịch thi đấu ngày hôm nay</li>
            <li className='title' href="# ">Ngoại hạng anh</li>
            <li className='title' href="# ">Kết quả bóng đá</li>
            <li className='title' href="# ">Lịch bóng đá TV</li>
            <li className='title' href="# ">Sự kiện-Bình luận</li>
            <li className='title' href="# ">Livescore</li>
            <li className='title' href="# ">Top ghi bàn</li>
            <li className='title' href="# ">Bảng xếp hạng bóng đá</li>
            <li className='title' href="# ">Talkshow bóng đá</li>
            <li className='title' href="# ">XEM VIDEO HIGHLIGHT TRÊN 24H.COM.VN</li>
            <li className='title' href="# ">Bóng đá việt nam</li>
            <li className='title' href="# ">Tin vắn bóng đá</li>
            <li className='title' href="# ">Vòng loại worldcup 2022</li>
            <li className='title' href="# ">Bóng đá Ý</li>
            <li className='title' href="# ">Bóng đá Tây Ban Nha</li>
            <li className='title' href="# ">Bóng đá Đức</li>
            <li className='title' href="# ">Cup C1- Champions league</li>
            <li className='title' href="# ">Bóng đá Pháp</li>
            <li className='title' href="# ">Các giải bóng đá khác</li>
            <li className='title' href="# ">Tin bên lề bóng đá</li>
            <li className='title' href="# ">Tin chuyển nhượng</li>
            <li className='title' href="# ">Ảnh bóng đá- người đẹp</li>
            <li className='title' href="# ">Ngôi sao bóng đá</li>
            <li className='title' href="# ">Video bóng đá hot</li>
            <li className='title' href="# ">Tốp 10+</li>
            <li className='title' href="# ">Xếp hạng FIFA</li>
            <li className='title' href="# ">Bạn đọc tương tác</li>
            <li className='title' href="# ">Thuê sân bóng HCM</li>
            <li className='title' href="# ">Thuê sân bóng HN</li>
        </StyleDiv>
    )
}

export const KinhDoanh=()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Doanh nhân</li>
            <li className='title' href="# ">Tài chính</li>
            <li className='title' href="# ">Bất động sản</li> 
            <li className='title' href="# ">Khởi nghiệp</li>
            <li className='title' href="# ">Doanh nghiệp</li>
            <li className='title' href="# ">Ngân hàng</li>
            <li className='title' href="# ">Chứng khoán</li>
            <li className='title' href="# ">Tỷ giá ngoại tệ</li>
            <li className='title' href="# ">Giá vàng hôm nay</li> 
            <li className='title' href="# ">Tiền tiền tiền</li>
        </StyleDiv>
    )
}

export const ThiTruong =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Thị trường 24h</li>
            <li className='title' href="# ">Giá cả hàng hóa</li>
            <li className='title' href="# ">Xu hướng tiêu dùng độc lạ</li>
            <li className='title' href="# ">Trung tâm mua sắm</li>
            <li className='title' href="# ">Sản xuất_Tiêu dùng</li>
        </StyleDiv>
    )
}

export const SucKhoe =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Bệnh đàn ông</li>
            <li className='title' href="# ">Bệnh phụ nữ</li>
            <li className='title' href="# ">Sức khỏe dinh dưỡng</li>
            <li className='title' href="# ">Sức khỏe tình dục</li>
            <li className='title' href="# ">Ung thư</li>
            <li className='title' href="# ">Bài thuốc dân gian</li>
            <li className='title' href="# ">Tin tức sức khỏe</li>
        </StyleDiv>
    )
}

export const HiTech =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Điện thoại</li>
            <li className='title' href="# ">Điện tử gia dụng</li>
            <li className='title' href="# ">Đánh giá sản phẩm</li>
            <li className='title' href="# ">Tin tức công nghệ</li>
            <li className='title' href="# ">Laptop</li>
            <li className='title' href="# ">Máy tính bảng</li>
            <li className='title' href="# ">Máy ảnh và camera số</li>
            <li className='title' href="# ">Phụ kiện hitech</li>
            <li className='title' href="# ">Máy tính để bản</li>
            <li className='title' href="# ">Thế giới công nghệ</li>
        </StyleDiv>
    )
}

export const ShowBiz =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Sao việt</li>
            <li className='title' href="# ">Talk với sao</li>
            <li className='title' href="# ">Sao châu á</li>
            <li className='title' href="# ">Sao hollywood và các nước khác</li>
        </StyleDiv>
    )
}

export const TheGioi =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Điểm nóng</li>
            <li className='title' href="# ">Quân sự</li>
            <li className='title' href="# ">Hồ sơ</li>
            <li className='title' href="# ">Thế giới động vật</li>
            <li className='title' href="# ">AMACCAO</li>
        </StyleDiv>
    )
}

export const TinTuc =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Tin Hà Nội</li>
            <li className='title' href="# ">Tin Tp Hồ Chí Minh</li>
            <li className='title' href="# ">Tin Đà Nẵng</li>
            <li className='title' href="# ">Tai nạn giao thông</li>
            <li className='title' href="# ">Tin Cần Thơ</li>
            <li className='title' href="# ">Dự báo thời tiết</li>
            <li className='title' href="# ">Lịch vạn niên</li>
        </StyleDiv>
    )
}
export const ThoiTrang =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Thời trang công sở</li>
            <li className='title' href="# ">Bí quyết mặc đẹp</li>
            <li className='title' href="# ">Xu hướng thời trang</li>
            <li className='title' href="# ">Thời trang nam</li>
            <li className='title' href="# ">Người mẫu-Hoa hậu</li>
            <li className='title' href="# ">Thời trang bốn mùa</li>
            <li className='title' href="# ">Thế giới thời trang</li>
        </StyleDiv>
    )
}

export const PhapLuat =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Vụ án nỗi tiếng</li>
            <li className='title' href="# ">kỳ án thế giới</li>
            <li className='title' href="# ">Trọng án</li>
            <li className='title' href="# ">Tệ nạn xã hội</li>
            <li className='title' href="# ">Cảnh giác</li>
            <li className='title' href="# ">Hồ sơ vụ án</li>
            <li className='title' href="# ">Phóng sự</li>
        </StyleDiv>
    )
}

export const AmThuc =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Món ngon mỗi ngày</li>
            <li className='title' href="# ">Thức đơn hằng ngày</li>
            <li className='title' href="# ">Đặc sản 3 miền</li>
            <li className='title' href="# ">Clip ẩm thực</li>
            <li className='title' href="# ">Tin tức ẩm thực</li>
        </StyleDiv>
    )
}

export const LamDep =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Thẩm mỹ viện</li>
            <li className='title' href="# ">Tư vấn làm đẹp</li>
            <li className='title' href="# ">Làm đẹp cùng sao</li>
            <li className='title' href="# ">Phong cách đàn ông</li>
        </StyleDiv>
    )
}

export const GiaiTri =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Phim</li>
            <li className='title' href="# ">Ca nhạc-MTV</li>
            <li className='title' href="# ">TV show</li>
            <li className='title' href="# ">Tin tức giải trí</li>
        </StyleDiv>
    )
}

export const BanBe =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Chuyện công sở</li>
            <li className='title' href="# ">Tình yêu-Giới Tính</li>
            <li className='title' href="# ">Ngoại tình</li>
            <li className='title' href="# ">Giới trẻ</li>
            <li className='title' href="# ">Hotgirl-Hot boy</li>
            <li className='title' href="# ">Nhịp sống trẻ</li>
        </StyleDiv>
    )
}

export const GiaoDuc =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Tuyển sinh 2020</li>
            <li className='title' href="# ">Tin tức giáo dục</li>
        </StyleDiv>
    )
}

export const TheThao =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Tennis</li>
            <li className='title' href="# ">Võ thuật-UFC Quyền anh</li>
            <li className='title' href="# ">Lịch thi đấu thể thao</li>
            <li className='title' href="# ">Video tennis</li>
            <li className='title' href="# ">Billard-Snooker</li>
            <li className='title' href="# ">Clip Đặc Sắc</li>
            <li className='title' href="# ">Bảng xếp hạng tennis</li>
            <li className='title' href="# ">Lịch thi đấu tennis</li>
            <li className='title' href="# ">Tin bên lề thể thao</li>
            <li className='title' href="# ">Bảng xếp hạng thể thao</li>
            <li className='title' href="# ">Bóng chuyền</li>
            <li className='title' href="# ">Hậu trường ngôi sao thể thao</li>
            <li className='title' href="# ">Thể thao Việt Nam</li>
            <li className='title' href="# ">Ảnh thể thao</li>
            <li className='title' href="# ">Golf</li>
            <li className='title' href="# ">Đua xe thể thao-F1</li>
            <li className='title' href="# ">Môn thể thao khác</li>
            <li className='title' href="# ">Thuê sân tennis Hà Nội</li>
            <li className='title' href="# ">Thuê sân tennis HCM</li>
            <li className='title' href="# ">Tin tức thể thao</li>
            <li className='title' href="# ">Bóng rổ NBA-VBA</li>
        </StyleDiv>
    )
}

export const PhiThuong =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Kỷ lục guiness</li>
            <li className='title' href="# ">Bí ẩn lịch sử</li>
            <li className='title' href="# ">Video clip chuyện lạ</li>
            <li className='title' href="# ">Chuyện lạ</li>
        </StyleDiv>
    )
}

export const CongNghe =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Thủ thuật-Tiện ích</li>
            <li className='title' href="# ">Game</li>
            <li className='title' href="# ">Phần mềm</li>
            <li className='title' href="# ">Khoa học</li>
            <li className='title' href="# ">Sợ virus???</li>
            <li className='title' href="# ">Máy in/phụ kiện</li>
            <li className='title' href="# ">Khám phá công nghệ</li>
        </StyleDiv>
    )
}

export const Xemay =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Thế giới xe</li>
            <li className='title' href="# ">Bảng giá xe</li>
            <li className='title' href="# ">Xe tay ga</li>
            <li className='title' href="# ">Xe phân khối lớn</li>
            <li className='title' href="# ">Xe máy điện</li>
            <li className='title' href="# ">Xe độc lạ</li>
        </StyleDiv>
    )
}

export const DuLich =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Du lịch Việt Nam</li>
            <li className='title' href="# ">Tin tức du lịch</li>
            <li className='title' href="# ">Điểm du lịch</li>
            <li className='title' href="# ">Ảnh</li>
        </StyleDiv>
    )
}

export const Cuoi24H =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Hội quán 24H</li>
            <li className='title' href="# ">Video clip cười</li>
            <li className='title' href="# ">Tin vịt</li>
            <li className='title' href="# ">Tranh vui</li>
            <li className='title' href="# ">Thơ vui</li>
            <li className='title' href="# ">Truyện tiếu lâm</li>
            <li className='title' href="# ">Truyện cười</li>
            <li className='title' href="# ">Truyện cười mùa thi</li>
            <li className='title' href="# ">Đố vui</li>
            <li className='title' href="# ">Tiểu phẩm hài</li>
            <li className='title' href="# ">Cười dân gian</li>
            <li className='title' href="# ">Danh hài 3 miền</li>
        </StyleDiv>
    )
}

export const Media =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Infographics</li>
            <li className='title' href="# ">Video</li>
            <li className='title' href="# ">Manazine</li>
            <li className='title' href="# ">quiz</li>
        </StyleDiv>
    )
}

export const Video =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Video tổng hợp</li>
            <li className='title' href="# ">Clip nóng</li>
            <li className='title' href="# ">Video tin tức</li>
            <li className='title' href="# ">Video bóng đá -Thể thao</li>
            <li className='title' href="# ">Video thời trang</li>
            <li className='title' href="# ">Video giải trí</li>
            <li className='title' href="# ">video cười</li>
            <li className='title' href="# ">Video an ninh xã hội</li>
            <li className='title' href="# ">Video ẩm thực-Du lịch</li>
            <li className='title' href="# ">Video thời trang Hi-tech</li>
        </StyleDiv>
    )
}

export const TuyenDung =()=>{
    return(
        <StyleDiv>
            <li className='title' href="# ">Tuyển dụng</li>
        </StyleDiv>
    )
}