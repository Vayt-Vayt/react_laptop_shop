import React, { createContext, useState } from "react";
import { deleteParams, getParams, postParams } from "../api/api";

import { product } from "./Card";

export const AppContext = createContext({});

export const ContextState = ({ children }: any) => {
  const [cartStatus, setCartStatus] = useState(false);
  const [bascetState, setBascetSate] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [data, setData] = useState([]);
  const [isLoadingCard, setIsLoadingCard] = useState(true);
  const [orderState, setOrderState] = useState([]);
  const [sendAnOrder, setSendAnOrder] = useState(false);

  const helperSet = (data: any): any =>
    Object.keys(data).map((key: string) => {
      return {
        ...data[key],
        id: key,
      };
    });

  const changeStatusBascet = () => {
    if (sendAnOrder) {
      setSendAnOrder(false);
    }
    setCartStatus((status) => !status);
  };

  const changeState = (
    item: product,
    state: any,
    setFunction: Function,
    typeAPI: string,
    type: boolean = true
  ) => {
    let get: any;
    let post: any;
    let del: any;

    if (typeAPI === "bascet") {
      get = getParams.getBasket;
      post = postParams.postBasket;
      del = deleteParams.deleteBasket;
    }

    if (typeAPI === "favorite") {
      get = getParams.getLike;
      post = postParams.postLike;
      del = deleteParams.deleteLike;
    }

    if (type) {
      post(item).then((res: any) => {
        get().then((response: { data: product }) =>
          setFunction((prev: any) => helperSet(response.data))
        );
      });
    }

    if (!type) {
      state.map((items: product) =>
        items.idRoot === item.idRoot
          ? del(items.id).then((res: any) => {
              setFunction((prev: any) =>
                prev.filter(
                  (items: any) => Number(items.idRoot) !== Number(item.idRoot)
                )
              );
            })
          : items
      );
    }
  };

  const changeBascetState = (item: product, type: boolean = true) => {
    changeState(item, bascetState, setBascetSate, "bascet", type);
  };

  const changeFavoritesState = (item: product, type: boolean = true) => {
    changeState(item, favorites, setFavorites, "favorite", type);
  };

  const bascetPrice = () =>
    bascetState.reduce((sum: number, state: product) => sum + state.price, 0);

  const purchase = (products: any) => {
    setSendAnOrder(true);
    postParams.postPurchaseHistory(products).then(() => {
      products.forEach((elem: product) => deleteParams.deleteBasket(elem.id));
      // getParams.getPurchaseHistory().then((response) => console.log(response));

      setBascetSate([]);
    });
  };

  return (
    <AppContext.Provider
      value={{
        setData,
        cartStatus,
        changeStatusBascet,
        bascetState,
        setBascetSate,
        changeBascetState,
        favorites,
        setFavorites,
        changeFavoritesState,
        bascetPrice,
        isLoadingCard,
        setIsLoadingCard,
        data,
        purchase,
        orderState,
        setOrderState,
        sendAnOrder,
        helperSet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
