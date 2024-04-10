import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { EndPoint } from "../../network";
import { ProductsD } from "../home";

export const Lalit = () => {
  const { error, data } = useQuery<ProductsD>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get<ProductsD>(EndPoint);
      return response.data;
    },
  });

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <>
      <h3 className="text-3xl capitalize text-yellow-500">hello lalit</h3>
      <div className="grid grid-cols-3">
        {data?.products.map((_i) => (
          <div>
            <h3>{_i.brand}</h3>
            <img src={_i.images[0]} className="h-[200px] object-cover" />
          </div>
        ))}
      </div>
    </>
  );
};
