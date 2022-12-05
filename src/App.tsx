import React, { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Bascet from "./components/Bascet";
import { AppContext } from "./components/store";
import Favorites from "./page/favorites/Favorites";
import { Orders } from "./page/orders/Orders";
import { getParams } from "./api/api";
import Card from "./components/Card";

import "./index.scss";

function App() {
  const {
    setData,
    setFavorites,
    helperSet,
    setBascetSate,
    setIsLoadingCard,
    cartStatus,
  }: any = useContext(AppContext);

  useEffect(() => {
    /* eslint-disable react-hooks/exhaustive-deps */
    try {
      (async () => {
        const product = await getParams.getProduct();
        const like = await getParams.getLike();
        const basket = await getParams.getBasket();

        Promise.all([product, like, basket]).then((value: any) => {
          try {
            setData(value[0].data);
            setFavorites(helperSet(value[1].data));
            setBascetSate(helperSet(value[2].data));
          } catch {
            console.log("server pust");
          }
        });
      })();
    } catch (e) {
      console.log(e);
    } finally {
      setTimeout(() => setIsLoadingCard(false), 1000);
    }
  }, []);

  return (
    <div className="wrapper">
      <Header />
      {cartStatus && <Bascet />}
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  );
}

export default App;
