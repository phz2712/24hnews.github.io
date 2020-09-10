import React from "react";
import {StyleDiv, StyleImg} from './stylefooter'
import dmca from '../image/dmca_protected_sml_120m.png'
import goup from '../image/arrowPageUp.png'
import goback from '../image/arrowgoback.png'

function Footer(props) {

    const scrollTop = () =>{
        window.scrollTo({top: 0});
     };

     const goBack = () =>{
        window.history.back();
     };

    return (
        <StyleDiv className='cover'>
            <div className='info'>
                <div className='groupInfo'>
                    <div className='titleInfo'>Tin tức</div>
                    <div className='normalInfo'>Tin Hà Nội</div>
                    <div className='normalInfo'>Tin TP Hồ Chí Minh</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Bóng đá</div>
                    <div className='normalInfo'>Video</div>
                    <div className='normalInfo'>Ngoại hạng Anh</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Thời trang</div>
                    <div className='normalInfo'>Bí quyết mặc đẹp</div>
                    <div className='normalInfo'>Người mẫu nữ</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Pháp luật</div>
                    <div className='normalInfo'>Vụ án nổi tiếng</div>
                    <div className='normalInfo'>Trọng án</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Hi-tech</div>
                    <div className='normalInfo'>Tin tức công nghệ</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Kinh doanh</div>
                    <div className='normalInfo'>Khởi nghiệp</div>
                    <div className='normalInfo'>Tỷ giá</div>
                </div>
                <div className='groupInfo'>
                    <div className='titleInfo'>Sức khỏe</div>
                    <div className='normalInfo'>Bệnh đàn ông</div>
                    <div className='normalInfo'>Bệnh phụ nữ</div>
                </div>
            </div>
            <div className='question'>
                <div>Giới thiệu</div>
                l
                <div>Góp ý</div>
                l
                <div>Đầu trang</div>
                l
                <div>LIÊN HỆ QUẢNG CÁO</div>
            </div>
            <div className='end'>
                <div>Cơ quan chủ quản: Công ty Cổ phần Quảng cáo Trực tuyến 24H Trụ sở: Tầng 12, Tòa nhà Geleximco, 36 Hoàng Cầu, Phường Ô Chợ Dừa, Quận Đống Đa, TP Hà Nội. Tel: (84-24) 73 00 24 24 hoặc (84-24) 3512 1806 - Fax: (84-24) 3512 1804. Chi nhánh: Tầng 7, Tòa nhà Việt Úc, 402 Nguyễn Thị Minh Khai, Phường 5, Quận 3, TP. Hồ Chí Minh. Tel: (84-28) 7300 2424 / Giấy phép số 332/GP – TT ĐT ngày cấp 22/01/2018 SỞ THÔNG TIN VÀ TRUYỀN THÔNG HÀ NỘI. Chịu trách nhiệm xuất bản: Phan Minh Tâm. HOTLINE: 0965 08 24 24</div>
                <img className='dmca' src={dmca} alt='dmca'></img>
                <StyleImg className='up' onClick={scrollTop} scroll={props.scroll} src={goup} alt='goUp'></StyleImg>
                <img className='back' onClick={goBack} src={goback} alt='goBack'></img>
            </div>
        </StyleDiv>
    );
}

export default Footer;