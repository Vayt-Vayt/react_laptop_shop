import React, { useContext, useEffect } from "react";

import { getParams } from "../../api/api";
import Product from "../../components/Bascet/Product";
import { product } from "../../components/Card";
import { AppContext } from "../../components/store";

import styless from "./Orders.module.scss";

export const Orders = () => {
  const { orderState, setOrderState }: any = useContext(AppContext);

  const mapStateOrder = Object.keys(orderState).map((key: string) => {
    return [...orderState[key]];
  });

  useEffect(() => {
    const getOrder = async () => {
      getParams.getPurchaseHistory().then((res) => setOrderState(res.data));
    };

    getOrder();
  }, [setOrderState]);

  return (
    <div className={styless.container}>
      <div className={styless.searchContainer}>
        <h1>Мои заказы:</h1>
      </div>
      <div className={styless.productContant}>
        {mapStateOrder.map((item: any, index: number) => (
          <div className={styless.contantProduct} key={index}>
            {item.map((elem: product) => (
              <Product key={elem.id} {...elem} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
