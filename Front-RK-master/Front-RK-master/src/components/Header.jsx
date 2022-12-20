import '../css/Header.css';
import pic from '../img/Brand-name.png'
import {NavLink} from "react-router-dom"

function Header() {
  return (
    <div className="Header">
      <div className="headeR">
          <div className="header-first">
            <NavLink className="header-item" to="/"><img src={pic} alt="photo" height="28px"></img></NavLink>
            <div className="header-container">
              <NavLink className="header-item" to="/">Auctions</NavLink>
              <NavLink className="header-item-1" to="/">Sell a Car</NavLink>
              <div className="header-item">What’s Cars & Bids?</div>
              <div className="header-item">Daily Email</div>
            </div>
          </div>
          <div className="header-container-2">
            <div className="header-item-3">
              <input type="text" className="form-control" placeholder="Search for cars (ex. BMW, Audi, Ford)"/>
            </div>
            <NavLink className="singUpBtn" to="/SignUp">Sign up</NavLink>
          </div>
      </div>
    </div>
  );
}

export default Header;