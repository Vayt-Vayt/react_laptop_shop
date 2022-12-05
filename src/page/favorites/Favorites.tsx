import React, { useContext } from "react";

import { product } from "../../components/Card";
import { AppContext } from "../../components/store";
import Item from "../Items/Item";

import styless from "./Favorites.module.scss";

const Favorites = () => {
  const { favorites }: any = useContext(AppContext);

  return (
    <div className={styless.container}>
      <div className={styless.searchContainer}>
        <h1>Избранные:</h1>
      </div>
      <div className={styless.productContant}>
        {favorites.length === 0 ? (
          <h2>Добавть товар в Избранные</h2>
        ) : (
          favorites.map((item: product) => (
            <Item key={item.idRoot} {...item} btnBoolean />
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;
