import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "./store";

const Header = () => {
  const { changeStatusBascet, bascetPrice }: any = useContext(AppContext);

  return (
    <header className="header">
      <div className="d-flex">
        <Link to="/">
          <img
            style={{ borderRadius: 20 }}
            width={100}
            src={"/image/buttonSVG/logotip.jpg"}
            alt="logotip"
          />
        </Link>
        <div className="title ">
          <h3>REACT NOTEBOOK</h3>
          <p>Магазин ноутбуков</p>
        </div>
      </div>
      <nav className="btn-console">
        <Link to="/">
          <img src="image/buttonSVG/Search.svg" alt="search" />
        </Link>
        <Link to="favorites">
          <img src="/image/buttonSVG/likeOff.png" alt="likeOff" />
        </Link>
        <div onClick={changeStatusBascet} className="d-flex ai-center">
          <img src="/image/buttonSVG/basket.png" alt="basket" />
          <p>{bascetPrice()}</p>
        </div>
        <Link to="orders">
          <img src="/image/buttonSVG/account.png" alt="account" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
