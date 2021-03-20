import "./body.style.scss";
import superNetPic from "../../assets/images/supernet.jpg";

const Supernet = () => {
  const data = [
    {
      name: "SUPERNET 2",
      speed: "50Mbs",
      price: "245.000 đ/tháng",
      id: 1,
    },
    {
      name: "SUPERNET 3",
      speed: "80Mbs",
      price: "310.000 đ/tháng",
      id: 2,
    },
    {
      name: "SUPERNET 4",
      speed: "100Mbs",
      price: "350.000 đ/tháng",
      id: 3,
    },
    {
      name: "SUPERNET 5",
      speed: "200Mbs",
      price: "535.000 đ/tháng",
      id: 4,
    },
  ];
  return (
    <div className="">
      <h2 className="title-body">
        4. <b style={{ color: "red" }}>HOT</b> GÓI CƯỚC SUPERNET - Trang bị Home
        Wifi Mesh
      </h2>
      <div className="text-header">
        Tổng đài LẮP ĐẶT INTERNET nhanh nhất tại HƯNG YÊN hỗ trợ cho tất cả các
        khách hàng đang có nhu cầu sử dụng Wifi Cáp Quang. Với đội ngũ nhân viên
        kinh doanh, kỹ thuật năng động, tích cực sẵn sàng hỗ trợ quý khách hàng
        mỗi khi có sự cố với đường truyền xảy ra trong thời gian nhanh nhất, tốt
        nhất.{" "}
      </div>
      <div style={{ width: "100%", paddingTop: "30px" }}>
        <img src={superNetPic} style={{ width: "100%" }} alt="manh" />
      </div>
      <div className="supernet-container">
        {data.map((el) => (
          <div className="supernet-item" key={el.id}>
            <div className="supernet-item-header">
              <div className="supernet-item-name">{el.name}</div>
              <div className="supernet-item-speed">{el.speed}</div>
            </div>
            <div className="supernet-item-price">{el.price}</div>
            <div className="supernet-item-text">Triển khai trong 24h</div>
            <div className="supernet-item-text">Hỗ trợ 24/7</div>
            <div className="supernet-item-text"> Modem Wifi + 2 HomWifi</div>
            {el.id === 4 ? (
              <div className="supernet5">
                <b
                  style={{ fontSize: "18px", color: "red", fontWeight: "bold" }}
                >
                  Tặng 2 Thuê bao truyền hình
                </b>
                <div>
                  <div style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                    1: K+, 200 kênh + VTV Cab{" "}
                  </div>
                  <div style={{ paddingLeft: "10px", paddingTop: "5px" }}>
                    2: 160 kênh + VTV Cab{" "}
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supernet;
