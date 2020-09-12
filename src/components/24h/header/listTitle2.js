import React, { useState } from "react";
import styled from 'styled-components';
import HoiDap from '../image/HoiDap.png';
import arrow from '../image/menuDot.gif'
import arrowA from '../image/ArrowTitle1.png';
import search from '../image/search2.png';

const StyleDiv = styled.div`
    position: absolute;
    width: 230px;
    margin-top: -6px;
    
    @media (max-width: 1022px) {
        &.DanhMuc{
            width: 100%;
            display: flex;
            flex-direction: column;
        }
        width: 100%;
        /* position: relative; */
        .title2{
            width: 100%;
            margin-top:0px;
            display: none;
            margin-left: 20px;
            li{
                width: calc(100% + 50px); 
                background-color:#636363;
                border-color: #464646;
            }
        } 
        .titleMenu{
            width: 100%; 
            /* border-color: #78b43d;
            border-style: ridge; */
            border-bottom: 1px ridge #464646;
            /* border-width: 0.5px; */
            /* border-left: none;
            border-right: none; */
            /* border-color: #aad862; */
        }
        /* .title{
            position: relative;
        } */
        .list{
            display:flex;
            flex-direction: column;
            background-color:#464646;
            width:auto;
        }
        .a1{
            display: flex;
        }
        .title{
            list-style: none;
            color: #ffffff;
            padding-left: 10px;
            text-align: left;
            min-width: 180px;
            ${'' /* display: block; */}
            /* border-color: #78b43d;
            border-style: ridge; */
            border-bottom: 1px ridge #636363;
            /* border-width: 0.5px; */
            /* border-left: none;
            border-right: none; */
            background-color: #464646;
            font-size: 12px;
            font-family: Arial, Helvetica, sans-serif;
            line-height: 30px;
            font-weight: 400px;
            overflow: hidden;
            text-overflow: ellipsis;
            align-items: center;
            white-space: nowrap;
            :hover{
                background-color:#636363;
                /* border-color: black; */
                color: #ffffff;
                /* border-bottom: 1px; */
                /* list-style-image: url(${arrowA}); */
            }
            img{
                height: 30px;
                width: 30px;
                /* margin-top: -1px; */
                margin-left: calc(100% - 50px);
                border-top-right-radius : 3px;
                border-bottom-right-radius : 3px;
                position: absolute;
            }
            :hover .title2{
                display: inline;
            }
            .img{
                margin-left: 70px;
                display: none;
            }
            .div{
                background-color: #D7D7D7;
                color: gray;
                margin: 10px;
                margin-left: 0px;
                width: 100%;
                height: 30px;
                border-radius: 3px;
                display: flex;
                padding-left: 10px;
                :focus{
                    span{
                        display: none;
                    }    
                }
                :visited{
                    span{
                        display: none;
                    } 
                }
                :focus + img{
                    height: 28px;
                    width: 29px;
                    margin-top: -1px;
                 }               
            }
        }
        ul li{
            float: left;
            margin-left:-50px;
        }
        .question{
            background-color:#636363;
            color: #ffffff;
            /* list-style-image: url(${arrowA}); */
        }
    }
`;
const StyleSpan = styled.span`
    display: ${props=>props.disabled ? 'none':'inline'}
`

export const Menu02 =()=>{
    const [disabled, setDisabled]= useState(false)
    const disappear=()=>{
        setDisabled(true)
    }
    const appear=()=>{
        setDisabled(false)
    }
    return(
        <StyleDiv className="DanhMuc">
            <div className='title a1'><div contentEditable onBlur={appear} onFocus={disappear} className='div'><StyleSpan disabled={disabled}>Tìm Kiếm</StyleSpan></div><img src={search} alt="search"></img></div>
            <li className='title' href="# ">Trang chủ</li>
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
        <ul>
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
        </ul>
    )
}

export const KinhDoanh=()=>{
    return(
        <ul>
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
        </ul>
    )
}

export const ThiTruong =()=>{
    return(
        <ul>
            <li className='title' href="# ">Thị trường 24h</li>
            <li className='title' href="# ">Giá cả hàng hóa</li>
            <li className='title' href="# ">Xu hướng tiêu dùng độc lạ</li>
            <li className='title' href="# ">Trung tâm mua sắm</li>
            <li className='title' href="# ">Sản xuất_Tiêu dùng</li>
        </ul>
    )
}

export const SucKhoe =()=>{
    return(
        <ul>
            <li className='title' href="# ">Bệnh đàn ông</li>
            <li className='title' href="# ">Bệnh phụ nữ</li>
            <li className='title' href="# ">Sức khỏe dinh dưỡng</li>
            <li className='title' href="# ">Sức khỏe tình dục</li>
            <li className='title' href="# ">Ung thư</li>
            <li className='title' href="# ">Bài thuốc dân gian</li>
            <li className='title' href="# ">Tin tức sức khỏe</li>
        </ul>
    )
}

export const HiTech =()=>{
    return(
        <ul>
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
        </ul>
    )
}

export const ShowBiz =()=>{
    return(
        <ul>
            <li className='title' href="# ">Sao việt</li>
            <li className='title' href="# ">Talk với sao</li>
            <li className='title' href="# ">Sao châu á</li>
            <li className='title' href="# ">Sao hollywood và các nước khác</li>
        </ul>
    )
}

export const TheGioi =()=>{
    return(
        <ul>
            <li className='title' href="# ">Điểm nóng</li>
            <li className='title' href="# ">Quân sự</li>
            <li className='title' href="# ">Hồ sơ</li>
            <li className='title' href="# ">Thế giới động vật</li>
            <li className='title' href="# ">AMACCAO</li>
        </ul>
    )
}

