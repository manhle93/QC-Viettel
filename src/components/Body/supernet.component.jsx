import "./body.style.scss";
import superNetPic from "../../assets/images/supernet.jpg";

const Supernet = () => {
  return (
    <div className="">
      <h2 className="title-body">
        4. HOT : GÓI CƯỚC SUPERNET - Trang bị Home Wifi Mesh
      </h2>
      <div className="text-header">
        Tổng đài LẮP ĐẶT INTERNET nhanh nhất tại HƯNG YÊN hỗ trợ cho tất cả các
        khách hàng đang có nhu cầu sử dụng Wifi Cáp Quang. Với đội ngũ nhân viên
        kinh doanh, kỹ thuật năng động, tích cực sẵn sàng hỗ trợ quý khách hàng
        mỗi khi có sự cố với đường truyền xảy ra trong thời gian nhanh nhất, tốt
        nhất.{" "}
      </div>
      <div className="khuyen-mai">
        <img src={superNetPic} className="khuyen-mai-image" alt="manh" />
      </div>
    </div>
  );
};

export default Supernet;
