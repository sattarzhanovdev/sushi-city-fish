import axios from "axios";

export const api = {
  GetProducts: () => axios.get('products.json'),
  PostOrder: (data) => axios.post('orders/.json', data),
  GetOrder: (id) => axios.get(`orders/${id}/.json`),
  SetOrderStatus: (id, data) => axios.patch(`orders/${id}/.json`, data),
  GetSingleProduct: (id) => axios.get(`/products/${id}/.json`)
}