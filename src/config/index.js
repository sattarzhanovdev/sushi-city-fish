import axios from "axios";

export const api = {
  GetProducts: () => axios.get('products.json'),
  PostOrder: (data) => axios.post('orders.json', data),
}