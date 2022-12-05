import React from "react";

import styless from "./Bascet.module.scss";

const Product = ({ title, imageURL, price }) => {
  return (
    <div className={styless.contant}>
      <img src={imageURL} alt="product" />
      <div>
        <h5>{title}</h5>
        <h4 className={styless.opacity}>Цена: {price} руб.</h4>
      </div>
    </div>
  );
};

export default Product;
