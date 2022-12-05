import React, { useContext } from "react";
import ContentLoader from "react-content-loader";

import { product } from "../../components/Card";
import { AppContext } from "../../components/store";

import styless from "./Items.module.scss";

const Item = ({ idRoot, title, imageURL, price, btnBoolean }: product) => {
  const {
    bascetState,
    changeBascetState,
    favorites,
    changeFavoritesState,
    isLoadingCard,
  }: any = useContext(AppContext);

  const loader = () => {
    return (
      <ContentLoader
        speed={2}
        width={380}
        height={200}
        viewBox="0 0 400 160"
        backgroundColor="#deddda"
        foregroundColor="#ecebeb"
      >
        <rect x="180" y="20" rx="10" ry="10" width="180" height="50" />
        <rect x="260" y="121" rx="10" ry="10" width="30" height="30" />
        <rect x="20" y="0" rx="10" ry="10" width="140" height="100" />
        <rect x="70" y="123" rx="5" ry="5" width="125" height="20" />
      </ContentLoader>
    );
  };

  const status = bascetState.find((item: any) => item.idRoot === idRoot);
  const statusFavorites = favorites.find((item: any) => item.idRoot === idRoot);

  if (isLoadingCard) return loader();

  return (
    <div className={styless.contant}>
      <div className="d-flex jf-sa">
        {statusFavorites ? (
          <span
            onClick={() => changeFavoritesState({ idRoot }, false)}
            className={`${styless.favotites} ${styless.active}`}
          >
            &hearts;
          </span>
        ) : (
          <span
            onClick={() =>
              changeFavoritesState({ idRoot, title, imageURL, price })
            }
            className={styless.favotites}
          >
            &hearts;
          </span>
        )}
        <img src={imageURL} alt="product" />
        <h5>{title}</h5>
      </div>
      <div className={styless.priceAdd}>
        <h4 className={styless.opacity}>Цена: {price}</h4>
        {btnBoolean &&
          (status ? (
            <button
              className={styless.active}
              onClick={() => changeBascetState({ idRoot }, false)}
            >
              &#10004;
            </button>
          ) : (
            <button
              onClick={() =>
                changeBascetState({ idRoot, title, imageURL, price })
              }
            >
              &#10010;
            </button>
          ))}
      </div>
    </div>
  );
};

export default Item;
