import React, { useContext, useState } from "react";

import Item from "../../page/Items/Item";
import { AppContext } from "../store";

import styless from "./Card.module.scss";

export interface product {
  idRoot: number;
  imageURL: string;
  title: string;
  price: number;
  body: string;
  id: number | string;
  btnBoolean?: boolean;
}

const Card = () => {
  const [filterValue, setFilterValue] = useState("");
  const { isLoadingCard, data }: any = useContext(AppContext);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilterValue(event.target.value);

  const filtredItems = data.filter((item: product) =>
    item?.title.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <div className={styless.container}>
      <div className={styless.searchContainer}>
        <h1>Все компьютеры:</h1>
        <div className={styless.searchInfo}>
          <label htmlFor="search">
            <img src="image/buttonSVG/Search.svg" alt="search" />
          </label>
          <input
            name="search"
            type="text"
            placeholder="поиск товара по названию"
            value={filterValue}
            onChange={inputChange}
          />
        </div>
      </div>
      <div className={styless.productContant}>
        {(isLoadingCard ? [1, 2] : filtredItems).map(
          (item: product, index: number) => (
            <Item
              key={item.idRoot ? item.idRoot : index}
              {...item}
              btnBoolean
            />
          )
        )}
      </div>
    </div>
  );
};

export default Card;
