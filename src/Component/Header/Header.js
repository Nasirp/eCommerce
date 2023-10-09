import Tippy from "@tippyjs/react";
import LoginT from "../../Component/MoreT/Logint/LoginT"
import MoreT from "../../Component/MoreT/MoreT"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "tippy.js/dist/tippy.css";
import "./Header.css";

import "tippy.js/themes/light.css";
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const handleSearch = (e) => {
    onSearch(e.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="header">
          <div className="header_first">
          <Link className='headerLink' to='/'>
          <img
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt="flipkart logo"
            />
          </Link>
            

            <div className="header_first1">
              <span
                style={{
                  fontSize: "11px",
                  color: "white",
                  fontFamily: "italic",
                }}
              >
                Explore
              </span>

              <span
                style={{
                  color: "#f9e107",
                  fontSize: "11px",
                  fontFamily: "italic",
                }}
              >
                Plus
              </span>

              <span>
                <img
                  width="10"
                  src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
                  alt=""
                />
              </span>
            </div>
          </div>
          <div className="header_second">
            <input
              type="text"
              onChange={handleSearch}
              placeholder="Filter by name"
            />
            <button type="button" className="search-btn">
              <SearchIcon />
            </button>
          </div>

          <div className="header_third">
            <Tippy theme="light" content={<LoginT></LoginT>} interactive={true}>
              <button>Login</button>
            </Tippy>
          </div>

          <div className="header_fourth">
            <Tippy theme="light" content={<MoreT></MoreT>} interactive={true}>
              <span>More</span>
            </Tippy>

            <ExpandMoreIcon />
          </div>

          <Link className='cartlink' to="/cart">
      <div className="header_fifth">
        <ShoppingCartIcon />
        <p>cart</p>
      </div>
      </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
