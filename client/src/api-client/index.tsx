import axios from "axios"
import { EndPoint } from "../network"
import { ProductsD } from "../types/home"

export const fetchHotels = async () => {
  const response = await axios.get(`${EndPoint}/products`)
  if (!response) {
    throw new Error("Error fetching products")
  }
  return response.data

}


export const retrievePosts = async () => {
  const response = await axios.get<ProductsD>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return response.data;
};




