
import './banner.style.scss'
import banner01 from '../../assets/banner/01.jpg'
import banner02 from '../../assets/banner/02.png'
import banner03 from '../../assets/banner/03.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="image-banner-container">
                <img className="image-banner" src={banner01} alt="01"/>
                <img className="image-banner" src={banner02} alt="01"/>
                <img className="image-banner" src={banner03} alt="01"/>

            </div>
            <div className="text-banner">
                <div className="text-title">TƯ VẤN LẮP ĐẶT INTERNET - TRUYỀN HÌNH</div>
                <div className="text-title">HOTLINE: 0866.884.222</div>
            </div>
        </div>
    )
}

export default Banner