import React, { useContext } from "react";

import { AppContext } from "../store";
import Button from "../UI/Button/Button";

import styless from "./Bascet.module.scss";

interface infoProps {
  title: string;
  text: string;
  img: string;
}

export const Info = ({ title, text, img }: infoProps) => {
  const { changeStatusBascet }: any = useContext(AppContext);
  return (
    <div className={styless.infoContainer}>
      <h3>{title}</h3>
      <img src={img} alt="basket is empty" />
      <p>{text}</p>
      <div>
        <Button onClick={changeStatusBascet}>
          <span>&larr;</span>
          Вернуться назад
        </Button>
      </div>
    </div>
  );
};
