import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "../stateProvider/StateProvider";
import { useQuery } from "@apollo/client";
import { LOGIN_WITH_GOOGLE } from "../../gql/query";

function Header() {
  const [{ basket, user }] = useStateValue();
  const history = useHistory();
  const { data, loading } = useQuery(LOGIN_WITH_GOOGLE);

  console.log(basket);
  console.log(user);

  return (
    <nav className="header">
      {/* logo on the left -> img */}
      <Link to="/" className="header__logo">
        Marketplace
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        <a href={data?.getLoginUrlsForLogin?.GOOGLE} className="header__link">
          {" "}
          Login
        </a>
      </div>

      {/* 3 links */}

      {/* <div className="header__nav">
        <Link to="/order" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
      </div>

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
      </div> */}

      {/* basket icon with number*/}
    </nav>
  );
}

export default Header;