export const TinTuc =()=>{
    return(
        <ul>
            <li className='title' href="# ">Tin Hà Nội</li>
            <li className='title' href="# ">Tin Tp Hồ Chí Minh</li>
            <li className='title' href="# ">Tin Đà Nẵng</li>
            <li className='title' href="# ">Tai nạn giao thông</li>
            <li className='title' href="# ">Tin Cần Thơ</li>
            <li className='title' href="# ">Dự báo thời tiết</li>
            <li className='title' href="# ">Lịch vạn niên</li>
        </ul>
    )
}
export const ThoiTrang =()=>{
    return(
        <ul>
            <li className='title' href="# ">Thời trang công sở</li>
            <li className='title' href="# ">Bí quyết mặc đẹp</li>
            <li className='title' href="# ">Xu hướng thời trang</li>
            <li className='title' href="# ">Thời trang nam</li>
            <li className='title' href="# ">Người mẫu-Hoa hậu</li>
            <li className='title' href="# ">Thời trang bốn mùa</li>
            <li className='title' href="# ">Thế giới thời trang</li>
        </ul>
    )
}

export const PhapLuat =()=>{
    return(
        <ul>
            <li className='title' href="# ">Vụ án nỗi tiếng</li>
            <li className='title' href="# ">kỳ án thế giới</li>
            <li className='title' href="# ">Trọng án</li>
            <li className='title' href="# ">Tệ nạn xã hội</li>
            <li className='title' href="# ">Cảnh giác</li>
            <li className='title' href="# ">Hồ sơ vụ án</li>
            <li className='title' href="# ">Phóng sự</li>
        </ul>
    )
}

export const AmThuc =()=>{
    return(
        <ul>
            <li className='title' href="# ">Món ngon mỗi ngày</li>
            <li className='title' href="# ">Thức đơn hằng ngày</li>
            <li className='title' href="# ">Đặc sản 3 miền</li>
            <li className='title' href="# ">Clip ẩm thực</li>
            <li className='title' href="# ">Tin tức ẩm thực</li>
        </ul>
    )
}

export const LamDep =()=>{
    return(
        <ul>
            <li className='title' href="# ">Thẩm mỹ viện</li>
            <li className='title' href="# ">Tư vấn làm đẹp</li>
            <li className='title' href="# ">Làm đẹp cùng sao</li>
            <li className='title' href="# ">Phong cách đàn ông</li>
        </ul>
    )
}

export const GiaiTri =()=>{
    return(
        <ul>
            <li className='title' href="# ">Phim</li>
            <li className='title' href="# ">Ca nhạc-MTV</li>
            <li className='title' href="# ">TV show</li>
            <li className='title' href="# ">Tin tức giải trí</li>
        </ul>
    )
}

export const BanBe =()=>{
    return(
        <ul>
            <li className='title' href="# ">Chuyện công sở</li>
            <li className='title' href="# ">Tình yêu-Giới Tính</li>
            <li className='title' href="# ">Ngoại tình</li>
            <li className='title' href="# ">Giới trẻ</li>
            <li className='title' href="# ">Hotgirl-Hot boy</li>
            <li className='title' href="# ">Nhịp sống trẻ</li>
        </ul>
    )
}

export const GiaoDuc =()=>{
    return(
        <ul>
            <li className='title' href="# ">Tuyển sinh 2020</li>
            <li className='title' href="# ">Tin tức giáo dục</li>
        </ul>
    )
}

export const TheThao =()=>{
    return(
        <ul>
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
        </ul>
    )
}

export const PhiThuong =()=>{
    return(
        <ul>
            <li className='title' href="# ">Kỷ lục guiness</li>
            <li className='title' href="# ">Bí ẩn lịch sử</li>
            <li className='title' href="# ">Video clip chuyện lạ</li>
            <li className='title' href="# ">Chuyện lạ</li>
        </ul>
    )
}

export const CongNghe =()=>{
    return(
        <ul>
            <li className='title' href="# ">Thủ thuật-Tiện ích</li>
            <li className='title' href="# ">Game</li>
            <li className='title' href="# ">Phần mềm</li>
            <li className='title' href="# ">Khoa học</li>
            <li className='title' href="# ">Sợ virus???</li>
            <li className='title' href="# ">Máy in/phụ kiện</li>
            <li className='title' href="# ">Khám phá công nghệ</li>
        </ul>
    )
}

export const Xemay =()=>{
    return(
        <ul>
            <li className='title' href="# ">Thế giới xe</li>
            <li className='title' href="# ">Bảng giá xe</li>
            <li className='title' href="# ">Xe tay ga</li>
            <li className='title' href="# ">Xe phân khối lớn</li>
            <li className='title' href="# ">Xe máy điện</li>
            <li className='title' href="# ">Xe độc lạ</li>
        </ul>
    )
}

export const DuLich =()=>{
    return(
        <ul>
            <li className='title' href="# ">Du lịch Việt Nam</li>
            <li className='title' href="# ">Tin tức du lịch</li>
            <li className='title' href="# ">Điểm du lịch</li>
            <li className='title' href="# ">Ảnh</li>
        </ul>
    )
}

export const Cuoi24H =()=>{
    return(
        <ul>
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
        </ul>
    )
}

export const Media =()=>{
    return(
        <ul>
            <li className='title' href="# ">Infographics</li>
            <li className='title' href="# ">Video</li>
            <li className='title' href="# ">Manazine</li>
            <li className='title' href="# ">quiz</li>
        </ul>
    )
}

export const Video =()=>{
    return(
        <ul>
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
        </ul>
    )
}

export const TuyenDung =()=>{
    return(
        <ul>
            <li className='title' href="# ">Tuyển dụng</li>
        </ul>
    )
}