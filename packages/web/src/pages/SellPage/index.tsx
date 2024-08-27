import MerchantForm from "../../forms/merchant"
import { ApiClient } from "../../ApiClient/fetch.apiClient"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom";

export type MerchantType = {
  getMerchant?: GetMerchant[];
}

export type GetMerchant = {
  id?: string;
  name?: string;
  email?: string;
  phoneNumber?: string;
  brandName?: string;
  business?: string;
  status?: string;
  isActive?: boolean;
}

const SellPage = () => {
  const { data } = useQuery<MerchantType>(ApiClient.GET_MERCHANT)
  console.log(data, "ccc")




  return (
    <div className="p-4">
      <div className="container">
        <Link to={"/"}>
          <h4 className="text-xl font-bold">Merchant Form</h4>
        </Link>
        <MerchantForm />
      </div>
      {/* <div> */}
      {/*   <h4 className="text-5xl">Merchant Details</h4> */}
      {/*   <div className="space-y-8"> */}
      {/*     {data?.getMerchant?.map((_) => ( */}
      {/*       <div key={_.id}> */}
      {/*         <h4 className="text-xl">{_.name}</h4> */}
      {/*         <h4 className="text-xl">{_.email}</h4> */}
      {/*         <h4 className="text-xl">{_.phoneNumber}</h4> */}
      {/*         <h4 className="text-xl">{_.brandName}</h4> */}
      {/*         <h4 className="text-xl">{_.business}</h4> */}
      {/*         <h4 className="text-xl">{_.status}</h4> */}
      {/*         <h4 className="text-xl">{_.isActive}</h4> */}
      {/*       </div> */}
      {/**/}
      {/*     ))} */}
      {/*   </div> */}
      {/**/}
      {/* </div> */}
    </div>
  )
}

export default SellPage
