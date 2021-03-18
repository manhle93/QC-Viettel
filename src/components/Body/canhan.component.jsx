import './body.style.scss'
import khuyenMai from '../../assets/images/khuyenmai.jpg'
const Body = () => {
    const data = [
        { name: 'NET 1 PLUS', speed: '30 Mbs', price: '165.000 đ/Tháng' },
        { name: 'NET 2 PLUS', speed: '40 Mbs', price: '180.000 đ/Tháng' },
        { name: 'NET 3 PLUS', speed: '55 Mbs', price: '210.000 đ/Tháng' },
        { name: 'NET 4 PLUS', speed: '70 Mbs', price: '260.000 đ/Tháng' },
    ]

    return (<div className="canhan-container">
        <h2 className="title-body">1. INTERNET VIETTEL CHO KHÁCH HÀNG CÁ NHÂN</h2>
        <div className="package-personal-container">
            {
                data.map(el => (
                    <div className="package-personal" key={el.name}>
                        <div className="package-personal-item title-package">{el.name}</div>
                        <div className="package-personal-item speed">{el.speed}</div>
                        <div className="package-personal-item price">{el.price}</div>
                        <div className="package-personal-item">Đã bao gồm 10% VAT</div>
                        <div className="package-personal-item">Tốc độ: {el.speed}</div>
                        <div className="package-personal-item">Lắp đặt trong 24h</div>
                        <div className="package-personal-item">Hỗ trợ 24/7</div>
                        <div className="package-personal-item">Trang bị Modem Wifi</div>
                    </div>
                ))
            }
        </div>
        <div>
            <div className="khuyen-mai">

                <div className="km-text-container">
                    <h2>Khuyến mãi ưu đãi khi lắp mạng Viettel</h2><br />
                    <div className="km-text">Đóng trước 06 tháng tặng thêm 01 tháng</div>
                    <div className="km-text">Đóng trước 06 tháng tặng thêm 01 tháng</div>
                    <div className="km-text">Đóng trước 18 tháng tặng thêm 03 tháng</div>
                    <div className="km-text">Đóng trước 12 tháng tặng thêm 02 tháng</div>
                </div>
                <img src={khuyenMai} className="khuyen-mai-image" alt="manh" />
            </div>

        </div>
    </div>)
}

export default Body