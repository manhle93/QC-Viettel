import "./body.style.scss";
import TruyenHinhPic from "../../assets/images/truyenhinh.png";

const TruyenHinh = () => {
  return (
    <div className="truyenhinh-container">
      <h2 className="title-body">2. DỊCH VỤ TRUYỀN HÌNH SỐ</h2>
      <div className="khuyen-mai">
        <img src={TruyenHinhPic} className="khuyen-mai-image" alt="manh" />

        <div className="km-text-container" style={{paddingLeft: '50px'}}>
          <div className="km-text" style={{ color: "black"}}>
            Truyền hình số HD Viettel: chỉ{" "}
            <span
              style={{ fontSize: "22px", color: "red", fontWeight: "bold" }}
            >
              64.000đ/tháng
            </span>{" "}
            gồm hơn 180 kênh truyền hình đặc sắc.
          </div>
          <div className="km-text">
            + Phim chiếu rạp, phim 3D liên tục cập nhật.
          </div>
          <div className="km-text">
            + Youtube , Karaoke , App xem phim phong phú.
          </div>
          <div className="km-text">
            + Tua đi và xem lại chương trình yêu thích.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruyenHinh;
