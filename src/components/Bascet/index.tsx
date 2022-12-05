import React, { useContext } from "react";

import { AppContext } from "../store";
import Button from "../UI/Button/Button";
import ButtonClose from "../UI/Button/ButtonClose";
import Product from "./Product";
import { Info } from "./Info";
import { product } from "../Card";

import styless from "./Bascet.module.scss";

const Bascet = () => {
  const {
    cartStatus,
    changeStatusBascet,
    bascetState,
    changeBascetState,
    bascetPrice,
    purchase,
    sendAnOrder,
  }: any = useContext(AppContext);

  return (
    <div
      className={`${styless.container} ${
        cartStatus ? styless.containerVisible : ""
      }`}
    >
      <div className={styless.bascetContainer}>
        <div className={styless.title}>
          <h2>Корзина</h2>
          <ButtonClose onClose={changeStatusBascet} />
        </div>
        {bascetState.length > 0 ? (
          <>
            <div className={styless.productList}>
              {bascetState.map((item: product) => (
                <div className="d-flex jf-sa" key={item.idRoot}>
                  <Product {...item} />
                  <ButtonClose
                    onClose={() => changeBascetState({ ...item }, false)}
                  />
                </div>
              ))}
            </div>
            <div className={styless.containerPrice}>
              <div className={styless.price}>
                <p>Итого</p>
                <span className={styless.line} />
                <p>{bascetPrice()} руб.</p>
              </div>
              <Button onClick={() => purchase(bascetState)}>
                Оформить заказ
                <span className={styless.rightStrelka}>&rarr;</span>
              </Button>
            </div>
          </>
        ) : sendAnOrder ? (
          <Info
            title="Заказ отправлен на обработку"
            text="Товар будет отправлен после обработки"
            img={"/image/storeImage/bascetTrue.jpg"}
          />
        ) : (
          <Info
            title="Корзина пустая"
            text="Добавьте товар в корзину"
            img={"/image/storeImage/basketOff.png"}
          />
        )}
      </div>
    </div>
  );
};

export default Bascet;
