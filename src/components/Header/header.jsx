import './header.style.scss'
import Logo from '../../assets/images/logo.png'
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo-image" src={Logo} alt="Vietel" />
            </div>
            <div className="phone">
                <span>Hotline:  <b><a href="tel:0866.884.222" style={{textDecoration: "none", color: 'red'}}>0866.884.222</a></b></span>
            </div>
        </div>
    )
}

export default Header