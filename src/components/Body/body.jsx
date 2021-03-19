import './body.style.scss'
import CaNhan from './canhan.component'
import TruyenHinh from './truyenhinh.component'
import Combo from './combo.component'
import Supernet from './supernet.component'
const Body = () => {
    return (<div className="body">
        <div className="text-header">Tổng đài LẮP ĐẶT INTERNET nhanh nhất tại HƯNG YÊN hỗ trợ cho tất cả các khách hàng đang có nhu cầu sử dụng Wifi Cáp Quang.
        Với đội ngũ nhân viên kinh doanh, kỹ thuật năng động, tích cực sẵn sàng hỗ trợ quý khách hàng mỗi khi có sự cố với đường truyền
            xảy ra trong thời gian nhanh nhất, tốt nhất. </div>
        <CaNhan />
        <TruyenHinh />
        <Combo/>
        <Supernet />
    </div>)
}

export default Body