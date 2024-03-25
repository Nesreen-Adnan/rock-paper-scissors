import './Header.css';
import logo from "../../assests/images/logo.svg";
const Header = () => {
  return (
    <div className="header container">
        <img className="logo" src={logo} alt="logo" />
        <div className='score-box text-center fs-sm'>
            score <span className='score bold fs-xl'>0</span>
        </div>
    </div>
  )
}

export default Header;