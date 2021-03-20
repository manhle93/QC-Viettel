import "./body.style.scss";
import SuperNetPic from "../../assets/images/supernet.png";
const DoanhNghiep = () => {
  return (
    <div className="combo-container">
      <h2 className="title-body">
        5. GÓI CƯỚC DÀNH CHO DOANH NGHIỆP, QUÁN GAME ...
      </h2>
      <div className="text-header">
        Là các doanh nghiệp lớn hay quán net cần các gói cước có tốc độ vượt
        trội, băng thông rộng cho nhiều lượt truy cập đồng thời. Để phục vụ tốt công việc và kinh doanh vì thế VIETTEL cung cấp các
        gói cước Internet có băng thông cao và giá thành hợp lý đến khách hàng
      </div>
      <div style={{ width: "100%", paddingTop: '25px' }}>
        <img style={{ width: "100%" }} src={SuperNetPic} alt="manh" />
      </div>
    </div>
  );
};

export default DoanhNghiep;
