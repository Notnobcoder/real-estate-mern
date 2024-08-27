import { useQuery } from "@apollo/client";
import { ApiClient } from "../../../ApiClient/fetch.apiClient";

export type GetBrandT = {
  getBrands?: GetBrand[];
}

export type GetBrand = {
  id?: string;
  name?: string;
  slug?: string;
  imageUrl?: string;
  description?: string;
  isActive?: boolean;
  __typename?: string;
}

export const ShowBrand = () => {
  const { data, loading, error } = useQuery<GetBrandT>(ApiClient.GET_Brand)
  const brands = data?.getBrands;

  if (loading) {
    return "LOADING PLEASe wait ......... "
  }

  if (error) {
    return "error occured "

  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-4">
        {brands?.map((_) => (
          <div key={_.id}>
            <h4>{_.name}</h4>
            <img className="h-[200px] w-full object-cover" src={_.imageUrl} />
          </div>

        ))}
      </div>
    </div>
  )
};
