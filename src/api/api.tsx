import axios from "axios";

const instance = axios.create({
  baseURL: `https://react-tests-46f6b-default-rtdb.europe-west1.firebasedatabase.app/`,
});

export const getParams = {
  getProduct: async () => await instance.get(`product.json`),
  getLike: async () => await instance.get(`like.json`),
  getBasket: async () => await instance.get(`basket.json`),
  getPurchaseHistory: async () => await instance.get(`purchase_history.json`),
};

export const postParams = {
  postProduct: async ({ idRoot, title, imageURL, price }: any) =>
    await instance.post(
      `product.json`,
      JSON.stringify({ idRoot, title, imageURL, price })
    ),
  postLike: async ({ idRoot, title, imageURL, price }: any) =>
    await instance.post(
      `like.json`,
      JSON.stringify({ idRoot, title, imageURL, price })
    ),
  postBasket: async ({ idRoot, title, imageURL, price }: any) =>
    await instance.post(
      `basket.json`,
      JSON.stringify({ idRoot, title, imageURL, price })
    ),
  postPurchaseHistory: async (purchase: any) =>
    await instance.post(`purchase_history.json`, JSON.stringify([...purchase])),
};

export const deleteParams = {
  deleteProduct: async (id: number | string) =>
    await instance.delete(`product/${id}.json`),
  deleteLike: async (id: number | string) =>
    await instance.delete(`like/${id}.json`),
  deleteBasket: async (id: number | string) =>
    await instance.delete(`basket/${id}.json`),
};
