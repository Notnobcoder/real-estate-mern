import { useQuery } from "@apollo/client";
import { ApiClient } from "../../ApiClient/fetch.apiClient";
import { GetUsersResponse } from "../../utils/types.utils";
import ProductCard from "../../components/ProductCard";
import LoadingLayout from "../../layout/Loading";

export const Details = () => {
  const { loading, error, data } = useQuery<GetUsersResponse>(ApiClient.GET_LOCATIONS);

  if (error) return <p>Error : {error.message}</p>;

  return (
    <div className="p-4">
      <h4 className="text-3xl my-4">Details Image</h4>
      <LoadingLayout loading={loading} >
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          {data?.getProduct?.map((product) => (
            <ProductCard
              key={product?.id}
              product={product}
            />
          ))}
        </div>
      </LoadingLayout>
    </div>
  );
};
