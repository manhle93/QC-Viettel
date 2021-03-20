import Header from "../../components/Header/header";
import Banner from "../../components/Banner/banner";
import Body from "../../components/Body/body";
import Footer from "../../components/Footer/footer";

import "./homepage.style.scss";
const HomePage = () => {
  return (
    <div>
      <div className="header-container">
        <Header />
      </div>
      <div className="banner-container">
        <Banner />
      </div>
      <div className="header-container">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
