import './body.style.scss'
import CaNhan from './canhan.component'
import TruyenHinh from './truyenhinh.component'
import Combo from './combo.component'
import Supernet from './supernet.component'
import DoanhNghiep from './doanhnghiep.component'
import WhyMe from './whyme.component'
const Body = () => {
    return (<div className="body">
        <div className="text-header">Tổng đài <b style={{ color: "#0D47A1"}}>LẮP ĐẶT INTERNET</b> nhanh nhất tại <b style={{ color: "#0D47A1"}}>HƯNG YÊN </b>hỗ trợ cho tất cả các khách hàng đang có nhu cầu sử dụng Wifi Cáp Quang.
        Với đội ngũ nhân viên kinh doanh, kỹ thuật năng động, tích cực sẵn sàng hỗ trợ quý khách hàng mỗi khi có sự cố với đường truyền
            xảy ra trong thời gian nhanh nhất, tốt nhất. </div>
        <CaNhan />
        <TruyenHinh />
        <Combo/>
        <Supernet />
        <DoanhNghiep />
        <WhyMe/>
    </div>)
}

export default Body