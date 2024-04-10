import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HomeLayoutHero } from "../../layouts/HomeLayoutHero";
import { EndPoint } from "../../network";
import { LoadingLayout } from "../../layouts/LoadingLayout";
import { Link } from "react-router-dom";

export interface pageProps {}

export type ProductsD = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export const Home = () => {
  const { isPending, data, error } = useQuery<ProductsD>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get<ProductsD>(EndPoint);
      return response.data;
    },
  });

  if (error) return "An error has occurred: " + error.message;
  return (
    <>
      <HomeLayoutHero>
        <Link to="/lalit">lalit</Link>
        <LoadingLayout loading={isPending}>
          {data?.products.map((_i) => <h4>{_i.title}</h4>)}
        </LoadingLayout>
      </HomeLayoutHero>
    </>
  );
};
